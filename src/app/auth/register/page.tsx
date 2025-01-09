"use client";

import Image from "next/image";
import { Post } from "@/hooks/apiUtils";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register: React.FC = () => {

  const { token, login } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {

    e.preventDefault();

    const response: any = await Post(
      "/api/public/admin/login",
      {
        identifier:  emailOrPhone,
        password: password,
      },
      5000
    );
    if (response?.success) {
      const token = response?.data?.accessToken;
      const adminDetails = response?.data?.user;
      login(token, adminDetails);
    }
  };

  return (
    <>
      {!token && (
        <div className="min-h-screen max-h-screen flex">
          <div className="w-1/2 max-h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center overflow-hidden">
              <Image
                src={"/assets/login/login_bg.png"}
                width={650}
                height={600}
                alt="Person holding camera"
                className=" min-w-fit max-h-fit object-cover"
              />
            </div>
          </div>
          <div className="w-1/2 max-h-full flex flex-col items-center justify-center p-16">
            <div className="flex justify-start mr-auto items-center mt-4 mb-8">
              <Image
                width={40}
                height={40}
                src={"/assets/logo/primary_logo.svg"}
                alt="Login icon"
                className="mr-2"
              />
              <h1 className="text-xl text-left font-bold">PICMAA.COM</h1>
            </div>
            <h2 className="text-3xl font-bold mr-auto mb-4">Welcome Back!</h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        

            <form className="mr-auto" onSubmit={handleRegister}>
              {" "}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {" "}
                <div>
                  {" "}
                  <label className="block mb-1">First Name</label>{" "}
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block mb-1">Last Name</label>{" "}
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="">
                  {" "}
                  <label className="block mb-1">
                    Email or Phone Number
                  </label>{" "}
                  <input
                    type="text"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                  />{" "}
                </div>{" "}
                <div className="">
                  {" "}
                  <label className="block mb-1">Date of Birth</label>{" "}
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                  />{" "}
                </div>{" "}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="">
                  {" "}
                  <label className="block mb-1">Password</label>{" "}
                  <div className="flex mt-4 justify-between  appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      required
                      value={password}
                      autoComplete="off"
                      placeholder="Enter your password"
                      className={`w-full px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent rounded-l-sm outline-1 outline-gray-200`}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <span className=" active:bg-[#00897B] bg-[#f3f2ff] py-1 rounded-r-md ">
                        <IoEye
                          onClick={() => setShowPassword(false)}
                          size={16}
                          className="text-[#00897B] active:text-[#f3f2ff] mx-3 my-1.5"
                        />
                      </span>
                    ) : (
                      <span className=" bg-[#f3f2ff] active:bg-[#00897B] py-1 rounded-r-md">
                        <IoEyeOff
                          onClick={() => setShowPassword(true)}
                          size={16}
                          className="text-[#00897B] active:text-[#f3f2ff] mx-3 my-1.5"
                        />
                      </span>
                    )}
                  </div>
                </div>{" "}
                <div className="">
                  {" "}
                  <label className="block mb-1">Confirm Password</label>{" "}
                  <div className="flex mt-4 justify-between  appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      required
                      value={confirmPassword}
                      autoComplete="off"
                      placeholder="Enter confirm password"
                      className={`w-full px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent outline-1 outline-gray-200 rounded-l-sm`}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {showConfirmPassword ? (
                      <span className=" active:bg-[#00897B] bg-[#f3f2ff] py-1 rounded-r-md ">
                        <IoEye
                          onClick={() => setShowConfirmPassword(false)}
                          size={16}
                          className="text-[#00897B] active:text-[#f3f2ff] mx-3 my-1.5"
                        />
                      </span>
                    ) : (
                      <span className=" bg-[#f3f2ff] active:bg-[#00897B] py-1 rounded-r-md">
                        <IoEyeOff
                          onClick={() => setShowConfirmPassword(true)}
                          size={16}
                          className="text-[#00897B] active:text-[#f3f2ff] mx-3 my-1.5"
                        />
                      </span>
                    )}
                  </div>
                </div>{" "}
              </div>
              <div className="mb-4">
                {" "}
                <label className="inline-flex items-center">
                  {" "}
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="form-checkbox outline-1 outline-gray-200"
                  />{" "}
                  <span className="ml-2">
                    I agree to the terms and conditions
                  </span>{" "}
                </label>{" "}
              </div>{" "}
              <div className="mb-4">
                {" "}
                <button
                  type="button"
                  onClick={handleRegister}
                  className={`w-full bg-primary text-white px-4 py-2 rounded ${termsAccepted?"":"cursor-not-allowed"}`}
                >
                  {" "}
                  Continue{" "}
                </button>{" "}
              </div>{" "}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
