import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import {Analytics} from "@vercel/analytics/next";

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
		<head>
			<link rel="icon" href="/icon.png" />
		</head>
			<body className="antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
					<Analytics/>
				</ThemeProvider>
			</body>
		</html>
	);
}
