"use client";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation"


const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""});
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter(); // Correctly use useRouter

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
      toast('Thanks for your donation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }

    // Ensure navigation only happens when router is ready
    if (router.isReady) {
      router.push(`/${username}`);
    }
  }, [searchParams, router, username]);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      const user = await fetchuser(username);
      setCurrentUser(user);
      const dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
      console.log(user, dbpayments);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const pay = async (amount) => {
    if (!razorpayLoaded) {
      console.error('Razorpay SDK not loaded yet.');
      return;
    }

    try {
      const { id: orderId } = await initiate(amount, username, paymentform);

      const options = {
        "key": currentUser.razorpayid,
        "amount": amount,
        "currency": "INR",
        "name": "Buy me a Chai",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId,
        "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        "prefill": {
          "name": "Ankit Kumar",
          "email": "ankit.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
      />
      <div className="cover w-full bg-red-50 relative">
        <img className="object-cover w-full h-[350]" src={currentUser.coverpic} alt="Cover" />
        <div className="absolute -bottom-16 right-[46%] border-white border-2 rounded-full">
          <img className="rounded-full" width={120} height={50} src={currentUser.profilepic} alt="Profile" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-20 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Let's donate to {username}</div>
        <div className="text-slate-400">{ payments.length} Payments .  ₹{payments.reduce((a,b) => a+b.amount/100,0)} raised</div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Top 10 Supporters</h2>
            <ul className="mx-1 text-lg">
              {payments.length === 0 && <li>No Payments Yet!</li>}
              {payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-2 rounded-full">
                  <img className="rounded-full" width={27} src="avatar2.gif" alt="user avatar" />
                  <span>{p.name} donated <span className="font-bold">₹{p.amount / 100}</span> with a message "{p.message}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input onChange={handleChange} value={paymentform.name} name='name' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
              <button onClick={() => pay(paymentform.amount * 100)}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-600 disabled:from-slate-900"
                disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length<1}
              >
                Pay
              </button>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(2000)}>Pay ₹20</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(5000)}>Pay ₹50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
