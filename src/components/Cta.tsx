// components/CTA.tsx
"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 lg:px-32 text-center py-12 bg-[#a81a1a] rounded-xl text-white mt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Quer impulsionar sua indústria?
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6">
        Entre em contato com a Bloomin e descubra como podemos transformar seu negócio.
      </p>
      <Link
        href="/contato"
        className="inline-block bg-white text-[#a81a1a] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base md:text-lg"
      >
        Solicitar Orçamento
      </Link>
    </section>
  );
}
