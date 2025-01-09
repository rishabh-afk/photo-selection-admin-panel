import React from 'react';

interface AlertModelProps {
  question: string; // The dynamic question to be displayed in the modal
  onClose: () => void; // Callback to close the modal
  onConfirm: () => void; // Callback to confirm the action
  isOpen: boolean; // Whether the modal is open or not
  buttonName?: string; // The custom button name (optional)
  head?:string;
  color?:string;
}

const AlertModel: React.FC<AlertModelProps> = ({ 
  question, 
  onClose, 
  onConfirm, 
  isOpen, 
  buttonName,
  head,
  color,

}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-[20px] w-[623px]  p-[30px] flex flex-col items-center justify-between">

      <h2 style={{color:color}} className="text-center text-[24px] font-roboto font-medium leading-normal mb-[20px]">
          {head}
        </h2>
        
        {/* Question Text */}
        <h2 className="text-center text-black text-[16px] font-roboto font-medium leading-normal mb-[20px]">
          Are you sure you want to {question}?
        </h2>

        <div className="flex justify-between w-full mt-auto">
          {/* Close Button */}
          <button
            className="bg-gray-300 text-black px-[20px] py-[10px] rounded-[8px] flex-1"
            onClick={onClose}
          >
            Cancel
          </button>
          
          {/* Confirm Button */}
          <button
            className="bg-[#00897B] text-white px-[20px] py-[10px] rounded-[8px] flex-1 ml-[10px]"
            onClick={onConfirm}
          >
            {buttonName || 'YES'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModel;
