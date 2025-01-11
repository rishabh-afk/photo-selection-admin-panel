import React from "react";
import Image from "next/image";
import OtpVerification from "@/components/chart/OtpVerification";

const Otp_Veriufication: React.FC = () => {
  return (
    <div className="min-h-screen max-h-screen flex">
      <div className="w-1/2 max-h-full bg-gray-200 flex items-center justify-center">
        <div className="text-center overflow-hidden">
          <Image
            src={"/assets/login/login_bg.png"}
            width={650}
            height={600}
            alt="Person holding camera"
            className=" min-w-fit max-h-fit object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 max-h-full flex flex-col items-center justify-center p-16">
        <div className="flex justify-start mr-auto items-center mt-4 mb-8">
          <Image
            width={40}
            height={40}
            src={"/assets/logo/primary_logo.svg"}
            alt="Login icon"
            className="mr-2"
          />
          <h1 className="text-xl text-left font-bold">PICMAA.COM</h1>
        </div>
        <h2 className="text-3xl font-bold mr-auto mb-4">Welcome Back!</h2>
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="col mr-auto text-left">
          <OtpVerification email={undefined} />
        </div>
      </div>
    </div>
  );
};

export default Otp_Veriufication;
