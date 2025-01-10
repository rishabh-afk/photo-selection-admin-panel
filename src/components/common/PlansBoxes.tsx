import React from "react";
import AlertButton from "./AlertButton";
import { Post } from "@/hooks/apiUtils";


// Define the props types
interface PlanBoxesProps {
  btnName?: string; // The text for the button (optional)
  isPopular?: boolean; // Whether the "Most Popular" button is shown or not (optional)
  price?: number;
  planName?: string;
  storageLimit?: number;
  unit?: string;
  duration?: number;
  durationUnit?: string;
  isActive?: boolean;
  oID?: string;
}

const PlanBoxes: React.FC<PlanBoxesProps> = ({
  btnName,
  isPopular,
  price,
  // durationUnit,
  // isActive,
  // duration,
  planName,
  storageLimit,
  unit,
  oID,
}) => {
 



  const handleConfirm = async () => {
    console.log("Confirmed!");
  
    // Retrieve email, password, and token from localStorage
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    // const token = localStorage.getItem("authToken"); // Assuming the token is stored in localStorage
    // Replace this with your actual order ID variable
  
    // Ensure that email, password, and token are available
    // if (!localEmail || !localPassword || !token) {
    //   console.error("Missing email, password, or token in localStorage.");
    //   return;
    // }
  
    try {
      // Prepare headers with Authorization (Bearer token)
      // const headers = {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json',
      // };
  
      // Send the POST request to create the order
      const response = await Post<{ redirectUrl?: string }>(
        "http://192.168.0.159:8000/api/payments/create-order", // Your payment API endpoint
        {
          identifier: localEmail || "example@mail.com", // Send email
          password: localPassword || "asdfdsafdsa", // Send password
          packageId: oID, // Send order ID (oID) in the body
        },
        5000, // Timeout duration (5 seconds)
        false // Don't dismiss toast by default
      );
  
      // Check if the response contains a redirect URL
      if (response?.redirectUrl) {
        window.location.href = response.redirectUrl; // Redirect to the provided URL
      } else {
        // Handle the case where no redirect URL is returned
        console.log("Order created successfully, but no redirect URL was provided.");
      }
    } catch (error: unknown) {
      // Handle errors by logging them to the console
      if (error instanceof Error) {
        console.error("Error during order creation:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };
  



  // const handleConfirm = async () => {
  //   console.log("Confirmed!");
  
  //   // Retrieve email and password from localStorage
  //   const localEmail = localStorage.getItem("email");
  //   const localPassword = localStorage.getItem("password");
  
  //   // if (!localEmail || !localPassword) {
  //   //   console.error("Email or password is missing in localStorage.");
  //   //   return; // Return early if email or password is not available
  //   // }
  
  //   try {
  //     // Send the POST request to create the order
  //     const response: any = await Post(
  //       "http://192.168.0.159:8000/api/payments/create-order", // The payment endpoint
  //       {
  //         // identifier: localEmail,
  //         // password: localPassword,
  //         packageId:{oID}
  //       },
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       }
        
  //       5000 // Timeout duration in ms
  //     );
  
  //     // Check if the response is ok
  //     if (!response.ok) {
  //       throw new Error("Failed to create order");
  //     }
  
  //     const result = await response.json();
  
  //     // Check if the API response contains a redirect URL
  //     if (result.redirectUrl) {
  //       window.location.href = result.redirectUrl; // Redirect to the provided URL
  //     } else {
  //       // Handle the case where there's no redirect
  //       console.log("Order created successfully, but no redirect provided.");
  //     }
  //   } catch (error: unknown) {
  //     // Type the error as 'unknown' and check if it's an instance of 'Error'
  //     if (error instanceof Error) {
  //       console.error("Error during order creation:", error.message);
  //     } else {
  //       console.error("An unknown error occurred");
  //     }
  //   }
  // };
  

  //192.168.0.159:8000/api/payments/create-order

  http: return (
    <div
      style={{ zIndex: "10" }}
      className="h-[705px] flex-shrink-0 rounded-[17.789px] border-[0.889px] border-[#00897B] bg-white flex flex-col items-center justify-between p-[20px] space-y-4 relative"
    >
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
        {planName}
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
        Bandwidth Limit {storageLimit} {unit}
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
      <AlertButton
        //   name of the button
        btnCall={btnName}
        isPopular={isPopular}
        head="Main Heading"
        color="gray"
        question="Redirect to the razor Pay for Subscribe"
        onConfirm={handleConfirm} // Only pass onConfirm
        buttonName="Subscribe" // Optional, if no name is provided, it defaults to "Logout"
      />
    </div>
  );
};

export default PlanBoxes;
