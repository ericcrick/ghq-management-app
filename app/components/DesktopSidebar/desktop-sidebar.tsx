"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import {
  AcademicCapIcon,
  CircleStackIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  EnvelopeIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Appointments",
    href: "appointment",
    icon: ClockIcon,
    current: false,
  },
  { name: "Study Leave", href: "leave", icon: AcademicCapIcon, current: false },
  {
    name: "Operations",
    href: "operation",
    icon: CreditCardIcon,
    current: false,
  },
  { name: "Users", href: "user", icon: UserGroupIcon, current: false },
  {
    name: "Reports",
    href: "report",
    icon: DocumentChartBarIcon,
    current: false,
  },
  { name: "Promotions", href: "promotion", icon: ShieldCheckIcon },
  { name: "Mail", href: "mail", icon: EnvelopeIcon },
];
const secondaryNavigation = [
  {
    name: "Employees",
    href: "employee",
    icon: CircleStackIcon,
    children: [
      { name: "View All Employees", href: "/employee/all" },
      { name: "Add New Employee", href: "/employee/add" },
      { name: "Employee Details", href: "/employee/details" },
    ],
  },
  {
    name: "Configurations",
    href: "config",
    icon: CogIcon,
    children: [
      { name: "Arm of Service", href: "#" },
      { name: "Marital Status", href: "#" },
      { name: "Designations", href: "#" },
      { name: "Departments", href: "#" },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DeskTopSideBar = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(name)
        ? prevOpenItems.filter((item) => item !== name)
        : [...prevOpenItems, name]
    );
  };

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
          <Link href="/" className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-10 w-auto rounded"
              src="logo.jpeg"
              alt="GHQ medical"
            />
          </Link>
          <nav
            className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-cyan-800 text-white"
                      : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                    "group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <div key={item.name}>
                    <div
                      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
                      onClick={() => toggleItem(item.name)}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                      <ChevronRightIcon
                        className={classNames(
                          "ml-auto h-5 w-5 flex-shrink-0 text-cyan-400 group-hover:text-cyan-200 transition-colors ease-in-out duration-150",
                          openItems.includes(item.name)
                            ? "transform rotate-90"
                            : ""
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    {item.children && openItems.includes(item.name) && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="group flex items-center rounded-md px-10 py-2 text-xs font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DeskTopSideBar;
