"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const produtos = [
  { title: "Automação Industrial", img: "https://source.unsplash.com/400x300/?automation" },
  { title: "Robótica", img: "https://source.unsplash.com/400x300/?robot" },
  { title: "IoT e Monitoramento", img: "https://source.unsplash.com/400x300/?iot" },
  { title: "Consultoria e Projetos", img: "https://source.unsplash.com/400x300/?industry" },
];

export default function Produtos() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Nossos Produtos e Serviços</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {produtos.map((item) => (
          <motion.div
            key={item.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-4 text-center font-semibold text-gray-800">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}