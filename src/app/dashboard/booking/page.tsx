"use client";

import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import Link from "next/link";
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

interface BookingTable {
  orderId: string;
  name: string;
  date: string;
  package: string;
  contact: string;
  status: string;
}

const bookings: BookingTable[] = [
  {
    orderId: "#4398",
    name: "Suresh Gupta",
    date: "22-08-2024",
    package: "Wedding Photography",
    contact: "9768364764",
    status: "Current",
  },
  {
    orderId: "#4398",
    name: "Suresh Gupta",
    date: "22-08-2024",
    package: "Wedding Photography",
    contact: "9768364764",
    status: "Current",
  },
  {
    orderId: "#4398",
    name: "Suresh Gupta",
    date: "22-08-2024",
    package: "Wedding Photography",
    contact: "9768364764",
    status: "Current",
  },
  {
    orderId: "#4398",
    name: "Suresh Gupta",
    date: "22-08-2024",
    package: "Wedding Photography",
    contact: "9768364764",
    status: "Current",
  },
];

const menuOptions: string[] = [
  "View All",
  "Current Booking",
  "Pending Booking",
  "Completed Booking",
  "Cancelled Bookings",
];

const Booking: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handelModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };
  return (
    <AuthGuard>
      <Wrapper>
        <div className="container mx-auto p-4">
          {" "}
          <div className="flex justify-between items-center mb-4">
            {" "}
            <h1 className="text-xl font-semibold">All Bookings</h1>{" "}
            <button
              className="flex bg-teal-500 font-semibold     text-white px-4 py-2 rounded"
              onClick={handelModal}
            >
              <IoFilter className="m-auto mr-2" /> Sort By
            </button>{" "}
            <UploadModal open={showModal} onClose={handelModal} />
          </div>{" "}
          <div
            style={{
              backgroundColor: "#FCF8F8",
              padding: "2rem",
              borderRadius: "0.6rem",
            }}
            className="overflow-x-auto"
          >
            <table className="min-w-full text-center">
              <thead>
                <tr style={{ backgroundColor: "rgba(0, 137, 123, 0.10)" }}>
                  <th
                    className="border-b py-5  font-semibold"
                    style={{ borderRadius: "8px 0 0 0" }}
                  >
                    Order ID
                  </th>
                  <th className="border-b py-5  font-semibold">Name</th>
                  <th className="border-b py-5  font-semibold">Date</th>
                  <th className="border-b py-5  font-semibold">Package</th>
                  <th className="border-b py-5  font-semibold">Contact</th>
                  <th
                    className="border-b py-5  font-semibold"
                    style={{ borderRadius: "0 8px 0 0" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, index) => (
                  <React.Fragment key={index}>
                    <tr
                      style={{ fontWeight: "bold" }}
                      className="hover:bg-primary/10 cursor-pointer "
                      // onClick={() => toggleAccordion(booking.id)}
                    >
                      <td className="py-5 text-sm font-semibold ">
                        {booking?.orderId?.slice(-8)}
                      </td>
                      <td className="py-5 text-sm font-semibold  capitalize">
                        {booking?.name}
                      </td>
                      <td className="py-5 text-sm font-semibold ">
                        {booking?.date}
                      </td>
                      <td className="py-5 text-sm font-semibold ">
                        {booking?.package}
                      </td>
                      <td className="py-5 text-sm font-semibold ">
                        {booking?.contact}
                      </td>
                      <td className="py-5 text-sm font-semibold flex-justify-center items-center capitalize">
                        <p
                          className={`uppercase text-center  text-sm font-semibold py-2 mx-4 rounded-[6px] text-white ${
                            booking.status === "Current"
                              ? "bg-[#00897B] px-0"
                              : booking.status === "initiated"
                              ? "bg-yellow-300 px-2"
                              : "bg-orange-500 px-2"
                          }`}
                        >
                          {booking?.status}
                        </p>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>{" "}
      </Wrapper>
    </AuthGuard>
  );
};

export default Booking;

const UploadModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [active, setActive] = useState(true);

  const handelActive = () => {
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div
      className={`absolute rounded-lg p-4 px-6 w-[14rem] h-fit top-36 shadow right-20 bg-white ${
        open ? "hidden" : ""
      } `}
    >
      {menuOptions?.map((menu, index) => {
        return (
          <Link
            href={""}
            onClick={() => {
              handelActive();
              onClose();
            }}
            key={index}
            className={`w-full inline-block text-sm mb-1 rounded-lg p-2 px-4 text-gray-700 font-semibold text-left pl-4 ${
              index === 0 && "bg-teal-100"
            } `}
          >
            {menu}
          </Link>
        );
      })}
    </div>
  );
};
