// components/Solutions.tsx
"use client";
import Image from "next/image";

export default function Solutions() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8 items-center mt-12">
      <Image
        src="/solutions.jpg"
        alt="Soluções da Bloomin"
        width={600}
        height={400}
        className="rounded-xl shadow-lg object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Soluções Inteligentes</h2>
        <p className="text-[#181c2c] mb-4">
          Na Bloomin, criamos soluções personalizadas que se adaptam às necessidades específicas de cada cliente. Nossos projetos são desenvolvidos para otimizar a produção e reduzir custos operacionais.
        </p>
        <p className="text-[#181c2c]">
          Utilizamos tecnologia de ponta para oferecer sistemas de controle de qualidade, monitoramento em tempo real e análise de dados, garantindo que sua indústria esteja sempre à frente no mercado.
        </p>
      </div>
    </section>
  );
}