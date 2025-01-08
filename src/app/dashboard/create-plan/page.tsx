"use client";

import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import React, { useState } from "react";
import { IoAdd, IoCheckmark, IoClose, IoTrash } from "react-icons/io5";

const CreatePlan: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("")
  const openModal = (title:string) => {
   if (isOpen) {
       setIsOpen(false);
    
   }else{ setIsOpen(true);}
   setModalTitle(title)
  };

  const closeModal = () => {
    setIsOpen(false)
  };
  return (
    <AuthGuard>
      <Wrapper>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Create Your Plan span</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="border-2 border-dashed px-8 py-16 rounded-2xl flex-row justify-center items-center align-baseline border-gray-300 text-center"
              onClick={()=>openModal('Add Basic Plan Pricing')}
            >
              <div className="mb-8 my-4 mx-auto w-16 text-6xl rounded-full  flex justify-center items-center  border-gray-800 border-4">
                <IoAdd className="m-0 p-0 inline-block min-h-14 max-h-14" />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Add Basic Plan Pricing
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="border-2 border-dashed px-8 py-16 rounded-2xl flex-row justify-center items-center align-baseline border-gray-300 text-center"
                            onClick={()=>openModal('Add Silver Plan Pricing')}
                            >
              <div className="mb-8 my-4 mx-auto w-16 text-6xl rounded-full  flex justify-center items-center  border-gray-800 border-4">
                <IoAdd className="m-0 p-0 inline-block min-h-14 max-h-14" />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Add Silver Plan Pricing
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="border-2 border-dashed px-8 py-16 rounded-2xl flex-row justify-center items-center align-baseline border-gray-300 text-center" 
                                onClick={()=>openModal('Add Golden Plan Pricing')}
>
              <div className="mb-8 my-4 mx-auto w-16 text-6xl rounded-full  flex justify-center items-center  border-gray-800 border-4">
                <IoAdd className="m-0 p-0 inline-block min-h-14 max-h-14" />
              </div>
              <h2 className="text-lg font-semibold mb-2">
                Add Golden Plan Pricing
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {isOpen && (
            <div className="flex items-center justify-center h-fit">
              <BasicPlanPricing title={modalTitle}  onClose={closeModal} />
            </div>
          )}
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default CreatePlan;

interface IncludedItem {
  id: number;
  text: string;
}
const BasicPlanPricing = ({title,onClose}:{title:string , onClose:()=>void}) => {
  const [items, setItems] = useState<IncludedItem[]>([
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
  ]);
  const addItem = () => {
    const newItem: IncludedItem = { id: items.length + 1, text: "New item" };
    setItems([...items, newItem]);
  };
  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div
      className="absolute top-10 h-fit bg-white max-w-md mx-auto border border-gray-300 p-6 rounded-xl shadow-md"
      style={{ zIndex: "1000" }}
    ><div className="flex justify-between">

      <h1 className="text-2xl font-bold mb-4">{title}</h1>        <span className="text-gray-400 text-2xl" onClick={onClose}><IoClose /></span>
    </div>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <div className="text-3xl flex font-semibold mb-6">
        ₹
        <input
          type="text"
          className="border-0 outline-none bg-transparent px-3"
          placeholder="00.00"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-800 font-semibold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          className="w-full h-24 p-2 border text-xs border-gray-300 rounded-xl outline-gray-100"
          placeholder="Add description here....."
          maxLength={80}
        ></textarea>
        <p className="text-gray-500 text-xs mt-1">80 Characters</p>
      </div>
      <div className="max-w-md mx-auto p-6 pt-0">
        {" "}
        <h3 className="text-lg font-bold mb-3">Included</h3>{" "}
        <ul>
          {" "}
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center mb-2 ${
                item.id === 2 ? "bg-gray-100" : ""
              }`}
            >
              {" "}
              <span className="text-green-500 mr-2"><IoCheckmark className="text-gray-800 text-lg font-bold" /></span>{" "}
              <span className="text-xs">{item.text}</span>{" "}
              {item.id !== 1 && (
                <span
                  className="ml-auto text-red-500 cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  <IoTrash className="text-red-600 text-lg font-bold" />
                </span>
              )}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
        <button
          className="mt-4 text-green-700 flex px-4 py-2 rounded"
          onClick={addItem}
        >
          <span className="border-2 border-green-700 rounded-full m-auto mr-2 p-0.5"><IoAdd className="font-bold" /></span>
          Add{" "}
        </button>{" "}
      </div>
    </div>
  );
};
