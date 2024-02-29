"use client";

import { FC, useState, useEffect } from "react";
import { UnstyledButton, Tooltip, Title } from "@mantine/core";
import MantineLogo from "../../../public/logo.jpeg";
import classes from "./DoubleNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AcademicCapIcon,
  CircleStackIcon,
  ClockIcon,
  EnvelopeIcon,
  CogIcon,
  HomeIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

type LinkItem = {
  label: string;
  href: string;
};

type MainLink = {
  icon: FC<{ className?: string }>;
  label: string;
  links: LinkItem[];
};

const mainLinksMockdata: MainLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    links: [
      { label: "Dashboard", href: "/" },
      { label: "Report", href: "/report" },
    ],
  },
  {
    icon: CircleStackIcon,
    label: "Employees",
    links: [
      {
        label: "List of Employees",
        href: "/employee/all",
      },
      {
        label: "Add New Employee",
        href: "/employee/create",
      },
      {
        label: "View Employee Details",
        href: "/employee/details",
      },
    ],
  },
  {
    label: "Appointments",
    icon: ClockIcon,
    links: [
      {
        label: "List of Appointments",
        href: "/appointment",
      },
    ],
  },

  {
    label: "Operations",
    icon: RocketLaunchIcon,
    links: [{ label: "Employees on Operations", href: "/operation" }],
  },
  {
    label: "Study Leave",
    icon: AcademicCapIcon,
    links: [
      {
        label: "Employees on Study Leave",
        href: "/leave",
      },
      {
        label: "Create Study Leave",
        href: "/create",
      },
    ],
  },
  {
    label: "Promotions",
    icon: NewspaperIcon,
    links: [
      {
        label: "Promotion List",
        href: "/promotion",
      },
    ],
  },
  {
    label: "Mail",
    icon: EnvelopeIcon,
    links: [{ label: "Mail", href: "/mail" }],
  },
  {
    icon: UsersIcon,
    label: "Users",
    links: [
      { label: "User List", href: "/user" },
      { label: "Add User", href: "/user/create" },
    ],
  },
  {
    label: "Configurations",
    icon: CogIcon,
    links: [
      { label: "Arm of Service", href: "#" },
      { label: "Marital Status", href: "#" },
      { label: "Designations", href: "#" },
      { label: "Departments", href: "#" },
    ],
  },
];

export function DoubleNavbar() {
  const pathName = usePathname();
  const [activeMainLink, setActiveMainLink] = useState<string>("Home");
  const [activeChildLink, setActiveChildLink] = useState<string | null>(null);

  useEffect(() => {
    const foundMainLink = mainLinksMockdata.find((link) =>
      link.links.some((linkItem) => linkItem.href === pathName)
    );
    if (foundMainLink) {
      setActiveMainLink(foundMainLink.label);
      const foundChildLink = foundMainLink.links.find(
        (linkItem) => linkItem.href === pathName
      );
      if (foundChildLink) {
        setActiveChildLink(foundChildLink.label);
      }
    }
  }, [pathName]);

  const handleMainLinkClick = (label: string, links: LinkItem[]) => {
    setActiveMainLink(label);
    setActiveChildLink(null);
  };

  const handleChildLinkClick = (label: string) => {
    setActiveChildLink(label);
  };

  return (
    <nav className={`${classes.navbar} h-full`}>
      <div className={`${classes.wrapper}`}>
        <div className={`${classes.aside}`}>
          <div className={classes.logo}>
            <Image
              className="h-auto w-auto"
              src={MantineLogo}
              alt="app logo"
              width={40}
              height={40}
            />
          </div>
          {mainLinksMockdata.map(({ icon: Icon, label, links }) => (
            <Tooltip
              label={label}
              position="right"
              withArrow
              transitionProps={{ duration: 0 }}
              key={label}
            >
              <UnstyledButton
                onClick={() => handleMainLinkClick(label, links)}
                className={classes.mainLink}
                data-active={activeMainLink === label || undefined}
              >
                <Icon className="w-6 h-6" />
              </UnstyledButton>
            </Tooltip>
          ))}
        </div>
        <div className={`${classes.main}`}>
          <Title order={4} className={classes.title}>
            {activeMainLink}
          </Title>
          {activeMainLink && (
            <ul>
              {mainLinksMockdata
                .find((link) => link.label === activeMainLink)!
                .links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={classes.link}
                      data-active={activeChildLink === label || undefined}
                      onClick={() => handleChildLinkClick(label)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
