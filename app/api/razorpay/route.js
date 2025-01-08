import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment";
import User from "@/models/user"; // Ensure User is correctly imported
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if razorpay_order_id is present in the server
    let payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
        return NextResponse.json({ success: false, message: "Order Id not found" });
    }

    // Fetch the secret of the user who is receiving the payment
    let user = await User.findOne({ username: payment.to_user });
    if (!user) {
        return NextResponse.json({ success: false, message: "User not found" });
    }
    const secret = user.razorpaysecret;

    // Verify the payment
    let isValid = validatePaymentVerification(
        {
            order_id: body.razorpay_order_id,
            payment_id: body.razorpay_payment_id
        },
        body.razorpay_signature,
        secret
    );

    if (isValid) {
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
    } else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" });
    }
}
