"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Settings, Globe, Award, Zap, Heart, Shield } from "lucide-react";

const diferenciais = [
  { icon: User, text: "Equipe especializada em automação industrial" },
  { icon: Cpu, text: "Tecnologia de ponta em energia sustentável" },
  { icon: Settings, text: "Projetos personalizados para cada indústria" },
  { icon: Globe, text: "Atendimento nacional e internacional" },
  { icon: Award, text: "Reconhecimento em soluções inovadoras" },
  { icon: Zap, text: "Soluções ágeis e eficientes" },
  { icon: Heart, text: "Foco no cliente e na sustentabilidade" },
  { icon: Shield, text: "Segurança e confiabilidade industrial" },
];

export default function Porque() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#181c2c] mb-12"> 
        Por que escolher a InduxMax?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 max-w-7xl mx-auto">
        {diferenciais.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-6 text-[#181c2c] flex flex-col items-center gap-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Icon size={48} color="#FF0000" /> 
              <h4 className="font-semibold">{item.text}</h4>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
