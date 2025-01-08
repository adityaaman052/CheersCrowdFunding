"use client";
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [router, session]);

  const getData = async () => {
    if (session) {
      const user = await fetchuser(session.user.name);
      setForm(user);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await updateProfile(form, session.user.name);
    toast.success("Profile Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
        theme="dark"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex items-center justify-center">
        <div className="w-full max-w-4xl p-6 bg-black bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name" },
              { label: "Email", name: "email" },
              { label: "Username", name: "username" },
              { label: "Profile Picture", name: "profilepic" },
              { label: "Cover Picture", name: "coverpic" },
              { label: "Razorpay ID", name: "razorpayid" },
              { label: "Razorpay Secret", name: "razorpaysecret" },
            ].map((field, index) => (
              <div key={index}>
                <label htmlFor={field.name} className="block mb-2 text-sm font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={form[field.name] || ""}
                  onChange={handleChange}
                  className="block w-full p-3 text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-800 font-medium"
            >
              Save
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
