import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Michael Bui",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Navbar/>
          {children}
      </body>
    </html>
  );
}