"use client";
import React from "react";
import Head from "next/head";

import HeroService from "@/app/servicos/HeroService";
import ServicesGrid from "@/app/servicos/CardsService";
import ProjectsGrid from "@/app/servicos/ProjetosService";
import Testimonials from "@/app/servicos/Testimonials";
import Chamada from "@/app/servicos/Chamada";

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InduxMax",
    "url": "https://www.matheusschran.com/servicos",
    "logo": "https://www.matheusschran.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/induxmax",
      "https://www.facebook.com/induxmax",
      "https://www.instagram.com/induxmax"
    ],
    "description": "A InduxMax oferece soluções inteligentes em automação industrial, eficiência energética e inovação tecnológica para sua empresa."
  };

  return (
    <>
      <Head>
        <title>Serviços | InduxMax - Automação e Eficiência Industrial</title>
        <meta
          name="description"
          content="Conheça os serviços da InduxMax: automação industrial, eficiência energética, consultoria e projetos personalizados para otimizar sua produção."
        />
        <meta property="og:title" content="Serviços | InduxMax" />
        <meta
          property="og:description"
          content="Soluções inteligentes em automação, energia e consultoria industrial para otimizar processos e reduzir custos."
        />
        <meta property="og:image" content="/servicos-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serviços | InduxMax" />
        <meta
          name="twitter:description"
          content="Descubra como a InduxMax transforma sua indústria com automação, eficiência energética e inovação."
        />
        <meta name="twitter:image" content="/servicos-hero.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <HeroService />
      <ServicesGrid />
      <ProjectsGrid />
      <Testimonials />
      <Chamada />
    </>
  );
}


