"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/producao.jpg",
    title: "Otimização de Linha de Produção",
    desc: "Integração de robôs colaborativos e sistemas IoT para aumentar a eficiência e reduzir desperdícios.",
  },
  {
    image: "/monitoramento.jpg",
    title: "Monitoramento de Consumo Energético",
    desc: "Soluções inteligentes para monitoramento em tempo real, promovendo economia e sustentabilidade.",
  },
  {
    image: "/modernizacao.jpg",
    title: "Modernização de Fábrica Inteligente",
    desc: "Automação completa e integração de sistemas avançados para operações industriais mais seguras e eficientes.",
  },
];

export default function ProjetosService() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Projetos em Destaque
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Veja alguns dos projetos realizados pela InduxMax, mostrando nossa expertise em automação e eficiência energética.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

