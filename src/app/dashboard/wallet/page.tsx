"use client";

import AuthGuard from "@/components/AuthGuard";
import Loader from "@/components/common/Loader";
import Wrapper from "@/components/common/Wrapper";

import AccordionTable from "@/components/common/SubscriptionTable";

const dummyTransactions = [
  {
    invoice: "12345abcd",
    status: "Recieved",
    date: "2025-01-08",
    amount: 200.0,
    package: "Wedding Photography",
    action: "Download",
  },
  {
    invoice: "12145abcd",
    status: "Recieved",
    date: "2025-01-08",
    amount: 200.0,
    package: "Wedding Photography",
    action: "Download",
  },
  {
    invoice: "16345abcd",
    status: "Recieved",
    date: "2025-01-08",
    amount: 200.0,
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

  if (loading && !updatedData && !error) return <Loader />;

  return (
    <AuthGuard>
      <Wrapper>
        <div>
          <AccordionTable
            isSort={false}
            transactions={updatedData} // Pass dummy transaction data
            operationsAllowed={dummyOperationsAllowed} // Pass dummy operations allowed data
            Heading={""}
          />
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default Wallet;
