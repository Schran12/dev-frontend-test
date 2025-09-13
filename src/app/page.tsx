"use client";

import React from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Solutions from "@/components/Solutions";
import Porque from "@/components/Porque";
import Chamada from "@/components/_components/Chamada";
import CTA from "@/components/_components/Cta";
import Approach from "@/components/Approach";

export default function HomePage() {

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-16">
        <About />
        <Areas />
        <Solutions />
        <Porque />
        </div>
        <Chamada />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-16">
        <Approach />
        <CTA />
      </div>
    </div>
  );
}


