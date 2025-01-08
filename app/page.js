import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[60vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 md:text-5xl justify-center items-center text-xl">
          Buy Me a Chai{" "}
          <span>
            <img
              className="bg-slate-400 rounded-full p-2 mx-4"
              src="/teabag2.gif"
              width={88}
              alt="Teabag"
            />
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="flex space-x-4">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Start here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-purple-700 to-gray-800 h-1 opacity-50"></div>

      {/* Features Section */}
      <div className="text-white container mx-auto py-20">
        <h1 className="text-3xl font-bold text-center mb-14">Your Fans can Buy You a Chai</h1>
        <div className="flex flex-wrap gap-8 justify-around">
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt="Supportive Fans"
            />
            <p className="font-bold text-lg">Supportive Fans</p>
            <p className="text-center">Your fans are here to help you succeed!</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt="Financial Support"
            />
            <p className="font-bold text-lg">Financial Support</p>
            <p className="text-center">Receive contributions from your followers.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/help.gif"
              alt="Continuous Growth"
            />
            <p className="font-bold text-lg">Continuous Growth</p>
            <p className="text-center">Grow with the support of your community.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-purple-700 to-gray-800 h-1 opacity-50"></div>

      {/* Video Section */}
      <div className="text-white container mx-auto py-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn More About Us</h2>
        <div className="w-full max-w-3xl">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/axepn8QqxRk?si=bIvjN0apBBsczfvi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
