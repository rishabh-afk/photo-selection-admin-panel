"use client";

import Wrapper from "@/components/common/Wrapper";
import AuthGuard from "@/components/AuthGuard";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image";
import { MdCircle } from "react-icons/md";
import PlanBoxes from "@/components/common/PlansBoxes";
import React, { useEffect, useState } from "react";

const Subscription: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // Assuming the data is an array of objects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // when u will get the base url
  //   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Accessing the base URL from the .env file

  //   if (!baseUrl) {
  //     setError('Base URL is not defined');
  //     setLoading(false);
  //     return;
  //   }
  // const response = await fetch(`${baseUrl}/api/storagePackage/get-all`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.0.159:8000/api/storagePackage/get-all`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.data); // Assuming result.data contains the array of storage packages
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthGuard>
      <Wrapper>
        <>
          {/* first box */}
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-roboto text-3xl font-bold leading-normal">
              Subscription
            </span>

            <div className="flex gap-[10px]">
              <button className="flex w-[173px] h-[50px] p-[13px] justify-center items-center gap-[10px] flex-shrink-0 border-[1px] border-[#00897B] bg-white rounded-[5px]">
                <VscAccount className="w-[14px] h-[16px] flex-shrink-0 fill-[#00897B]" />
                <span className="text-[#00897B] font-inter text-[14px] font-medium leading-normal">
                  Contact us
                </span>
              </button>

              <button className="flex w-[173px] p-[13px] justify-center items-center gap-[10px] rounded-[5px] bg-[#00897B]">
                <Image
                  src="/assets/icons/changePlan.svg"
                  alt="Sort Icon"
                  width={15}
                  height={15}
                />
                <span className="text-white font-inter text-[14px] font-medium leading-normal">
                  Change Plan
                </span>
              </button>
            </div>
          </div>

          {/* buttons we have */}
          <div className="flex space-x-[20px] justify-between mt-6">
            <div className="w-22 h-18 flex-shrink-0 rounded-[20px] border-[1px] border-[#00897B] bg-[rgba(0,137,123,0.10)] flex items-center px-8 py-2">
              <Image
                src="/assets/icons/basic.svg"
                alt="Sort Icon"
                width={36}
                height={40}
                className="flex-shrink-0"
              />
              <div className="flex flex-col ml-[10px]">
                <span className="text-black font-inter text-[10px] font-medium leading-normal">
                  Subscription
                </span>
                <span className="text-black font-inter text-[24px] font-medium leading-normal">
                  Basic Plan
                </span>
              </div>
            </div>

            <div className="w-22 h-18 flex-shrink-0 rounded-[20px] border-[1px] border-[#00897B] bg-[rgba(0,137,123,0.10)] flex items-center px-8 py-2">
              <div className="w-[40px] h-[40px] bg-[#00897B] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/GB.svg"
                  alt="Sort Icon"
                  width={20}
                  height={25}
                  className="flex-shrink-0"
                />
              </div>
              <div className="flex flex-col ml-[10px]">
                <span className="text-black font-inter text-[10px] font-medium leading-normal">
                  Monthly GB Limit
                </span>
                <span className="text-black font-inter text-[24px] font-medium leading-normal">
                  100 GB
                </span>
              </div>
            </div>

            <div className="w-22 h-18 flex-shrink-0 rounded-[20px] border-[1px] border-[#00897B] bg-[rgba(0,137,123,0.10)] flex items-center px-8 py-2">
              <div className="w-[40px] h-[40px] bg-[#00897B] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/RS.svg"
                  alt="Sort Icon"
                  width={20}
                  height={25}
                  className="flex-shrink-0"
                />
              </div>
              <div className="flex flex-col ml-[10px]">
                <span className="text-black font-inter text-[10px] font-medium leading-normal">
                  Plan Cost
                </span>
                <span className="text-black font-inter text-[24px] font-medium leading-normal">
                  ₹ 499.00/mo
                </span>
              </div>
            </div>

            <div className="w-22 h-18 flex-shrink-0 rounded-[20px] border-[1px] border-[#00897B] bg-[rgba(0,137,123,0.10)] flex items-center px-8 py-2">
              <div className="w-[40px] h-[40px] bg-[#00897B] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/time.svg"
                  alt="Sort Icon"
                  width={20}
                  height={25}
                  className="flex-shrink-0"
                />
              </div>

              <div className="flex flex-col ml-[10px]">
                <span className="text-black font-inter text-[10px] font-medium leading-normal">
                  Renew Date
                </span>
                <span className="text-black font-inter text-[24px] font-medium leading-normal">
                  Fab 16, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Monthly used data */}
          <div className="flex flex-col space-y-[20px] mt-8">
            {/* Monthly Used GB Data Text */}
            <span className="text-black font-roboto text-[24px] font-semibold leading-normal">
              Monthly Used GB Data
            </span>

            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#00897B] h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
              <MdCircle className="text-[#00897B] w-[24px] h-[200px]  absolute top-[213px] right-[569px]" />
            </div>

            {/* Buttons */}
            <div className="flex justify-between w-full">
              <button className="flex w-[107px] p-[10px] justify-center items-center gap-[10px] rounded-[5px] border-[1px] border-[#00897B] bg-[#00897B]">
                <span className="text-white font-roboto text-[12px] font-medium leading-normal">
                  40 GB Used
                </span>
              </button>

              <button className="flex w-[107px] p-[10px] justify-center items-center gap-[10px] rounded-[5px] border-[1px] border-[#00897B] bg-[#00897B]">
                <span className="text-white font-roboto text-[12px] font-medium leading-normal">
                  60 GB Left
                </span>
              </button>
            </div>
          </div>

          {/* Upgrade and get more */}
          <div className="flex flex-col space-y-[20px] mt-8">
            <span className="text-black font-roboto text-[24px] font-semibold leading-normal">
              Upgrade and Get More
            </span>

            <div className="flex justify-between mt-8">
              <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && data.length > 0 && (
                  <div>
                    {data.map((item,index) => (
                        <div key={index}>

                      <PlanBoxes
                        oID={item._id}
                        btnName="Subscribe"
                        isPopular={false}
                        price={item.price}
                        planName={item.name}
                        storageLimit={item.storageLimit}
                        unit={item.unit}
                        duration={item.duration}
                        durationUnit={item.durationUnit}
                        isActive={item.isActive}
                        />
                        </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-[20px] mt-8">
            <div></div>
          </div>
        </>
      </Wrapper>
    </AuthGuard>
  );
};

export default Subscription;
