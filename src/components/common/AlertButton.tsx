"use client";
import AuthGuard from "@/components/AuthGuard";
import AlertModel from "@/components/common/AlertModel";
import { useState } from "react";

// Interface for AlertButtonProps
interface AlertButtonProps {
  question: string;
  onConfirm: () => void;  // Only pass the onConfirm function from parent
  buttonName?: string;
  head?: string;
  color?: string;
  btnCall?: string;
  isPopular?: boolean;
}

const AlertButton: React.FC<AlertButtonProps> = ({ 
  question, 
  onConfirm, 
  buttonName, 
  head, 
  color,
  btnCall,
  isPopular
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthGuard>
      <>
        <div className="flex flex-col space-y-[20px] mt-8">
          <div>
            {/* Button to trigger modal */}
            <button
  onClick={handleOpenModal}

  className={`flex w-[208.127px] h-[45.361px] px-[17.789px] py-[13.341px] justify-center items-center gap-[8.894px] flex-shrink-0 rounded-[17.789px] ${
    isPopular
      ? "bg-[#00897B] border-[0.889px] border-[#00897B] text-white"
      : "bg-white border-[0.889px] border-[#00897B] text-[#00897B]"
  }`}


 
><span className="text-center font-roboto text-[16.01px] font-medium leading-normal">
  {btnCall}
  </span>
</button>


            {/* AlertModel will only receive necessary props */}
            <AlertModel
              head={head || "Main Heading"}
              color={color || "gray"}
              question={question}
              onClose={handleCloseModal}  // Keep onClose to manage modal state in parent
              onConfirm={onConfirm}
              isOpen={isModalOpen} // The modal will be controlled by the parent
              buttonName={buttonName || "Logout"}
            />
          </div>
        </div>
      </>
    </AuthGuard>
  );
};

export default AlertButton;



// use this
{/* <AlertButton
//   name of the button
btnCall="Alert"
head="Main Heading"
color="gray"
question="logout from your account"
onConfirm={handleConfirm} // Only pass onConfirm
//   name of the button inside the button
buttonName="Logout" // Optional, if no name is provided, it defaults to "Logout"

/> */}




// const handleConfirm = () => {
//   console.log("Confirmed!");
//   alert("awork");
// };