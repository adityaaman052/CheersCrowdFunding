import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation Button */}
      <div className="absolute top-5 left-5">
        <Link href={"/"}>
          <button
            type="button"
            className=" mt-14 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Go Back
          </button>
        </Link>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-lg shadow-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-purple-300">About Get Me a Chai</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to <strong>Get Me a Chai</strong> – your go-to destination for the perfect cup of chai. Our mission is to deliver a 
          refreshing and authentic chai experience straight to your doorstep, ensuring every sip transports you to the heart 
          of tradition and flavor.
        </p>

        {/* Our Story */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Story</h2>
        <p className="text-gray-300 mb-6">
          What started as a humble chai stall has blossomed into an online platform that serves chai lovers far and wide. Our 
          team is passionate about sharing the rich heritage of chai – from classic masala chai to modern innovations, all 
          brewed with love and the finest ingredients.
        </p>

        {/* Why Choose Us? */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-300 text-left mx-auto max-w-lg mb-6">
          <li>Handcrafted chai blends for authentic taste</li>
          <li>Fast and reliable delivery to your doorstep</li>
          <li>A variety of chai flavors to suit every mood</li>
          <li>Unwavering commitment to quality and customer satisfaction</li>
        </ul>

        {/* Closing Statement */}
        <p className="text-gray-300">
          At <strong>Get Me a Chai</strong>, we believe that chai is more than just a drink—it's a moment of connection, relaxation, 
          and joy. Let us be a part of your chai journey, creating memories one cup at a time.
        </p>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Get Me a Chai",
};
