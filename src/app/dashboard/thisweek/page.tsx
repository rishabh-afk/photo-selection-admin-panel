"use client";

import Wrapper from "@/components/common/Wrapper";
import AuthGuard from "@/components/AuthGuard";
import AccordionTable from "@/components/common/AccordionTable";
import Loader from "@/components/common/Loader";

// Mocked Data
const dummyTransactions = [
  {
    id: "12345abcd",
    username: "hey",
    date: "2025-01-08",
    contact: "123-456-7890", // Changed to 'contact'
    package: "Wedding Photography",
    status: "Current",
  },
  {
    id: "67890efgh",
    username: "Jane Smith",
    date: "2025-01-07",
    contact: "987-654-3210", // Changed to 'contact'
    package: "Wedding Photography",
    status: "Current",
  },
  {
    id: "11223ijkl",
    username: "Alice Brown",
    date: "2025-01-06",
    contact: "555-666-7777", // Changed to 'contact'
    package: "Wedding Photography",
    status: "Current",
  },
];

const dummyOperationsAllowed = [
  { action: "edit", status: true },
  { action: "delete", status: false },
  { action: "approve", status: true },
  { action: "refund", status: true },
];

const Dashboard: React.FC = () => {
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
            Heading={"This Week Events"}
          />
        </div>
      </Wrapper>
    </AuthGuard>
  );
};

export default Dashboard;
