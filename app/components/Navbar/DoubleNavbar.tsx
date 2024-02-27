"use client";

// import { FC, useState, useEffect } from "react";
// import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
// import {
//   IconHome2,
//   IconUser,
//   IconSettings,
//   TablerIconsProps,
// } from "@tabler/icons-react";
// import MantineLogo from "../../../public/logo.jpeg";
// import classes from "./DoubleNavbar.module.css";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { CircleStackIcon } from "@heroicons/react/24/outline";

// type LinkItem = {
//   label: string;
//   href: string;
// };

// type MainLink = {
//   icon: FC<TablerIconsProps | any>;
//   label: string;
//   links: LinkItem[];
// };

// const mainLinksMockdata: MainLink[] = [
//   {
//     icon: IconHome2,
//     label: "Home",
//     links: [
//       { label: "Report", href: "/report" },
//       { label: "Analytics", href: "/analytics" },
//       { label: "Releases", href: "/releases" },
//     ],
//   },
//   {
//     icon: CircleStackIcon,
//     label: "Employees",
//     links: [
//       {
//         label: "View All Employees",
//         href: "/employee/all",
//       },
//       {
//         label: "Add New Employee",
//         href: "/employee/add",
//       },
//       {
//         label: "Employee Details",
//         href: "/employee/details",
//       },
//     ],
//   },
//   {
//     icon: IconUser,
//     label: "Account",
//     links: [
//       { label: "Account", href: "/account" },
//       { label: "Security", href: "/security" },
//     ],
//   },
//   {
//     icon: IconSettings,
//     label: "Settings",
//     links: [
//       { label: "Config", href: "/config" },
//       { label: "User", href: "/user" },
//     ],
//   },
// ];

// export function DoubleNavbar() {
//   const pathName = usePathname();
//   const [activeMainLink, setActiveMainLink] = useState<string>("Home");
//   const [activeChildLink, setActiveChildLink] = useState<string | null>(null);

//   useEffect(() => {
//     const foundMainLink = mainLinksMockdata.find((link) =>
//       link.links.some((linkItem) => linkItem.href === pathName)
//     );
//     if (foundMainLink) {
//       setActiveMainLink(foundMainLink.label);
//       const foundChildLink = foundMainLink.links.find(
//         (linkItem) => linkItem.href === pathName
//       );
//       if (foundChildLink) {
//         setActiveChildLink(foundChildLink.label);
//       }
//     }
//   }, [pathName]);

//   const handleMainLinkClick = (label: string, links: LinkItem[]) => {
//     setActiveMainLink(label);
//     setActiveChildLink(null);
//   };

//   const handleChildLinkClick = (label: string) => {
//     setActiveChildLink(label);
//   };

//   return (
//     <nav className={`${classes.navbar}`}>
//       <div className={`${classes.wrapper}`}>
//         <div className={`${classes.aside}`}>
//           <div className={classes.logo}>
//             <Image
//               className="h-auto w-auto"
//               src={MantineLogo}
//               alt="app logo"
//               width={40}
//               height={40}
//             />
//           </div>
//           {mainLinksMockdata.map(({ icon: Icon, label, links }) => (
//             <Tooltip
//               label={label}
//               position="right"
//               withArrow
//               transitionProps={{ duration: 0 }}
//               key={label}
//             >
//               <UnstyledButton
//                 onClick={() => handleMainLinkClick(label, links)}
//                 className={classes.mainLink}
//                 data-active={activeMainLink === label || undefined}
//               >
//                 <Icon
//                   style={{ width: rem(22), height: rem(22) }}
//                   stroke={1.5}
//                 />
//               </UnstyledButton>
//             </Tooltip>
//           ))}
//         </div>
//         <div className={`${classes.main}`}>
//           <Title order={4} className={classes.title}>
//             {activeMainLink}
//           </Title>
//           {activeMainLink && (
//             <ul>
//               {mainLinksMockdata
//                 .find((link) => link.label === activeMainLink)!
//                 .links.map(({ label, href }) => (
//                   <li key={label}>
//                     <Link
//                       href={href}
//                       className={classes.link}
//                       data-active={activeChildLink === label || undefined}
//                       onClick={() => handleChildLinkClick(label)}
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { FC, useState, useEffect } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import MantineLogo from "../../../public/logo.jpeg";
import classes from "./DoubleNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AcademicCapIcon,
  CircleStackIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { EnvelopeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

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
      { label: "Analytics", href: "/analytics" },
      { label: "Releases", href: "/releases" },
    ],
  },
  {
    icon: CircleStackIcon,
    label: "Employees",
    links: [
      {
        label: "View All Employees",
        href: "/employee/all",
      },
      {
        label: "Add New Employee",
        href: "/employee/add",
      },
      {
        label: "Employee Details",
        href: "/employee/details",
      },
    ],
  },
  {
    label: "Promotions",
    icon: ShieldCheckIcon,
    links: [
      {
        label: "Arm of Service",
        href: "promotion",
      },
    ],
  },
  {
    label: "Mail",
    icon: EnvelopeIcon,
    links: [{ label: "Mail", href: "mail" }],
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
    <nav className={`${classes.navbar}`}>
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