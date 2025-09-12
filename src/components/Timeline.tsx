// components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, Cog, Leaf, Globe } from "lucide-react";
import React from "react";

const events = [
  { year: "2010", title: "Fundação da Bloomin", description: "Início das operações com foco em consultoria industrial e otimização de processos.", icon: <Building size={20} /> },
  { year: "2012", title: "Primeiros Projetos de Automação", description: "Expansão para soluções de automação, introduzindo tecnologias modernas em fábricas locais.", icon: <Cog size={20} /> },
  { year: "2015", title: "Consolidação no Mercado Nacional", description: "Crescimento significativo, com parcerias estratégicas e reconhecimento em todo o território brasileiro.", icon: <Briefcase size={20} /> },
  { year: "2021", title: "Expansão Internacional", description: "Início das operações em mercados internacionais, levando nossa expertise para além das fronteiras.", icon: <Globe size={20} /> },
  { year: "2023", title: "Foco em Sustentabilidade", description: "Integração de práticas e tecnologias sustentáveis em todos os projetos, visando a eficiência energética e a redução de impacto ambiental.", icon: <Leaf size={20} /> },
  { year: "2024", title: "Liderança em IA Industrial", description: "Pioneirismo na aplicação de Inteligência Artificial para otimização preditiva e manutenção inteligente.", icon: <Cog size={20} /> },
];

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#181c2c]">Nossa Trajetória</h2>

      {/* Grid de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 relative flex flex-col justify-start min-h-[140px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Ícone no canto superior esquerdo */}
            <div className="absolute top-4 left-4 text-[#a81a1a]">
              {event.icon}
            </div>

            <h3 className="text-xl font-bold text-[#181c2c] mb-1 pl-8">{event.title}</h3>
            <time className="font-semibold text-gray-500 text-sm mb-2 block pl-8">{event.year}</time>
            <p className="text-sm leading-snug text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}