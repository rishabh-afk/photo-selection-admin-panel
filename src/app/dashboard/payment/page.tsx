"use client";

import Wrapper from "@/components/common/Wrapper";
import AuthGuard from "@/components/AuthGuard";
import Image from "next/image";

// Mocked Data

const Payment: React.FC = () => {
  // Since this is dummy data, we can simulate loading and error states

  return (
    <AuthGuard>
      <Wrapper>
        <>
          <div className="flex justify-start mr-auto items-center  mb-4">
            <Image
              width={27}
              height={27}
              src={"/assets/icons/logo.svg"}
              className="mr-2"
              alt="logo icon"
            />
            <h1 className="text-[#00897B] font-roboto text-[18px] font-bold leading-normal">
              PICMAA.COM
            </h1>

          </div>
            <h2 className="text-black font-roboto text-[32px] font-medium leading-normal">
              Select Payment Method
            </h2>
        </>
      </Wrapper>
    </AuthGuard>
  );
};

export default Payment;
