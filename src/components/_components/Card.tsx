"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg cursor-pointer overflow-hidden p-6 text-white"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      
      <button className="flex items-center gap-2 text-[#a81a1a] hover:text-[#8b1414] transition-colors">
        Saiba Mais <FaArrowRight />
      </button>
    </motion.div>
);
}

