import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Plans() {
  return (
    <AuthGuard>
      <Wrapper>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-8">Create Your Plan</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-dashed rounded-xl p-10 text-center">
              <div className="text-4xl text-gray-500 mb-4">+</div>
              <h2 className="text-lg font-semibold mb-2">
                Add Basic Plan Pricing
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="border-2 border-dashed rounded-xl p-6 text-center">
              <div className="text-4xl text-gray-500 mb-4">+</div>
              <h2 className="text-lg font-semibold mb-2">
                Add Silver Plan Pricing
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="border-2 border-dashed rounded-xl p-6 text-center">
              <div className="text-4xl text-gray-500 mb-4">+</div>
              <h2 className="text-lg font-semibold mb-2">
                Add Golden Plan Pricing
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </AuthGuard>
  );
}

export default Plans;
