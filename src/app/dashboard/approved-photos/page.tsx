import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import { NextPage } from "next";
import Image from "next/image";

const photos = [
  { src: "/assets/logo/logo.jpg", alt: "Shadi Photos", label: "Shadi Photos" },
  { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
  { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
];

const ApprovedPhotos: NextPage = () => {
  return (
    <AuthGuard>
      <Wrapper>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-xl text-left mr-auto font-bold mb-4">Approved Photos</h1>
          <div className="flex flex-wrap justify-start w-full max-w-6xl">
            {photos.map((photo, index) => (
              <div key={index} className="m-4 thumbnail">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={200}
                  height={160}
                  className="w-full rounded-lg mb-4  shadow-none min-h-36 max-w-60 transition-shadow duration-500 ease-in-out group-hover:shadow-lg"
                />
                <label className="block mt-2 font-bold">{photo.label}</label>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default ApprovedPhotos;
