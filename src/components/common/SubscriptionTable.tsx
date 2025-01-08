import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiCurrencyInrFill } from "react-icons/pi";

interface Transaction {
  invoice: string;
  status: string;
  date: string;
  amount: number;
  package: string;
  action: string;
}

interface AccordionTableProps {
  transactions: Transaction[];
  operationsAllowed?: any; // This can be extended to use wherever needed
  Heading: any;
  isSort: any;
}

const AccordionTable: React.FC<AccordionTableProps> = ({
  transactions,
//   operationsAllowed,
  Heading,
  isSort,
}) => {
 

  return (
    <>
      <div className="flex justify-between w-full">
        {/* Left Buttons */}
        <div className="flex space-x-4">
          <button className="text-center h-10 mt-2 w-16 px-2 py-auto rounded-[6px] text-white bg-[#00897B]">
            All
          </button>
          <button
            style={{ border: "1px solid #00897B" }}
            className="text-center h-10 mt-2  px-2 py-auto rounded-[6px] text-[#00897B] bg-white border-[#00897B]"
          >
            Received
          </button>
          <button
            style={{ border: "1px solid #00897B" }}
            className="text-center h-10 mt-2  px-2 py-auto rounded-[6px] text-[#00897B] bg-white border-[#00897B]"
          >
            Withdrawal
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <button
            style={{ border: "1px solid #00897B" }}
            className="flex items-center text-center h-10 mt-2 px-2 py-auto rounded-[6px] text-[#00897B] bg-white border-[#00897B]"
          >
            <PiCurrencyInrFill className="mr-2" />{" "}
            {/* Add space between icon and text */}
            Available Balance : ₹ 45678.00
          </button>

          <button
            style={{ border: "1px solid #00897B" }}
            className="flex items-center text-center h-10 mt-2  px-2 py-auto rounded-[6px] text-[#00897B] bg-white border-[#00897B]"
          >
            Withdrawal <IoMdArrowDropdown />
          </button>
          <button className="text-center h-10 mt-2  px-2 py-auto rounded-[6px] text-white bg-[#00897B]">
            <MdOutlineFileDownload className="text-xl" />{" "}
          </button>
        </div>
      </div>

      <div className="mt-0 text-sm">
        <div className="flex justify-between items-center mb-6">
          <h2
            style={{ fontFamily: "Roboto" }}
            className="font-extrabold text-black text-lg"
          >
            {Heading}
          </h2>
          {isSort && (
            <button
              style={{
                width: "7rem",
                height: "3rem",
                borderRadius: "5px",
                border: "2px solid #00897B", // border color inside
                backgroundColor: "#00897B",
                color: "#FFFFFF",
                paddingTop: "10px",
                paddingRight: "15px",
                paddingBottom: "10px",
                paddingLeft: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              {/* Image */}
              <Image
                src="/assets/icons/sort.svg"
                alt="Sort Icon"
                width={15}
                height={15}
              />
              {/* Text */}
              <span style={{ color: "#FFFFFF", marginLeft: "10px" }}>
                Sort By
              </span>
            </button>
          )}
        </div>

        <div
          style={{
            backgroundColor: "#FCF8F8",
            padding: "2rem",
            borderRadius: "0.6rem",
          }}
          className="overflow-x-auto"
        >
          <table className="min-w-full">
            <thead>
              <tr style={{ backgroundColor: "rgba(0, 137, 123, 0.10)" }}>
                <th
                  className="border-b py-3 pl-4 text-left"
                  style={{ borderRadius: "8px 0 0 0" }}
                >
                  Package
                </th>
                <th className="border-b py-3 pl-4 text-left">Invoice</th>
                <th className="border-b py-3 pl-4 text-left">Date</th>
                <th className="border-b py-3 pl-4 text-left">Amount</th>
                <th className="border-b py-3 pl-4 text-left">Status</th>
                <th
                  className="border-b py-3 pl-4 text-left"
                  style={{ borderRadius: "0 8px 0 0" }}
                ></th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <React.Fragment key={transaction.invoice}>
                  <tr
                    style={{ fontWeight: "bold" }}
                    className="hover:bg-primary/10 cursor-pointer "
                    // onClick={() => toggleAccordion(transaction.id)}
                  >
                    <td className="py-3 text-xs pl-4">
                      {transaction.package.slice(-8)}
                    </td>
                    <td className="py-3 text-xs pl-4 capitalize">
                      {transaction.invoice}
                    </td>
                    <td className="py-3 text-xs pl-4">{transaction.date}</td>
                    <td className="py-3 text-xs pl-4">{transaction.amount}</td>
                    <td className="py-3 text-xs pl-4">{transaction.status}</td>
                    <td className="py-3 text-xs pl-4 capitalize">
                      <p 
                        className={`uppercase text-center mt-2 py-3 rounded-[6px] text-white ${
                          transaction.action === "Download"
                            ? "bg-[#00897B] "
                            : transaction.action === "initiated"
                            ? "bg-yellow-300 px-0"
                            : "bg-orange-500 px-2"
                        } flex justify-center items-center space-x-2`}
                      >
                        <MdOutlineFileDownload className="text-xl" />{" "}
                        {/* Bigger icon */}
                        <span>{transaction.action}</span> {/* Bigger text */}
                      </p>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AccordionTable;
