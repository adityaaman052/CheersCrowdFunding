import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects!",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen text-white"
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
