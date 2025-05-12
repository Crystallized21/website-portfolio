import Image from "next/image";
import React from "react";

export function MeSection() {
	return (
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
	);
}
