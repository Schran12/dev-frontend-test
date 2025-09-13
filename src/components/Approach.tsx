"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Approach() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#181c2c]">Nossa Abordagem</h2>
        <p className="text-lg text-gray-600 mb-4">
          Na InduxMax, combinamos expertise em automação industrial com soluções energéticas sustentáveis. Desenvolvemos sistemas personalizados que otimizam processos e promovem eficiência operacional.
        </p>
        <p className="text-lg text-gray-600">
          Nosso foco é inovação contínua e parceria transparente. Aplicamos planejamento estratégico, análise de dados e execução eficiente, garantindo resultados sólidos e operações mais sustentáveis para nossos clientes.
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
          alt="Equipe da InduxMax trabalhando em automação industrial e energia sustentável"
          className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video"
        />
      </motion.div>
    </section>
  );
}

