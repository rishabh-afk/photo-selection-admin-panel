"use client";

import Image from "next/image";
import { Post } from "@/hooks/apiUtils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login: React.FC = () => {
  const router = useRouter();
  const { token, login } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isRemember,] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("run")
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
      await handleSubmit(new Event("submit") as unknown as React.FormEvent); // Trigger form submit event manually
    };

    if (localEmail && localPassword) submitFormAutomatically();
    router.prefetch("/dashboard");

    // eslint-disable-next-line
  }, [router]);

  return (
    <>
      {!token && (
        <div className="min-h-screen max-h-screen flex">
          <div className="w-1/2 max-h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center overflow-hiddenr">
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
            <div className="flex justify-start mr-auto items-center mt-16 mb-4">
              <Image
                width={40}
                height={40}
                src={"/assets/logo/primary_logo.svg"}
                alt="Login icon"
                className="mr-2"
              />
              <h1 className="text-xl text-left font-bold">PICMAA.COM</h1>
            </div>
            <h2 className="text-3xl font-bold mr-auto mt-10 mb-4">
              Welcome Back!
            </h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mr-auto">
              <div className="mb-4">
                <label className="block mb-1">Email or Phone Number</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Enter Password</label>
                <div className="flex mt-4 justify-between  appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <input
                    required
                    value={password}
                    autoComplete="off"
                    placeholder="Enter your password"
                    className={`w-full text-primary px-4 py-2.5 placeholder:text-gray-400 text-sm bg-transparent rounded-l-sm`}
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
              </div>
              <div className="mb-4 text-left">
                <a
                  href="/forgot-password"
                  className="text-[#00897B] font-semibold"
                >
                  Forget Password?
                </a>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-primary text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
