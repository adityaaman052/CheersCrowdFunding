"use server"

import Razorpay from "razorpay"
import payment from "@/models/payment"
import connectDB from "@/db/connectDb"
import userModel from "@/models/user"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let user = await userModel.findOne({ username: to_username })
    if (!user) {
        return { error: "User not found" } // Removed throw, returning an error object instead
    }
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // Create a payment object which shows a pending payment in the database
    await payment.create({ 
        oid: x.id, 
        amount: amount, 
        to_user: to_username, 
        name: paymentform.name, 
        message: paymentform.message 
    })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let user = await userModel.findOne({ username: username })

    if (!user) {
        return null // Removed the error and returning null
    }

    let userObject = user.toObject({ flattenObjectIds: true })
    return userObject
}

export const fetchpayments = async (username) => {
    await connectDB()
    let payments = await payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return payments
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let newData = Object.fromEntries(data)
    
    // If the username is being updated, check if the new username is available
    if (oldusername !== newData.username) {
        let existingUser = await userModel.findOne({ username: newData.username })
        if (existingUser) {
            return { error: "Username already exists" }
        }
        await userModel.updateOne({ email: newData.email }, newData)
        // Update all the username in the payment table
        await payment.updateMany({ to_user: oldusername }, { to_user: newData.username })
    } else {
        await userModel.updateOne({ email: newData.email }, newData)
    }

    return { success: true } // Added success response after profile update
}
