"use client";

import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";
import TableComponent from "@/components/common/Table";
import AccordionTable from "@/components/common/SubscriptionTable";
import { MdOutlineFileDownload } from "react-icons/md";

  const dummyTransactions = [
    {
      invoice: "12345abcd",
      status: "Recieved",
      date: "2025-01-08",
      amount: 200.00,
      package: "Wedding Photography",
      action: "Download",
    },
    {
      invoice: "12145abcd",
      status: "Recieved",
      date: "2025-01-08",
      amount: 200.00,
      package: "Wedding Photography",
      action: "Download",
    },
    {
      invoice: "16345abcd",
      status: "Recieved",
      date: "2025-01-08",
      amount: 200.00,
      package: "Wedding Photography",
      action: "Download",
    },
  ];
  
  
  const dummyOperationsAllowed = [
    { action: "edit", status: true },
    { action: "delete", status: false },
    { action: "approve", status: true },
    { action: "refund", status: true },
  ];

const Wallet: React.FC = () => {
  // Since this is dummy data, we can simulate loading and error states
  const loading = false;
  const error = null;
  const updatedData = dummyTransactions;
  const paginationData = { page: 1, totalPages: 1 }; // Simulate pagination

  if (loading && !updatedData && !error) return <Loader />;

  return (
    <AuthGuard>
      <Wrapper>
        <div>
          
          <AccordionTable
          isSort={false}
            transactions={updatedData} // Pass dummy transaction data
            operationsAllowed={dummyOperationsAllowed} // Pass dummy operations allowed data
            Heading={""}          />
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default Wallet;
