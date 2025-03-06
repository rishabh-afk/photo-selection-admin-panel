"use client";

import Image from "next/image";

export default function HowToUse() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-4">How to Use</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg bg-white">
        <div className="md:w-1/2">
          <Image
            src="/assets/products/laptopTyping.png"
            alt="Laptop with photo editing"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-teal-700 text-white p-8 flex flex-col  pl-20 pr-28">
          <button className="bg-teal-600 px-12 py-1 rounded-md text-sm font-semibold mb-4 w-fit  mt-20">
            Step By Step
          </button>
          <ol className="space-y-4 text-left">
            <li>
              <h3 className="text-xl font-semibold">1. UPLOAD PHOTOS</h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">2. SEND FOR SELECTION</h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">3. SORT SELECTED PHOTOS</h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
