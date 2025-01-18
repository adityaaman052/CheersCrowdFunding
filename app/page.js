import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-white text-center h-[70vh] px-8 md:px-16 mt-8 md:mt-16">
        <h1 className="font-extrabold text-3xl md:text-6xl leading-tight mb-4">
          Sip Success with{" "}
          <span className="inline-flex items-center">
            Cheers{" "}
            <img
              className="ml-3 bg-slate-400 rounded-full p-2"
              src="/teabag2.gif"
              width={88}
              alt="Teabag"
            />
          </span>
        </h1>
        <p className="text-sm md:text-lg font-light mb-8 max-w-2xl">
          Empower creators to thrive with direct support from fans. Turn dreams
          into reality, one chai at a time. Begin your journey today!
        </p>
        <div className="flex space-x-6">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full px-6 py-3 text-base md:text-lg"
            >
              Get Started
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full px-6 py-3 text-base md:text-lg"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-purple-700 to-gray-800 h-1 opacity-50"></div>

      {/* Features Section */}
      <div className="text-white container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Cheers?
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="item flex flex-col items-center space-y-4 max-w-xs text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt="Supportive Fans"
            />
            <h3 className="font-semibold text-lg">Supportive Community</h3>
            <p className="text-sm">
              Connect with fans who truly believe in your passion.
            </p>
          </div>
          <div className="item flex flex-col items-center space-y-4 max-w-xs text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt="Financial Support"
            />
            <h3 className="font-semibold text-lg">Seamless Funding</h3>
            <p className="text-sm">
              Receive contributions effortlessly to fuel your journey.
            </p>
          </div>
          <div className="item flex flex-col items-center space-y-4 max-w-xs text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/help.gif"
              alt="Continuous Growth"
            />
            <h3 className="font-semibold text-lg">Unlimited Potential</h3>
            <p className="text-sm">
              Scale your creativity with unwavering community support.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-purple-700 to-gray-800 h-1 opacity-50"></div>

      {/* Video Section */}
      <div className="text-white container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">See Us in Action</h2>
        <div className="w-full flex justify-center">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/axepn8QqxRk?si=bIvjN0apBBsczfvi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-lg max-w-4xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
