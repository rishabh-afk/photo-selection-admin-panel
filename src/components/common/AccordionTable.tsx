import Image from "next/image";
import React, { useState } from "react";

interface Transaction {
  id: string;
  username: string;
  date: string;
  contact: string;
  package: string;
  status: string;
}

interface AccordionTableProps {
  transactions: Transaction[];
  operationsAllowed?: any; // This can be extended to use wherever needed
  Heading: any;
  isSort: any;
}

const AccordionTable: React.FC<AccordionTableProps> = ({
  transactions,
  // operationsAllowed,
  Heading,
  isSort,
}) => {
  const [expandedRow] = useState<string | null>(null);

  return (
    <div className="mt-10 text-sm">
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
                Order ID
              </th>
              <th className="border-b py-3 pl-4 text-left">Name</th>
              <th className="border-b py-3 pl-4 text-left">Date</th>
              <th className="border-b py-3 pl-4 text-left">Package</th>
              <th className="border-b py-3 pl-4 text-left">Contact</th>
              <th
                className="border-b py-3 pl-4 text-left"
                style={{ borderRadius: "0 8px 0 0" }}
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <React.Fragment key={transaction.id}>
                <tr
                  style={{ fontWeight: "bold" }}
                  className="hover:bg-primary/10 cursor-pointer "
                  // onClick={() => toggleAccordion(transaction.id)}
                >
                  <td className="py-3 text-xs pl-4">
                    {transaction.id.slice(-8)}
                  </td>
                  <td className="py-3 text-xs pl-4 capitalize">
                    {transaction.username}
                  </td>
                  <td className="py-3 text-xs pl-4">{transaction.date}</td>
                  <td className="py-3 text-xs pl-4">{transaction.package}</td>
                  <td className="py-3 text-xs pl-4">{transaction.contact}</td>
                  <td className="py-3 text-xs pl-4 capitalize">
                    <p
                      className={`uppercase text-center mt-2 text-xs py-2 rounded-[6px] text-white ${
                        transaction.status === "Current"
                          ? "bg-[#00897B] px-0"
                          : transaction.status === "initiated"
                          ? "bg-yellow-300 px-2"
                          : "bg-orange-500 px-2"
                      }`}
                    >
                      {transaction.status}
                    </p>
                  </td>
                </tr>
                {expandedRow === transaction.id && (
                  <tr>
                    <td colSpan={6} className="py-4 px-8 border-y">
                      {/* Additional information can go here if needed */}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccordionTable;
