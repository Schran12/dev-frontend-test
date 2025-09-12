// components/Chamada.tsx
"use client";
import React from "react";

export default function Chamada() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-12 md:py-20"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-gray-900/70" />

      {/* Conteúdo da Chamada, com largura máxima, centralizado e acima do overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para inovar a sua indústria?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Entre em contato conosco hoje mesmo e descubra como as nossas soluções inteligentes
          podem transformar o seu negócio, aumentando a produtividade e a sustentabilidade.
        </p>
        <a
          href="/contato"
          className="bg-[#a81a1a] text-white px-10 py-4 rounded-full font-bold
          hover:bg-[#8b1414] transition-colors shadow-lg text-lg uppercase tracking-wide"
        >
          FALE CONOSCO
        </a>
      </div>
    </section>
  );
}