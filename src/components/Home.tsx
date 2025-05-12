"use client";

import { useState } from "react";
import { Briefcase, Home, Mail, Menu, Monitor, User, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
	{ name: "Home", icon: <Home className="w-5 h-5" />, url: "/" },
	{ name: "About", icon: <User className="w-5 h-5" />, url: "/about" },
	{
		name: "Projects",
		icon: <Briefcase className="w-5 h-5" />,
		url: "/projects",
	},
	{ name: "Contact", icon: <Mail className="w-5 h-5" />, url: "/contact" },
];

const socialLinks = [
	{
		name: "Github",
		icon: <FaGithub className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
	},
	{
		name: "Github",
		icon: <FaGithub className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
	},
	{
		name: "Github",
		icon: <FaGithub className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
	},
	{
		name: "Github",
		icon: <FaGithub className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
	},
	{
		name: "Github",
		icon: <FaGithub className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
	},
];

export default function UpdatedDarkPortfolioLayoutWithTopIcons() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="bg-black text-white min-h-screen p-6">
			<nav className="flex justify-between items-center mb-12 relative">
				<a
					href="/"
					className="text-2xl hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
				>
					<Home />
				</a>
				<div className="flex items-center space-x-4">
					<a
						href="#"
						className="hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
					>
						<Monitor />
					</a>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
					>
						{isMenuOpen ? <X /> : <Menu />}
					</button>
				</div>
				{isMenuOpen && (
					<div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.url}
								className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 transition-colors"
							>
								{link.icon}
								<span>{link.name}</span>
							</a>
						))}
					</div>
				)}
			</nav>

			<main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
				<div className="md:w-1/3 mb-12 md:mb-0">
					<Image
						src="https://github.com/Crystallized21.png"
						alt="Profile"
						className="rounded-full mb-6"
						width="180"
						height="180"
					/>
					<h1 className="text-4xl font-bold mb-2">Michael Bui</h1>
					<p className="text-xl text-gray-400">Crystallized21</p>
				</div>

				<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-black text-left">
					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-black p-4 rounded-lg flex flex-col items-start text-left hover:bg-gray-800 transition-colors border border-gray-700"
						>
							<div className="mb-2">{link.icon}</div>
							<h2 className="font-semibold text-sm">{link.name}</h2>
							<p className="text-xs text-gray-400">{link.username}</p>
						</a>
					))}
				</div>
			</main>

			<footer className="mt-12 text-center text-sm text-gray-500">
				<p>2024 Crystallized Project.</p>
			</footer>
		</div>
	);
}
