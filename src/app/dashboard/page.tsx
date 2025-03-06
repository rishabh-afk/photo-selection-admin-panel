"use client";

import Loader from "@/components/common/Loader";
import Subscription from "./subscription/page";



// Mocked Data
const dummyTransactions = [
  {
    id: "12345abcd",
    username: "John Doe",
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

// const dummyOperationsAllowed = [
//   { action: "edit", status: true },
//   { action: "delete", status: false },
//   { action: "approve", status: true },
//   { action: "refund", status: true },
// ];

const Dashboard: React.FC = () => {
  // Since this is dummy data, we can simulate loading and error states
  const loading = false;
  const error = null;
  const updatedData = dummyTransactions;

  if (loading && !updatedData && !error) return <Loader />;

  return (
    <Subscription />
  );
};

export default Dashboard;
