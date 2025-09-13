"use client";

import Head from "next/head";
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
  const diferenciais = [
    "Equipe altamente qualificada",
    "Tecnologia de ponta",
    "Projetos personalizados",
    "Atendimento internacional",
  ];

  return (
    <>
      <Head>
        <title>Bloomin | Soluções Industriais e Tecnológicas</title>
        <meta name="description" content="Bloomin oferece automação industrial, robótica, IoT e soluções personalizadas para empresas nacionais e internacionais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.matheusschran.com.br" />
        <meta property="og:title" content="Bloomin | Soluções Industriais e Tecnológicas" />
        <meta property="og:description" content="Especialistas em automação industrial, robótica e IoT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.matheusschran.com.br" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bloomin | Soluções Industriais e Tecnológicas" />
        <meta name="twitter:description" content="Especialistas em automação industrial, robótica e IoT." />
        <meta name="twitter:image" content="/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bloomin",
              "url": "https://www.seusite.com.br",
              "logo": "https://www.seusite.com.br/logo.png",
              "description": "Empresa especializada em soluções de automação industrial, robótica e IoT.",
            }),
          }}
        />
      </Head>

      <div className="flex flex-col">
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 space-y-16">
          <About />
          <Areas />
          <Solutions />
          <Porque />
          <Chamada />
          <Approach />
          <CTA />
        </div>
      </div>
    </>
  );
}
