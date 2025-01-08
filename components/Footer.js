"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 py-6 px-4">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.936 13.936 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.902 4.902 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.921 4.921 0 01-2.224.085c.626 1.956 2.444 3.38 4.6 3.42a9.867 9.867 0 01-6.102 2.105c-.395 0-.788-.023-1.175-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.514 14.009-14.01 0-.213-.004-.425-.015-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.144v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.592l-.467 3.622h-3.125V24h6.128c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.354 3.608 1.329.975.975 1.267 2.243 1.329 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.354 2.633-1.329 3.608-.975.975-2.243 1.267-3.608 1.329-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.354-3.608-1.329-.975-.975-1.267-2.243-1.329-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.354-2.633 1.329-3.608.975-.975 2.243-1.267 3.608-1.329C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.776.13 4.504.443 3.414 1.532 2.324 2.622 2.011 3.894 1.953 5.17.895 6.45.881 6.853.881 12s.014 5.551.072 6.83c.058 1.276.371 2.548 1.461 3.637 1.09 1.09 2.362 1.403 3.637 1.461 1.279.058 1.682.072 6.83.072s5.551-.014 6.83-.072c1.276-.058 2.548-.371 3.637-1.461 1.09-1.09 1.403-2.362 1.461-3.637.058-1.279.072-1.682.072-6.83s-.014-5.551-.072-6.83c-.058-1.276-.371-2.548-1.461-3.637-1.09-1.09-2.362-1.403-3.637-1.461C16.551.014 16.148 0 12 0z" />
              <path d="M12 5.838A6.163 6.163 0 1018.162 12 6.17 6.17 0 0012 5.838zm0 10.327A4.163 4.163 0 1116.162 12 4.167 4.167 0 0112 16.165zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Cheers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
