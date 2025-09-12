// components/FlipCard.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Handshake } from "lucide-react";

interface FlipCardProps {
  item: {
    title: string;
    desc: string;
  };
  idx: number;
}

const icons = [Target, Eye, Handshake]; // Ícones na ordem de Missão, Visão, Valores

export default function FlipCard({ item, idx }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = icons[idx];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Variações para a animação de flip
  const cardVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <motion.div
      className="relative w-full h-64" // Removido 'cursor-pointer'
      onTap={handleFlip}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <motion.div
        className="absolute w-full h-full rounded-xl shadow-lg"
        variants={cardVariants}
        animate={isFlipped ? "flipped" : "initial"}
        transition={{ duration: 0.3 }} // Reduzido o tempo de transição
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente do Card */}
        <div
          className="absolute w-full h-full bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center backface-hidden"
          style={{ transform: "rotateY(0deg)" }} // Garantindo que a frente não vire
        >
          <Icon size={36} color="#a81a1a" /> {/* Ícone com tamanho menor */}
          <h3 className="text-2xl font-bold mt-4 text-[#181c2c]">{item.title}</h3>
        </div>

        {/* Trás do Card */}
        <div
          className="absolute w-full h-full bg-white rounded-xl p-6 flex items-center justify-center text-center backface-hidden"
          style={{ transform: "rotateY(180deg)" }} // Garantindo que a parte de trás já esteja virada
        >
          <p className="text-gray-600">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}