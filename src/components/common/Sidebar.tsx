"use client";

import Link from "next/link";
import Image from "next/image";
import { tabs } from "@/data/tabs";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(true);
  const [list, showList] = useState<any>({ tab: "", list: [] });
  const { token, user } = useAuth();
  if (!token) return null;

  const userRole = user?.role;
  console.log(" this is the usertype", userRole);

  const photographer = [
    "Dashboard",
    "CreatePlan",
    "Bookings",
    "uploadPhotos",
    "approvedPhotos",
    "Wallet",
    "subscription",
    "profile",
  ];

  //  var filteredTabs;

  let filteredTabs: any[] = []; // Declare filteredTabs in a broader scope

  if (userRole === "photographer") {
    filteredTabs = tabs.filter((tab) =>
      photographer.includes(tab.permission)
    );
    console.log("This is matching: userRole is 'photographer'.");
  } else {
    // Log type of userRole and why it's not matching
    console.log(
      `Mismatch: userRole is '${userRole}', which is of type '${typeof userRole}'.`
    );
  }

  const handelModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div
      className={`fixed w-[17%] text-white bg-primary h-full overflow-y-scroll no-scrollbar`}
    >
      <div className="flex justify-center pt-5 bg-primary w-[17%] items-center py-[11px] fixed top-0">
        <Link
          href={"/dashboard"}
          className="flex justify-center items-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <Image
            src={"/assets/logo/pickmaa_logo.svg"}
            alt="logo"
            width={30}
            height={20}
            priority
            unoptimized
            className="mx-auto object-contain"
          />
          <span className="text-lg mx-2 font-bold">PICMAA</span>
        </Link>
        <UploadModal open={showModal} onClose={handelModal} />
      </div>
      <nav className="flex flex-col gap-2 justify-center items-center mt-[72px]">
        <Link
          href={""}
          aria-label={""}
          onClick={handelModal}
          onMouseEnter={() => {}}
          className={`py-3 mx-auto w-[70%] bg-white text-primary text-sm cursor-pointer hover:bg-gray-200 transition rounded-lg md:text-base flex justify-center items-center border-primary hover:text-gray-500 ${
            pathname === list &&
            "bg-secondary rounded-r-full text-white font-semibold"
          }`}
        >
          <span className="flex items-center text-sm text-center font-semibold">
            <IoAdd size={20} /> {"Upload Photos"}
          </span>
        </Link>
        {filteredTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <React.Fragment key={tab?.id}>
              <Link
                href={tab?.href}
                aria-label={tab?.label}
                onMouseEnter={() => {
                  if (tab?.tabs && tab?.tabs.length > 0)
                    showList({ tab: tab?.permission, list: tab?.tabs });
                }}
                className={` mx-1 w-[80%] text-sm cursor-pointer hover:bg-secondary transition md:text-base text-info flex justify-between  items-center border-primary hover:text-white`}
              >
                <span
                  className={`flex gap-1 mx-1 rounded-md w-full p-1.5 pl-2 justify-start items-center ${
                    pathname === tab?.href &&
                    "bg-white rounded text-primary font-semibold transition"
                  }`}
                >
                  <Icon size={18} /> {tab?.label}
                </span>
                <span
                  className={`relative top-[1.4rem] left-[-11.4rem] grid min-h-[45px] min-w-[10px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-r-lg ${
                    pathname === tab?.href && "bg-white "
                  }`}
                ></span>
                {tab?.tabs && tab?.tabs.length > 0 && (
                  <RiArrowDropDownLine size={20} className="w-fit" />
                )}
              </Link>
              {list?.tab === tab?.permission && (
                <div
                  onMouseEnter={() =>
                    showList({ tab: tab?.permission, list: tab?.tabs })
                  }
                  className="flex flex-col w-full bg-primary/20"
                >
                  {list?.list &&
                    list?.list.length > 0 &&
                    list?.list.map((tabChild: any, index: number) => {
                      const Icon = tabChild.icon;
                      return (
                        <Link
                          href={tabChild?.href}
                          key={`index+${index}`}
                          aria-label={tabChild?.label}
                          className="w-full text-xs pr-2 pl-9 py-2 flex justify-between gap-2 items-center hover:bg-primary hover:text-white transition"
                        >
                          <span className="flex">
                            <Icon size={15} className="w-7" /> {tabChild?.label}
                          </span>
                        </Link>
                      );
                    })}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

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
      className={`absolute rounded-lg p-4 px-6 w-[20rem] h-[8rem] top-32 shadow left-20 bg-white ${
        open ? "hidden" : ""
      } `}
    >
      <Link
        href={""}
        onClick={() => {
          handelActive();
          onClose();
        }}
        className={`w-full inline-block rounded-lg p-3 px-4 text-gray-700 font-bold text-left ${
          active && "bg-gray-100"
        } `}
      >
        This Week Events
      </Link>
      <Link
        href={""}
        onClick={() => {
          handelActive();
          onClose();
        }}
        className={`w-full inline-block rounded-lg p-3 px-4 text-gray-700 font-bold text-left ${
          !active && "bg-gray-100"
        } `}
      >
        This Month Events
      </Link>
    </div>
  );
};
