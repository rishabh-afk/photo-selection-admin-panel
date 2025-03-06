"Use Client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-white min-h-screen">
      <Image
        src="/assets/products/Ellipse.png"
        alt="Studio 1"
        width={310}
        height={310}
        className="rounded-xl absolute"
      />
      <Image
        src="/assets/products/Ellipse2.png"
        alt="Studio 1"
        width={380}
        height={380}
        className="rounded-xl absolute"
      />
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4 pt-10">
        <div className="flex items-center gap-2 ml-20">
          <Image
            src="/assets/icons/camera.svg"
            alt="Picmaa Logo"
            width={40}
            height={40}
          />
          <h1 className="text-lg font-bold text-[#00897B]">PICMAA.COM</h1>
        </div>
        <nav className="flex gap-12 font-bold text-lg mr-12">
          <a href="#" className="text-black-600 hover:text-[#00897B]">
            Home
          </a>
          <a href="#" className="text-black-600 hover:text-[#00897B]">
            How to Use
          </a>
          <a href="#" className="text-black-600 hover:text-[#00897B]">
            Pricing
          </a>
          <a href="#" className="text-black-600 hover:text-[#00897B]">
            Download
          </a>
          <a href="#" className="text-black-600 hover:text-[#00897B]">
            Contact us
          </a>
        </nav>
        <Link href={'/auth/login'} className="px-10 py-2 bg-[#00897B] text-white rounded-md mr-14 text-lg">
          Login
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-wrap  px-10 py-7 md:flex-nowrap ml-20">
        <div className="md:w-1/2 z-10">
          <Image
            src="/assets/products/photo1.png"
            alt="Studio 1"
            width={100}
            height={100}
            unoptimized
            className="rounded-xl w-full object-contain"
          />
        </div>

        <div className="md:w-1/2 ml-5 px-10 pt-24">
          <h1 className="text-5xl font-bold text-black mb-6 leading-snug">
            India’s Best Online Photo Selection Software
          </h1>
          <p className="text-gray-700 text-lg mb-14 mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="px-12 py-6 bg-[#00897B] text-white rounded-lg text-xl font-bold">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
