import React from "react";

import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

import { ScaleIcon } from "@heroicons/react/24/outline";
import { BarChartReport } from "../Chart/barchart/Barchart";
import { LineChartReport } from "../Chart/linechart/line-chart";

const cards = [
  { name: "Meetings", href: "#", icon: ScaleIcon, amount: "50" },
  { name: "Pending meetings", href: "#", icon: ScaleIcon, amount: "40" },
  { name: "Mails", href: "#", icon: ScaleIcon, amount: "30" },
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 2,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "failed",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
];
type StatusStyles = {
  success: string;
  processing: string;
  failed: string;
};
const statusStyles: StatusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Dashboard = () => {
  return (
    <>
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                      Good morning, Dora
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                      <BuildingOfficeIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      GHQ Medical
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                      <CheckCircleIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                        aria-hidden="true"
                      />
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Book Room
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Overview
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="truncate text-sm font-medium text-gray-500">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href={card.href}
                      className="font-medium text-cyan-700 hover:text-cyan-900"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LineChartReport/>
        <BarChartReport/>
      </div>
    </>
  );
};

export default Dashboard;
