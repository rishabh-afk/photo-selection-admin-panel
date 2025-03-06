import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00897B] text-white py-20 px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/icons/whiteCamera.svg"
              alt="Logo"
              width={800}
              height={800}
              className="w-8 h-8"
            />
            <h2 className="text-3xl font-bold">PICMAA.COM</h2>
          </div>
          <p className="text-sm font-normal mb-4  leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-lg space-y-3">
            <p>
              <span className="inline-block text-lg font-normal"> 📧 </span>
              Picmaa@gmail.com
            </p>
            <p>
              <span className="inline-block text-lg font-normal"> 📞 </span>
              (406) 555-0120
            </p>
          </div>
          <p className="text-2xl font-bold my-8 block">Follow Us</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="ml-14">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-lg font-semibold">
            <li>Home</li>
            <li>How to Use</li>
            <li>Pricing</li>
            <li>Download</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Others */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-lg font-semibold">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Column 4: Download App Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">Download App From</h3>
          <div className="space-y-4">
            <Image
              src="/assets/products/appstore.png"
              alt="Sangeet"
              width={10000}
              height={10000}
              className="rounded-md w-2/2"
            />
            <Image
              src="/assets/products/playstore.png"
              alt="Sangeet"
              width={10000}
              height={10000}
              className="rounded-md w-2/2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
