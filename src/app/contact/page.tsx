import React from "react";
import Navbar from "@/components/Navbar";
import {MeSection} from "@/components/MeSection";

const Page = () => {
	return (
		<div className="bg-background text-foreground min-h-screen p-6">
			<div>
				<Navbar />

				<main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
					<MeSection />

					<div className="mx-16 mt-8 items-start">
						<h2 className="text-2xl font-bold mb-4">Contact Me</h2>
						<p>
							You can contact if you would like to discuss anything, or just
							simply want to say hi. I am open to new opportunities and
							collaborations.
						</p>
						<br />
						<p>
							Feel free to reach out to me via email at{" "}
							<a
								href="mailto:cryst@crystallized.sh"
								className="text-blue-500 underline"
							>
								cryst@crystallized.sh
							</a>
							.
						</p>
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
