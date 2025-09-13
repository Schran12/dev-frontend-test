"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const areas = [
  { image: "/reciclagem.jpg", title: "RECICLAGEM INDUSTRIAL" },
  { image: "/remanufatura.jpg", title: "AUTOMAÇÃO INDUSTRIAL" },
  { image: "/energetica.jpg", title: "EFICIÊNCIA ENERGÉTICA" },
];

export default function Areas() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-[#181c2c] text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Áreas de Atuação
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={area.image}
              alt={area.title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <h3 className="text-white text-2xl font-bold mb-2">{area.title}</h3>
              <button className="bg-[#a81a1a] px-8 py-3 rounded-full font-bold text-white hover:bg-[#8b1414] transition-colors shadow-lg self-start">
                SAIBA MAIS
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

