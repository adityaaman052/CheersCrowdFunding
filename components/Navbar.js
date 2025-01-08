"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md text-gray-100 px-6 py-3 flex justify-between items-center">
      {/* Logo Section */}
      <Link className="logo flex items-center text-2xl font-semibold tracking-wide" href="/">
        <img src="/teabag2.gif" width={40} alt="Logo" className="rounded-full mr-2" />
        <span className="font-serif text-gray-50">Cheers</span>
      </Link>

      {/* Navigation Buttons */}
      <div className="relative">
        {session ? (
          <>
            {/* Dropdown Trigger */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded-lg flex items-center font-medium shadow-lg"
            >
              Welcome, {session.user.email}
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg ${
                showDropdown ? "" : "hidden"
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/earnings"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-md font-medium">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
