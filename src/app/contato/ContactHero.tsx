"use client";
import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <Image
        src="/suporte.jpg"
        alt="Contato"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Contato</h1>
        <p className="text-lg md:text-xl">Fale conosco e descubra como podemos ajudar.</p>
      </div>
    </section>
  );
}
