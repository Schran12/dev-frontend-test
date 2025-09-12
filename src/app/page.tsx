"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Solutions from "@/components/Solutions";
import Chamada from "@/components/Chamada";
import Porque from "@/components/Porque";
import CTA from "@/components/Cta";
import { motion } from "framer-motion";



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
        <link rel="canonical" href="https://www.seusite.com.br" />
        <meta property="og:title" content="Bloomin | Soluções Industriais e Tecnológicas" />
        <meta property="og:description" content="Especialistas em automação industrial, robótica e IoT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seusite.com.br" />
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

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#181c2c]">Nossa Abordagem</h2>
              <p className="text-lg text-gray-600 mb-4">
                Na Bloomin, combinamos expertise técnica com uma visão estratégica para cada desafio. Desenvolvemos soluções personalizadas que não apenas atendem às necessidades atuais, mas também preparam nossos clientes para o futuro.
              </p>
              <p className="text-lg text-gray-600">
                Acreditamos que a inovação contínua e a parceria transparente são os pilares para o sucesso. Nosso método envolve análise profunda, planejamento cuidadoso e execução impecável, sempre com foco nos resultados e na sustentabilidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/abordagem.jpg"
                alt="Equipe da Bloomin discutindo projetos de automação industrial"
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video"
              />
            </motion.div>
          </section>
          <CTA />
        </div>
      </div>
    </>
  );
}