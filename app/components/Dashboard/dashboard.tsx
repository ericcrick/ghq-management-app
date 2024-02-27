import React from "react";
import { ScaleIcon } from "@heroicons/react/24/outline";
import { LineChartReport } from "../Chart/linechart/line-chart";

const cards = [
  { name: "Meetings", href: "#", icon: ScaleIcon, amount: "50" },
  { name: "Pending meetings", href: "#", icon: ScaleIcon, amount: "40" },
  { name: "Mails", href: "#", icon: ScaleIcon, amount: "30" },
];


const Dashboard = () => {
  return (
    <div className="space-y-10 h-screen">
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
      <LineChartReport />
    </div>
  );
};

export default Dashboard;
