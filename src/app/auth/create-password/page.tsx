"use client";

import { IoMdEye } from "react-icons/io";
import { IoEye, IoEyeOff, IoLockClosedOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Post } from "@/hooks/apiUtils";

const CreatePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isButtonDisabled] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: any = await Post("vendors/reset-password", {
        currentPassword: createPassword,
        confirmPassword: confirmPassword,
      });
      if (response.success) {
        localStorage.setItem("accessToken", response?.data?.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[url('/assets/bg/bg.png')] bg-cover min-h-screen flex justify-center items-center">
      <div className="container-sm m-5 mx-2 bg-white shadow rounded-md h-auto items-center lg:py-2 lg:flex lg:w-2/3 lg:mx-auto">
        <div className="col mx-auto pt-6 items-center max-w-md text-center lg:mx-0 lg:flex-auto lg:py-4 lg:text-left lg:w-2/4 lg:pt-8 lg:px-2 lg:pl-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-left font-semibold text-gray-700 text-sm required mb-2"
                htmlFor="createPassword"
              >
                Create Password
              </label>
              <div className="flex mt-4 justify-between shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  required
                  value={createPassword}
                  autoComplete="off"
                  placeholder="Enter your password"
                  className={`w-full text-primary px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent outline-[#8b7eff] rounded-l-sm`}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setCreatePassword(e.target.value)}
                />
                {showPassword ? (
                  <span className=" active:bg-[#8b7eff] bg-[#f3f2ff] py-1 rounded-r-md ">
                    <IoMdEye
                      onClick={() => setShowPassword(false)}
                      size={16}
                      className="text-[#8b7eff] active:text-[#f3f2ff] mx-3 my-1.5"
                    />
                  </span>
                ) : (
                  <span className=" bg-[#f3f2ff] active:bg-[#8b7eff] py-1 rounded-r-md">
                    <IoEyeOff
                      onClick={() => setShowPassword(true)}
                      size={16}
                      className="text-[#8b7eff] active:text-[#f3f2ff] mx-3 my-1.5"
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-left font-semibold text-gray-700 text-sm required mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="flex mt-4 justify-between shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  required
                  value={confirmPassword}
                  autoComplete="off"
                  placeholder="R-enter your password"
                  className={`w-full text-primary px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent outline-[#8b7eff] rounded-l-sm`}
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showConfirmPassword ? (
                  <span className=" active:bg-[#8b7eff] bg-[#f3f2ff] py-1 rounded-r-md ">
                    <IoEye
                      onClick={() => setShowConfirmPassword(false)}
                      size={16}
                      className="text-[#8b7eff] active:text-[#f3f2ff] mx-3 my-1.5"
                    />
                  </span>
                ) : (
                  <span className=" bg-[#f3f2ff] active:bg-[#8b7eff] py-1 rounded-r-md">
                    <IoEyeOff
                      onClick={() => setShowConfirmPassword(true)}
                      size={16}
                      className="text-[#8b7eff] active:text-[#f3f2ff] mx-3 my-1.5"
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="flex mb-4 items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-3.5 h-3.5 accent-[#8b7eff]"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
              >
                Remember password?
              </label>
            </div>
          </form>
          <button
            type="submit"
            onClick={handleSubmit}
            className={`w-full py-1 flex justify-center text-white rounded-md transition text-m duration-200 ${
              isButtonDisabled
                ? "bg-[#8b7eff]/90 cursor-not-allowed"
                : "bg-[#8b7eff] hover:bg-primary-700"
            }`}
          >
            <IoLockClosedOutline
              onClick={() => setShowConfirmPassword(true)}
              size={16}
              className="text-[#ffffff] active:text-[#f3f2ff] mx-1 m-auto"
            />{" "}
            Save Password
          </button>
          <div className="flex-fill my-4 text-center">
            <p className="text-center text-sm text-gray-800/70 mb-5">
              Back to home ?{" "}
              <Link
                href={"/demo/django/rixzo/dist/html/index.html"}
                className="text-blue-600 underline-offset-1"
              >
                Click Here
              </Link>
            </p>
          </div>
        </div>
        <div className="col rounded m-4 py-4 items-center bg-[#fff8ec] lg:w-2/4">
          <Image
            src={"/assets/otp/otp.png"}
            alt="Illustration"
            width={220}
            height={180}
            priority
            unoptimized
            className="mx-auto mt-4 object-contain"
          ></Image>
          <div className="flex-fill my-4 text-center">
            <h6 className="mb-0 font-semibold pb-1 text-2xl">
              Set Your New Password
            </h6>
            <p className="text-lg font-semibold text-gray-400 px-5">
              Create a secure password for protection.
            </p>
          </div>
          <Link href="/dashboard">
            <Image
              src={"/assets/logo/black_logo.png"}
              alt="logo"
              width={125}
              height={100}
              priority
              unoptimized
              className="mx-auto w-2/3 my-4 object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
