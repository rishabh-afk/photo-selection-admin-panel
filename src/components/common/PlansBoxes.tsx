import React from "react";

// Define the props types
interface PlanBoxesProps {
  btnName?: string; // The text for the button (optional)
  isPopular?: boolean; // Whether the "Most Popular" button is shown or not (optional)
  price?: number;
}

const PlanBoxes: React.FC<PlanBoxesProps> = ({ btnName, isPopular, price }) => {
  return (
    <div className="h-[705px] flex-shrink-0 rounded-[17.789px] border-[0.889px] border-[#00897B] bg-white flex flex-col items-center justify-between p-[20px] space-y-4 relative">
      {/* "Most Popular" Button - Displayed only if isPopular is true */}
      {isPopular && (
        <button className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 flex w-[189.449px] h-[45.876px] px-[8.894px] py-[13.341px] justify-center items-center gap-[8.894px] flex-shrink-0 rounded-[8.894px] bg-[#00897B]">
          <span className="text-white text-center font-roboto text-[16.01px] font-semibold leading-normal">
            Most Popular
          </span>
        </button>
      )}

      {/* Basic Text */}
      <span className="text-black text-center font-roboto text-[21.346px] font-medium leading-normal">
        Basic
      </span>

      {/* Monthly Charge Text */}
      <span className="text-[#424242] text-center font-roboto text-[14.231px] font-medium leading-normal">
        Monthly Charge
      </span>

      {/* Monthly Charge Amount */}
      <span className="text-[#00897B] text-center font-roboto text-[42.693px] font-semibold leading-normal">
        ${price}
      </span>

      {/* Line Divider */}
      <div className="w-[271.276px] h-[0.889px] bg-[#9D9D9D]"></div>

      {/* Free Setup Text */}
      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal">
        Free Setup
      </span>

      {/* Bandwidth Limit Text */}
      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal">
        Bandwidth Limit 10 GB
      </span>

      {/* Additional Texts */}
      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal">
        20 User Connection
      </span>

      {/* Analytics Report Text (with opacity) */}
      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal opacity-40">
        Analytics Report
      </span>

      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal opacity-40">
        Public API Access
      </span>

      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal opacity-40">
        Plugins Integration
      </span>

      <span className="text-[#212121] text-center font-roboto text-[16.01px] font-semibold leading-normal opacity-40">
        Custom Content Management
      </span>

      {/* Line Divider */}
      <div className="w-[271.276px] h-[0.889px] bg-[#9D9D9D]"></div>

      {/* Last Button - Customization based on isPopular prop */}
      <button
        className={`flex w-[208.127px] h-[45.361px] px-[17.789px] py-[13.341px] justify-center items-center gap-[8.894px] flex-shrink-0 rounded-[17.789px] ${
          isPopular
            ? "bg-[#00897B] border-[0.889px] border-[#00897B] text-white"
            : "bg-white border-[0.889px] border-[#00897B] text-[#00897B]"
        }`}
      >
        <span className="text-center font-roboto text-[16.01px] font-medium leading-normal">
          {btnName || "Current Plan"}
        </span>
      </button>
    </div>
  );
};

export default PlanBoxes;
