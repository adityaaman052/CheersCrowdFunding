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
            className="mt-14 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Go Back
          </button>
        </Link>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-8 rounded-lg shadow-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-purple-300">About Cheers</h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to <strong>Cheers</strong> – a revolutionary platform that empowers creators and innovators through crowdfunding. 
          Our mission is to bridge the gap between dreams and reality, enabling creators to bring their visions to life with 
          the support of a passionate community.
        </p>

        {/* Our Story */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Story</h2>
        <p className="text-gray-300 mb-6">
          Cheers was born from the belief that great ideas deserve to be heard and supported. Whether you're an artist, entrepreneur, 
          or innovator, Cheers provides a platform for you to connect with supporters who believe in your journey. What started as a 
          small initiative has now grown into a thriving ecosystem of creators and backers making a difference together.
        </p>

        {/* Why Choose Cheers? */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Why Choose Cheers?</h2>
        <ul className="list-disc list-inside text-gray-300 text-left mx-auto max-w-lg mb-6">
          <li>A user-friendly platform tailored for creators and backers</li>
          <li>Secure and transparent crowdfunding processes</li>
          <li>Opportunities to build a loyal and supportive community</li>
          <li>Access to tools and resources for maximizing your campaign's success</li>
        </ul>

        {/* What Makes Cheers Special? */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">What Makes Cheers Special?</h2>
        <p className="text-gray-300 mb-6">
          Cheers stands out by focusing on meaningful connections. It's not just about raising funds—it's about creating relationships 
          between creators and their supporters. With every project backed, you're joining a movement to fuel creativity, innovation, 
          and positive change in the world.
        </p>

        {/* Closing Statement */}
        <p className="text-gray-300">
          At <strong>Cheers</strong>, we believe that every dream deserves a chance. Together, let's celebrate creativity, support 
          innovation, and turn possibilities into realities. Join us in shaping the future—one idea, one project, and one cheer at a time!
        </p>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Cheers",
};
