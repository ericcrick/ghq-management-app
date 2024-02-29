import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import { ColorSchemeScript, MantineProvider } from "@mantine/core";


export const metadata: Metadata = {
  title: "Management App",
  description: "Home page of management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-gray-200" lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="h-full w-full m-0 p-0">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
