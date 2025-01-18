"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState("");

  // Function to format the current time and date
  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return now.toLocaleString("en-US", options);
  };

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-6 px-4">
      {/* Display Current Time at the Top */}
      <div className="text-center text-sm text-gray-400 mb-4">{currentTime}</div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Logo and Description */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="/teabag2.gif" width={40} alt="Logo" className="rounded-full mr-3" />
          <span className="text-xl font-serif">Cheers</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-purple-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            {/* Twitter Icon */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            {/* Facebook Icon */}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            {/* Instagram Icon */}
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm text-gray-400">
        <div className="mt-2">
          © {new Date().getFullYear()} Cheers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
