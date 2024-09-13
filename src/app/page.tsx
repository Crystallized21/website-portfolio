import React from "react";
import {MainHero} from "@/components/MainHero";
import {AboutMe} from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <MainHero/>
      <AboutMe/>
    </main>
  );
}
