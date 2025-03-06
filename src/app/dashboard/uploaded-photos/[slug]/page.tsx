"use client";
import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import { Fetch } from "@/hooks/apiUtils";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; // Corrected import
import { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";

// const photos = [
//   { src: "/assets/logo/logo.jpg", alt: "Shadi Photos", label: "Shadi Photos" },
//   { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
//   { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
// ];

const Photos: NextPage = () => {
  const { slug } = useParams(); // Access query params (slug in this case) // Correctly using `useRouter` from `next/navigation`
  const [selectedPhotos, setSelectedPhotos] = useState<any[]>([]);
  useEffect(() => {
    const fetchSelectedPhotosData = async (id: any) => {
      try {
        const response: any = await Fetch(
          `/api/events/selected-images/${id}`,
          undefined,
          5000,
          true,
          false
        );
        console.log(response);
        const data = await response.selectedPhotos;
        setSelectedPhotos(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (slug) {
      fetchSelectedPhotosData(slug);
    }
  }, []);
  return (
    <AuthGuard>
      <Wrapper>
        <div className="flex flex-col items-center p-4">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-xl text-left mr-auto font-bold mb-4">Photos</h1>
            <Link href={"/dashboard/uploaded-photos"} className="flex">
              <IoReturnUpBack className="text-4xl text-gray-500 hover:text-gray-700 cursor-pointer" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-start w-full max-w-6xl">
            {selectedPhotos &&
              selectedPhotos?.map((photo, index) => (
                <div key={index} className="m-4 shadow-lg rounded-xl thumbnail w-72 h-36">
                  <Image
                    src={photo?.s3Path}
                    alt={""}
                    width={200}
                    height={160}
                    className="w-full object-cover rounded-lg mb-4 shadow-none min-h-36 h-36  max-w-72 transition-shadow duration-500 ease-in-out group-hover:shadow-lg"
                  />
                  {/* <label className="block mt-2 font-bold">{photo.label}</label> */}
                </div>
              ))}
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default Photos;
