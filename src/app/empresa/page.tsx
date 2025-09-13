"use client";

import { motion } from "framer-motion";
import React from "react";
import Head from "next/head";

import HeroEmpresa from "@/app/empresa/HeroEmpresa";
import MVV from "@/app/empresa/MVV";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Timeline from "@/app/empresa/Timeline";
import Stats from "@/app/empresa/Stats";
import Chamada from "@/components/_components/Chamada";

export default function Empresa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InduxMax",
    "url": "https://www.matheusschran.com/empresa",
    "logo": "https://www.matheusschran.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/induxmax",
      "https://www.facebook.com/induxmax",
      "https://www.instagram.com/induxmax"
    ],
    "description": "Desde 2010, a InduxMax transforma a indústria com soluções inovadoras em automação e eficiência energética."
  };

  return (
    <div className="flex flex-col">
      <Head>
        <title>Empresa | InduxMax - Automação e Eficiência Industrial</title>
        <meta
          name="description"
          content="Conheça a InduxMax: soluções inteligentes para automação industrial, eficiência energética e processos sustentáveis. Transformando a indústria desde 2010."
        />
        <meta property="og:title" content="Empresa | InduxMax" />
        <meta
          property="og:description"
          content="Transformando a indústria com soluções inteligentes em automação, energia e processos sustentáveis."
        />
        <meta property="og:image" content="/empresa-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empresa | InduxMax" />
        <meta
          name="twitter:description"
          content="Conheça a InduxMax: automação, eficiência energética e inovação industrial."
        />
        <meta name="twitter:image" content="/empresa-hero.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <HeroEmpresa />

      <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16 space-y-12">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-[#181c2c]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossa Empresa
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde 2010, a InduxMax se dedica a transformar a indústria com soluções inovadoras e personalizadas.
          </motion.p>
        </div>

        <MVV />
        <About />
        <Areas />
        <Timeline />
        <Stats />
        <Chamada />
      </section>
    </div>
  );
}
