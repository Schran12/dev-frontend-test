"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8 items-center py-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#181c2c]">Sobre a InduxMax</h2>
        <p className="text-lg text-gray-600 mb-4">
          Fundada com foco em inovação, a InduxMax é referência em automação industrial e soluções de energia sustentável.
        </p>
        <p className="text-lg text-gray-600">
          Nosso compromisso é transformar processos industriais tradicionais em operações altamente produtivas, seguras e ambientalmente responsáveis, aplicando tecnologia de ponta e práticas sustentáveis.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/sobre.jpg"
          alt="Linha de produção industrial moderna com automação e energia sustentável"
          width={600}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video"
        />
      </motion.div>
    </section>
  );
}


