// components/PorQue.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Settings, Globe, Award, Zap, Heart, Shield } from "lucide-react";

const diferenciais = [
  { icon: User, text: "Equipe altamente qualificada" },
  { icon: Cpu, text: "Tecnologia de ponta" },
  { icon: Settings, text: "Projetos personalizados" },
  { icon: Globe, text: "Atendimento internacional" },
  { icon: Award, text: "Reconhecimento no mercado" },
  { icon: Zap, text: "Soluções ágeis" },
  { icon: Heart, text: "Foco no cliente" },
  { icon: Shield, text: "Segurança e confiabilidade" },
];

export default function Porque() {
  return (
    <section className="py-16 bg-white"> {/* Fundo da seção branco */}
      <h2 className="text-3xl font-bold text-center text-[#181c2c] mb-12"> {/* Título na cor #181c2c */}
        Por que escolher a Bloomin?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 max-w-7xl mx-auto">
        {diferenciais.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              // Card com fundo cinza clarinho (quase branco), texto na cor do título
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6 text-[#181c2c] flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Icon size={48} color="#FF0000" /> {/* Ícone permanece vermelho */}
              <h4 className="font-semibold">{item.text}</h4>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}