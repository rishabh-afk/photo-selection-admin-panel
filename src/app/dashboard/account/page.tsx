"use client";

// pages/account.tsx
import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import Image from "next/image";
import { useState } from "react";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = () => {
    // Handle save changes logic
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic
  };

  const handleUploadPicture = () => {
    // Handle upload picture logic
  };

  const handleDeletePicture = () => {
    // Handle delete picture logic
  };

  return (
    <AuthGuard>
      <Wrapper>
        <div className="w-auto mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
          <p className="mb-4 text-xs font-semibold">Update your profile information below:</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src={"/assets/logo/demo_black_logo.png"}
                  width={100}
                  height={200}
                  alt="profile-picture"
                  className="h-[6rem] w-[6rem] rounded-full bg-white overflow-hidden border-gray-200 border-4 "
                />
              </div>
              <div>
                <div className="ml-4">
                  <p className="text-xl font-semibold">Profile Picture</p>
                  <p className="text-gray-400 text-sm font-semibold">
                    PNG, JPEG under 15 MB
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <button
                onClick={handleUploadPicture}
                className="bg-white border text-sm  font-semibold px-4 py-2 border-gray-800 rounded"
              >
                Upload New Picture
              </button>
              <button
                onClick={handleDeletePicture}
                className="bg-gray-400 text-white text-sm font-semibold px-4 py-2 rounded ml-2"
              >
                Delete
              </button>
            </div>
          </div>
                <h1 className="block text-left mb-8 pl-1 text-lg font-semibold">Kunal Verma</h1>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">Edit First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">Edit Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">Edit Email or Phone Number</label>
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">Edit Date of Birth</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded outline-1 outline-gray-200"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
                <div className="flex justify-between items-center">

              <button
                type="button"
                onClick={handleSaveChanges}
                className="bg-primary mr-2 text-white px-4 py-2 rounded hover:active:bg-primary"
              >
                Save Changes
              </button>
              <button type="button" className="bg-gray-200 px-4 py-2 rounded hover:active:bg-gray-300">
                Cancel
              </button>
              </div>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="bg-red-500 ml-2 text-white px-4 py-2 rounded hover:active:bg-red-600"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default Account;
