"use client";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { FaGoogle, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - Get Me A Chai";
    if (session && status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
    >
      <div className="py-14 px-6 max-w-lg bg-black bg-opacity-60 rounded-lg shadow-lg w-full">
        <h1 className="text-center font-bold text-3xl mb-10">Login to Get Started</h1>
        <p className="text-center mb-8">Use GitHub [preferable]</p>

        <div className="flex flex-col items-center gap-6">
          {/* Google Login */}
          <button
            className="flex items-center w-full bg-white border border-blue-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <FaGoogle className="mr-3" />
            Continue with Google
          </button>

          {/* LinkedIn Login */}
          <button
            className="flex items-center w-full bg-white border border-blue-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <FaLinkedin className="mr-3" />
            Continue with LinkedIn
          </button>

          {/* Twitter Login */}
          <button
            className="flex items-center w-full bg-white border border-blue-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <FaTwitter className="mr-3" />
            Continue with Twitter
          </button>

          {/* Facebook Login */}
          <button
            className="flex items-center w-full bg-white border border-blue-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <FaFacebook className="mr-3" />
            Continue with Facebook
          </button>

          {/* GitHub Login */}
          <button
            onClick={() => signIn("github")}
            className="flex items-center w-full bg-white border border-blue-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            <FaGithub className="mr-3" />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
