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
}

const AlertButton: React.FC<AlertButtonProps> = ({ 
  question, 
  onConfirm, 
  buttonName, 
  head, 
  color,
  btnCall
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
  className="bg-[#00897B] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#006f5f] hover:scale-105 active:scale-95 transition-all duration-300"
>
  {btnCall}
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
