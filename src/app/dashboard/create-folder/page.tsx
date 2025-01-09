import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import { NextPage } from "next";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";

const photos = [
  { src: "/assets/logo/logo.jpg", alt: "Shadi Photos", label: "Shadi Photos" },
  { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
  { src: "/assets/logo/logo.jpg", alt: "Haldi Photos", label: "Haldi Photos" },
];

const CreateFolder: NextPage = () => {
  return (
    <AuthGuard>
      <Wrapper>
        <div className="flex flex-col items-center p-4">
          <h1 className="text-xl text-left mr-auto font-bold mb-4">
            Create Folder
          </h1>
          <div className="container">
            <div className="m-4 w-60 min-h-36 flex-col justify-center items-center overflow-hidden border border-dashed border-gray-500 rounded-lg text-center">
              <IoAdd className="w-16 h-16 rounded-lg mt-5 m-auto shadow-none  max-w-60 transition-shadow duration-500 ease-in-out group-hover:shadow-lg" />
              <label className="block font-bold">{"Create Folder"}</label>
            </div>
          </div>
          <h1 className="text-xl text-left mr-auto font-bold mt-4 mb-4">
            Created Folder
          </h1>
          <div className="flex flex-wrap justify-start w-full max-w-6xl">
            {photos.map((photo, index) => (
              <div key={index}>
                <div className="m-4 thumbnail overflow-hidden border border-gray-500 rounded-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={200}
                    height={160}
                    className="w-full rounded-lg mb-4  shadow-none min-h-36 max-w-60 transition-shadow duration-500 ease-in-out group-hover:shadow-lg"
                  />
                </div>
                <label className="block mt-5 ml-6 font-bold">
                  {photo.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default CreateFolder;
