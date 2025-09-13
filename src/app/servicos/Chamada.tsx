"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Chamada() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-[#181c2c] text-white py-16 px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para Otimizar Sua Indústria?
        </h2>
        <p className="text-lg mb-8">
          Entre em contato conosco e descubra como nossas soluções inteligentes podem transformar seus processos e aumentar a sustentabilidade.
        </p>
        <Link
          href="/empresa"
          className="bg-[#a81a1a] px-8 py-3 rounded-full font-bold hover:bg-[#8b1414] transition-colors shadow-lg inline-block"
        >
          SAIBA MAIS SOBRE NÓS
        </Link>
      </div>
    </motion.section>
  );
}

