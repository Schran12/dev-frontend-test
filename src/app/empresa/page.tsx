// pages/empresa.tsx
"use client";

import { motion } from "framer-motion";
import Areas from "@/components/Areas";
import Chamada from "@/components/Chamada";
import React from "react";
import HeroEmpresa from "@/components/HeroEmpresa";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import FlipCard from "@/components/FlipCard";

// Dados para Missão, Visão e Valores
const mvv = [
  {
    title: "Missão",
    desc: "Transformar o setor industrial, oferecendo soluções de automação e consultoria que otimizam a produtividade, reduzem custos e garantem a excelência operacional de nossos clientes.",
  },
  {
    title: "Visão",
    desc: "Ser a principal referência em tecnologia e inovação industrial na América Latina, reconhecida pela confiabilidade e pela capacidade de criar parcerias duradouras com base no sucesso mútuo.",
  },
  {
    title: "Valores",
    desc: "Nossos valores são a base de tudo que fazemos: Excelência Técnica, Inovação Contínua, Integridade em todas as ações, e um profundo Compromisso com o Sucesso do Cliente.",
  },
];

export default function Empresa() {
  return (
    <div className="flex flex-col">
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
            Desde 2010, a Bloomin se dedica a transformar a indústria com soluções inovadoras e personalizadas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mvv.map((item, idx) => (
            <FlipCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Componentes movidos para dentro da mesma seção */}
        <About />
        <Areas />
        <Timeline />
        <Chamada />

      </section>
    </div>
  );
}