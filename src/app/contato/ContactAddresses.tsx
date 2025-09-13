"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactAddresses() {
  const addresses = [
    { title: "São Paulo", text: "Av. Exemplo, 1234 - Bairro Central\n01000-000 São Paulo/SP" },
    { title: "Santa Catarina", text: "Rua Modelo, 567, Galpão 01,\nZona Industrial Norte\n89000-000 Joinville/SC" },
    { title: "Ceará", text: "Av. Fictícia, 890, sala 10,\nCentro\n62000-000 Fortaleza/CE" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 font-sans">
      <motion.div
        className="max-w-6xl mx-auto flex justify-center gap-8 text-gray-700 flex-wrap lg:flex-nowrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {addresses.map((addr, idx) => (
          <motion.div
            key={idx}
            className="flex-1 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[180px]"
            variants={itemVariants}
          >
            <h3 className="font-extrabold text-xl mb-2">{addr.title}</h3>
            <p className="text-sm leading-tight whitespace-pre-line text-center">{addr.text}</p>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-4" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

