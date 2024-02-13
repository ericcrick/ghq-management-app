import React from "react";

import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Requisitions", href: "requisition", icon: ClockIcon, current: false },
  { name: "Finance", href: "finance", icon: ScaleIcon, current: false },
  { name: "Bookings", href: "booking", icon: CreditCardIcon, current: false },
  { name: "Users", href: "user", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "report", icon: DocumentChartBarIcon, current: false },
];
const secondaryNavigation = [
  { name: "Configurations", href: "config", icon: CogIcon },
  { name: "Help", href: "help", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "privacy", icon: ShieldCheckIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const DeskTopSideBar = () => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
          <Link href="/" className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="logo.jpeg"
              alt="app logo"
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
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
