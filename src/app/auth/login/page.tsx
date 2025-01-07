"use client";

import Image from "next/image";
import { Post } from "@/hooks/apiUtils";
import {
  IoEye,
  IoEyeOff,
  IoLogInOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();
  const { token, login } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isRemember, setIsRemember] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const response: any = await Post(
      "/api/public/admin/login",
      {
        identifier: email || localEmail,
        password: password || localPassword,
      },
      5000
    );
    if (response?.success) {
      if (isRemember) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }
      const token = response?.data?.accessToken;
      const adminDetails = response?.data?.user;
      login(token, adminDetails);
    }
  };

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");

    const submitFormAutomatically = async () => {
        // Call handleSubmit in useEffect (make sure it handles async logic)
        await handleSubmit(new Event('submit') as unknown as React.FormEvent); // Trigger form submit event manually
      };
      
    if (localEmail && localPassword) {

      submitFormAutomatically();
    }

    router.prefetch("/dashboard");
  }, [router]);

  return (
    <>
      {!token && (
        <div className="bg-[url('/assets/bg/bg.png')] bg-cover min-h-screen flex justify-center items-center">
          <div className="container-sm m-5 mx-2 bg-white shadow rounded-md h-auto items-center lg:py-2 lg:flex lg:w-3/5 lg:mx-auto">
            <div className="col mx-auto pt-6 px-10  text-center lg:mx-0 lg:flex-auto lg:py-4 lg:text-left lg:w-2/4 lg:pt-6 lg:px-2 lg:pl-10">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-left font-semibold text-gray-700 text-sm required mb-2"
                    htmlFor="createPassword"
                  >
                    Email Address
                  </label>
                  <div className="flex mt-4 justify-between  appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      required
                      value={email}
                      autoComplete="off"
                      placeholder="Enter your email address"
                      className={`w-full text-primary  px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent outline-[#8b7eff] rounded-l-sm`}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-left font-semibold text-gray-700 text-sm required mb-2"
                    htmlFor="confirmPassword"
                  >
                    Password
                  </label>
                  <div className="flex mt-4 justify-between  appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      required
                      value={password}
                      autoComplete="off"
                      placeholder="Enter your password"
                      className={`w-full text-primary px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent outline-[#8b7eff] rounded-l-sm`}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <span className=" active:bg-[#8b7eff] bg-[#f3f2ff] py-1 rounded-r-md ">
                        <IoEye
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
                <div className="my-3 flex justify-between text-left">
                  <div className="flex mb-4  place-items-start">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      onChange={(e) => setIsRemember(e.target.checked)}
                      className="w-3.5 h-3.5 mt-1 accent-[#8b7eff] appearance-auto rounded-sm border"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 text-sm font-normal text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="flex mb-4 items-center">
                    <Link
                      href={""}
                      className="ms-2 text-sm font-medium text-[#35bdaa] dark:text-gray-300"
                    >
                      Forgat Password?
                    </Link>
                  </div>
                </div>
              </form>
              <button
                type="submit"
                onClick={handleSubmit}
                className={`w-full border-2 py-2 flex justify-center text-white bg-primary rounded-md transition text-m duration-200
                        `}
              >
                <IoLogInOutline
                  size={16}
                  className=" active:text-[#f3f2ff] mx-1 m-auto"
                />{" "}
                Log in
              </button>
            </div>
            <div className="col rounded m-4 py-4 bg-[#fff8ec] lg:w-2/4">
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
                <h6 className="mb-0 font-semibold pb-1 text-lg">Welcome Back</h6>
                <p className="text-sm font-semibold text-gray-400 px-5">
                  Sign in to your account to continue.
                </p>
              </div>

              <Link href="/dashboard">
                <Image
                  src={"/assets/logo/logo.jpg"}
                  alt="logo"
                  width={85}
                  height={75}
                  priority
                  unoptimized
                  className="mx-auto my-4 bg-blue-200 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;