import React from "react";
import Navbar from "@/components/Navbar";
import { MeSection } from "@/components/MeSection";
import Link from "next/link";
import { Icon } from "@iconify/react";

const projects = [
	{
		title: "Personal Website",
		description: "The website your on right now.",
		technologies: ["Next.js", "Tailwind CSS", "React"],
		link: "#",
	},
];

const Page = () => {
	return (
		<div className="bg-background text-foreground min-h-screen p-6">
			<div>
				<Navbar />
				<main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
					<MeSection />
					<div className="flex-1">
						<section>
							<h2 className="text-2xl font-bold mb-6">Projects</h2>
							<div className="grid gap-6">
								{projects.map((project, index) => (
									<div
										key={index}
										className="bg-background p-6 rounded-lg border transition-all duration-300 ease-in-out hover:border-gray-400"
										style={{ boxShadow: "var(--card-shadow)" }}
									>
										<h3 className="text-xl font-semibold mb-2">
											{project.title}
										</h3>
										<p className="text-gray-500 dark:text-gray-400 mb-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.technologies.map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-3 py-1 bg-gray-800 text-gray-200 text-xs rounded-full dark:bg-gray-200 dark:text-gray-900"
												>
													{tech}
												</span>
											))}
										</div>
										<Link
											href={project.link}
											className="text-sm font-medium hover:underline flex items-center gap-1"
										>
											View Project{" "}
											<Icon icon="lucide:external-link" className="w-4 h-4" />
										</Link>
									</div>
								))}
							</div>
						</section>
					</div>
				</main>

				<footer className="mt-12 text-center text-sm text-gray-500">
					<p>2025 Crystallized Project.</p>
				</footer>
			</div>
		</div>
	);
};

export default Page;
