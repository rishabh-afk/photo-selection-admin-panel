"Use Client";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center  bg-white-100 p-28">
      <div className="bg-white shadow-md rounded-2xl p-14 max-w-5xl w-full border border-black ">
        <h2 className="text-4xl font-bold mb-6 text-left">Contact Us</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#D9D9D9]"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#D9D9D9]"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 h-32 bg-[#D9D9D9]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#00897B] text-white py-5 rounded-lg text-lg font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
