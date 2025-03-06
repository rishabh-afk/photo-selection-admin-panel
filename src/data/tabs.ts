import { SiGoogleadmob } from "react-icons/si";
import { RiSeoFill, RiAdminFill } from "react-icons/ri";
import { FaBlog, FaHome } from "react-icons/fa";

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
    icon: SiGoogleadmob,
    label: "Create Plans",
    href: "/dashboard/create-plan",
    pageTitle: "All Plans",
    permission: "Admin",
  },
  {
    id: 3,
    icon: SiGoogleadmob,
    label: "Bookings",
    href: "/dashboard/booking",
    pageTitle: "All Bookings",
    permission: "Admin",
  },
  {
    id: 4,
    icon: SiGoogleadmob,
    label: "Uploaded Photos",
    href: "/dashboard/uploaded-photos",
    pageTitle: "Uploaded Photos",
    permission: "Admin",
  },
  {
    id: 5,
    icon: SiGoogleadmob,
    label: "Approved Photos",
    href: "/dashboard/approved-photos",
    pageTitle: "Approved Photos",
    permission: "Admin",
  },
  {
    id: 6,
    icon: FaBlog,
    label: "Wallet",
    href: "/dashboard/wallet",
    pageTitle: "wallet",
    permission: "Blogs",
  },
  {
    id: 7,
    icon: RiAdminFill,
    label: "Subscription",
    href: "/dashboard/subscription",
    pageTitle: "Subscription",
    permission: "Admin",
  },

  {
    id: 8,
    icon: SiGoogleadmob,
    label: "Profile",
    href: "/dashboard/account",
    pageTitle: "My Profile",
    permission: "Admin",
  },
  {
    id: 9,
    icon: RiSeoFill,
    label: "Manage SEO",
    href: "/dashboard/seo",
    pageTitle: "Search Engine Optimization (SEO)",
    permission: "SEO",
  },
  {
    id: 10,
    icon: RiSeoFill,
    label: "Upload",
    href: "/dashboard/upload",
    pageTitle: "Upload Images",
    permission: "SEO",
  },
  {
    id: 11,
    icon: RiSeoFill,
    label: "Thisweek",
    href: "/dashboard/thisweek",
    pageTitle: "Upload Images",
    permission: "SEO",
  },
];
