import React from "react";
import Navbar from "@/components/Navbar";
import { MeSection } from "@/components/MeSection";
import Link from "next/link";
import { Icon } from "@iconify/react";

const socialLinks = [
	{
		name: "GitHub",
		icon: <Icon icon="skill-icons:github-dark" className="w-8 h-8" />,
		username: "@Crystallized21",
		url: "https://github.com/Crystallized21",
		hoverOutlineClass: "hover:border-gray-500",
	},
];

export default function Page() {
	return (
		<div className="bg-background text-foreground min-h-screen p-6">
			<div>
				<Navbar />
				<main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
					<MeSection />

					<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-background text-left">
						{socialLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`bg-background p-4 rounded-lg flex flex-col items-start text-left border transition-all duration-300 ease-in-out ${link.hoverOutlineClass}`}
								style={{ boxShadow: "var(--card-shadow)" }}
							>
								<div className="mb-2">{link.icon}</div>
								<h2 className="font-semibold text-sm">{link.name}</h2>
								<p className="text-xs text-gray-400">{link.username}</p>
							</Link>
						))}
					</div>
				</main>

				<footer className="mt-12 text-center text-sm text-gray-500">
					<p>2025 Crystallized Project.</p>
				</footer>
			</div>
		</div>
	);
}
