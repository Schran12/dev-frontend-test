"use client";
import React from "react";
import { motion } from "framer-motion";

const servicos = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#a81a1a]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 01-5.755-3.693L7.75 14.25h8.5l1.505 1.807A6 6 0 0112 18.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm4.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      </svg>
    ),
    title: "Automação Industrial",
    desc: "Desenvolvemos sistemas inteligentes para automatizar linhas de produção, aumentando eficiência e segurança.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#a81a1a]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Eficiência Energética",
    desc: "Analisamos e implementamos soluções que reduzem consumo de energia e promovem sustentabilidade.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#a81a1a]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75C2.25 5.507 3.257 4.5 4.5 4.5h15C20.743 4.5 21.75 5.507 21.75 6.75v10.5C21.75 18.493 20.743 19.5 19.5 19.5h-15C3.257 19.5 2.25 18.493 2.25 17.25V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12h-2.25m4.5 0h-2.25m4.5 0h-2.25" />
      </svg>
    ),
    title: "Consultoria e Suporte",
    desc: "Oferecemos consultoria especializada e suporte técnico para garantir desempenho e confiabilidade dos sistemas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CardsService() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossos Serviços
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluções inteligentes e sustentáveis para otimizar processos e reduzir impactos ambientais.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <div className="mb-4">{servico.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {servico.title}
              </h3>
              <p className="text-gray-600">{servico.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
