import React from "react";
import Link from "next/link";
import Image from "next/image";
import OtpVerification from "@/components/chart/OtpVerification";

const Otp_Veriufication: React.FC = () => {
  return (
    <div className="bg-[url('/assets/bg/bg.png')] bg-cover min-h-screen flex justify-center items-center">
      <div className="container-sm m-5 mx-2 bg-white shadow rounded-md h-auto items-center lg:py-2 lg:flex lg:w-3/5 lg:mx-auto">
        <div className="col mx-auto pt-6 px-10 max-w-md text-center lg:mx-0 lg:flex-auto lg:py-4 lg:text-left lg:w-2/4 lg:pt-8 lg:px-2 lg:pl-10">
          <OtpVerification email={undefined} />
        </div>
        <div className="col rounded m-4 py-4 mx-8 bg-[#fff8ec] lg:w-2/4">
          <Image
            src={"/assets/otp/otp.png"}
            alt="Illustration"
            width={220}
            height={180}
            priority
            unoptimized
            className="mx-auto mt-4 object-contain"
          ></Image>
          <div className="flex-fill my-4 text-center">
            <h6 className="mb-0 font-semibold text-xl">Verification in Progress</h6>
            <p className="text-sm font-semibold text-gray-400 px-4">
              Please enter the code sent to your Email or phone.
            </p>
          </div>
          <Link href="/dashboard">
            <Image
              src={"/assets/logo/black_logo.png"}
              alt="logo"
              width={125}
              height={100}
              priority
              unoptimized
              className="mx-auto w-2/3 my-4 object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp_Veriufication;
