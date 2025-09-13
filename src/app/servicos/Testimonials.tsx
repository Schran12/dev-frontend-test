"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/depoimento.jpg",
    quote: "A InduxMax revolucionou nossa operação. Ganhos em eficiência e sustentabilidade foram imediatos.",
    author: "João Silva",
    company: "Gerente de Produção, Indústria ABC",
  },
  {
    image: "/depoimento-2.jpg",
    quote: "O suporte técnico da InduxMax é excepcional. Resolveram nossos desafios com rapidez e precisão.",
    author: "Maria Oliveira",
    company: "Diretora de Operações, Empresa XYZ",
  },
  {
    image: "/depoimento-3.jpg",
    quote: "As soluções em eficiência energética reduziram nossos custos e tornaram nossa produção mais sustentável.",
    author: "Joana Santos",
    company: "CFO, Grupo Sustentável",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#181c2c] py-16 lg:py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          O que Nossos Clientes Dizem
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          A satisfação dos nossos clientes é a melhor medida do nosso sucesso.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl shadow-lg flex flex-col items-center"
              variants={itemVariants}
            >
              <Image
                src={testimonial.image}
                alt={`Foto de ${testimonial.author}`}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="italic text-gray-300 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-[#a81a1a]">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

