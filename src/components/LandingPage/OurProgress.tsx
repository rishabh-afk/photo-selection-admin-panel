"use client";
export default function OurProgress() {
  return (
    <div className="bg-white ">
      <section className="bg-teal-600 py-14 text-white ">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold">Our Progress</h2>
          <p className="mt-4 mb-12 text-lg max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-8 py-10">
          <div className="bg-teal-500 rounded-2xl py-24 px-14 text-center shadow-lg">
            <p className="text-6xl font-bold">500</p>
            <p className="mt-2 text-2xl">Photos Uploaded</p>
          </div>
          <div className="bg-teal-500 rounded-2xl py-24 px-14 text-center shadow-lg">
            <p className="text-6xl font-bold">400</p>
            <p className="mt-2 text-2xl">Events Created</p>
          </div>
          <div className="bg-teal-500 rounded-2xl py-24 px-14 text-center shadow-lg">
            <p className="text-6xl font-bold">200</p>
            <p className="mt-2 text-2xl">Events Created</p>
          </div>
        </div>
      </section>
    </div>
  );
}
