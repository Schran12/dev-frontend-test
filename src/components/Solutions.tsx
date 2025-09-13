"use client";
import Image from "next/image";

export default function Solutions() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8 items-center mt-12">
      <Image
        src="/solutions.jpg"
        alt="Soluções InduxMax em automação e energia sustentável"
        width={600}
        height={400}
        className="rounded-xl shadow-lg object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Soluções Inteligentes</h2>
        <p className="text-[#181c2c] mb-4">
          Na InduxMax, desenvolvemos soluções personalizadas que atendem às necessidades de cada cliente, integrando automação industrial e práticas de sustentabilidade energética.
        </p>
        <p className="text-[#181c2c]">
          Nossos sistemas incluem monitoramento em tempo real, otimização de processos e análise de dados para maximizar eficiência, reduzir custos e garantir que sua indústria esteja preparada para o futuro.
        </p>
      </div>
    </section>
  );
}
