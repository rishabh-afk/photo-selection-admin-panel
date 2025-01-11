import { SiGoogleadmob } from "react-icons/si";
import {  RiAdminFill } from "react-icons/ri";

import { FaBlog, FaHome, FaQuestionCircle } from "react-icons/fa";

// Define tabs
export const tabs = [
  {
    id: 1,
    tabs: [],
    icon: FaHome,
    label: "Dashboard",
    href: "/dashboard",
    pageTitle: "Overview",
    permission: "Dashboard", // Add a permission attribute
  },
  {
    id: 2,
    icon: FaQuestionCircle,
    label: "Create Plans",
    href: "/dashboard/create-plan",
    pageTitle: "Create Plan",
    permission: "CreatePlan",
  },
  {
    id: 3,
    icon: FaQuestionCircle,
    label: "Bookings",
    href: "/dashboard/booking",
    pageTitle: "Bookings",
    permission: "Bookings",
  },

  {
    id: 4,
    icon: SiGoogleadmob,
    label: "Upload Photos",
    href: "/dashboard/upload",
    pageTitle: "Upload Photos",
    permission: "uploadPhotos",
  },

  {
    id: 5,
    icon: FaBlog,
    label: "approved",
    href: "/dashboard/approved-photos",
    pageTitle: "approved",
    permission: "approvedPhotos",
  },

  {
    id: 6,
    icon: FaBlog,
    label: "Wallet",
    href: "/dashboard/wallet",
    pageTitle: "wallet",
    permission: "Wallet",
  },
  



  {
    id: 7,
    icon: SiGoogleadmob,
    label: "Subscription",
    href: "/dashboard/subscription",
    pageTitle: "Subscription",
    permission: "subscription",
  },
  
  {
    id: 8,
    icon: RiAdminFill,
    label: "Profile",
    href: "/dashboard/profile",
    pageTitle: "Profile",
    permission: "profile",
  },

 
  // {
  //   id: 7,
  //   icon: RiSeoFill,
  //   label: "Upload",
  //   href: "/dashboard/upload",
  //   pageTitle: "Upload Images",
  //   permission: "Upload",
  // },

];
