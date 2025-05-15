import React from "react";
import Navbar from "@/components/Navbar";
import {MeSection} from "@/components/MeSection";

const Page = () => {
  return (
    <div className="bg-background text-foreground min-h-screen p-6">
      <div>
        <Navbar/>
        <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
          <MeSection/>

          <div className="mt-8 items-start max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p>
              I mess around and find out with tech. Not just JavaScript — sometimes it’s Vulkan, graphics stuff, Python
              scripts that barely work, whatever sounds cursed enough to try. I don’t really have a “stack,” I just pick
              things up and see what breaks.
            </p>
            <br/>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, possibly to open-source projects
              (rarely), or going outside and touching grass. I believe in continuous learning and pushing the boundaries
              of what&apos;s possible that I can achieve in the digital space.
            </p>
          </div>
        </main>
				<div className="text-sm text-center text-gray-100 dark:text-gray-900 mt-4">
					<p>If your reading this, I like NieR Automata a lot. ;)</p>
				</div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>2025 Crystallized Project.</p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
