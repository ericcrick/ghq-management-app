"use client";

import React from "react";
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
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

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

  {
    name: "Employees",
    icon: CircleStackIcon,
    current: false,
    children: [
      {
        name: "View All Employees",
        href: "/employee/all",
        current: false,
        icon: null,
      },
      {
        name: "Add New Employee",
        href: "/employee/add",
        current: false,
        icon: null,
      },
      {
        name: "Employee Details",
        href: "/employee/details",
        current: false,
        icon: null,
      },
    ],
  },
  {
    name: "Configurations",
    icon: CogIcon,
    current: false,
    children: [
      { name: "Arm of Service", href: "#", current: false, icon: null },
      { name: "Marital Status", href: "#", current: false, icon: null },
      { name: "Designations", href: "#", current: false, icon: null },
      { name: "Departments", href: "#", current: false, icon: null },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DeskTopSideBar = () => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col  bg-cyan-700 ">
        <div className="flex h-14 shrink-0 items-center">
          <Link href="/" className="flex flex-shrink-0 items-center px-2">
            <Image
              className="h-auto w-auto rounded object-contain"
              src="/logo.jpeg"
              alt="GHQ medical"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <nav className="flex flex-grow flex-col overflow-y-auto pb-4 pt-5">
          <ul role="list" className="flex flex-1 flex-col gap-y-7 px-4">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-cyan-800 text-white"
                            : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                          "group flex gap-x-3 rounded p-2 text-sm leading-6 text-gray-700 group  items-center  px-2 py-2 font-medium "
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ) : (
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? "bg-cyan-800 text-white"
                                  : "text-cyan-100 hover:bg-cyan-600 hover:text-white",
                                "group flex gap-x-3 rounded p-2 text-sm leading-6 text-gray-700 group  items-center w-full px-2 py-2 font-medium "
                              )}
                            >
                              <item.icon
                                className="h-6 w-6 shrink-0 text-cyan-200"
                                aria-hidden="true"
                              />
                              {item.name}
                              <ChevronRightIcon
                                className={classNames(
                                  open
                                    ? "rotate-90 text-gray-600"
                                    : "text-gray-600",
                                  "ml-auto h-5 w-5 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel as="ul" className="mt-1 px-2">
                              {item.children.map((subItem) => (
                                <li key={subItem.name}>
                                  {/* 44px */}
                                  <Disclosure.Button
                                    as={Link}
                                    href={subItem.href}
                                    className={classNames(
                                      subItem?.current
                                        ? "bg-gray-50"
                                        : "hover:bg-gray-50",
                                      "block rounded py-2 pr-2 pl-9 text-xs text-gray-800"
                                    )}
                                  >
                                    {subItem.name}
                                  </Disclosure.Button>
                                </li>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto px-4">
              <Link
                href="/"
                className="flex items-center gap-x-4 px-6 py-2 rounded text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <img
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile image"
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeskTopSideBar;
