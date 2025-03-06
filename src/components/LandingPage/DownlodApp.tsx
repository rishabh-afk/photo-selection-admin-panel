import Image from "next/image";

export default function DownloadApp() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white p-8">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex justify-center ">
          <Image
            src="/assets/products/app.png"
            alt="Sangeet"
            width={10000}
            height={10000}
            className="rounded-md w-2/3"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 pr-24">
          <h2 className="text-5xl font-bold mb-6">Download Our App</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex space-x-4">
            <Image
              src="/assets/products/appstore.png"
              alt="Sangeet"
              width={10000}
              height={10000}
              className="rounded-md w-1/3"
            />
            <Image
              src="/assets/products/playstore.png"
              alt="Sangeet"
              width={10000}
              height={10000}
              className="rounded-md w-1/3"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-1/2 bg-[#00897B] text-white p-20">
        <h2 className="text-5xl font-bold mb-4 text-center leading-tight">
          Save Up to 50% on your Plan +<br />
          Get a 10 GB Free
        </h2>
        <p className="text-center text-gray-200 mb-8 max-w-5xl py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="bg-white text-[#00897B] px-6 py-6 rounded-xl text-2xl font-extrabold  shadow-md hover:bg-gray-100 w-1/4">
          Get Started
        </button>
      </div>
    </>
  );
}
