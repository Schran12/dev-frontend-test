// components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  return (
    <>
      {/* O componente Head do Next.js é essencial para SEO técnico.
        Ele injeta meta-tags e títulos na seção <head> do documento,
        ajudando os motores de busca a entenderem o conteúdo da página.
      */}
      <Head>
        <title>Sobre a Bloomin | Inovação em Automação Industrial</title>
        <meta name="description" content="Fundada em 2010, a Bloomin é referência em inovação industrial e soluções inteligentes. Transformamos processos tradicionais em operações produtivas e sustentáveis." />
        <meta property="og:title" content="Sobre a Bloomin" />
        <meta property="og:description" content="Transformamos a indústria com soluções de automação e consultoria que otimizam a produtividade, reduzem custos e garantem a excelência operacional." />
        <meta property="og:image" content="/path/para/imagem/do/og-image.jpg" /> {/* Substitua pelo caminho real */}
        <meta property="og:type" content="website" />
      </Head>

      <section className="max-w-6xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8 items-center py-16">
        {/* Lado do Conteúdo (Texto) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#181c2c]">Sobre a Bloomin</h2>
          <p className="text-lg text-gray-600 mb-4">
            Fundada em 2010, a Bloomin é uma referência em inovação, automação e soluções inteligentes para o setor industrial.
          </p>
          <p className="text-lg text-gray-600">
            Nosso compromisso é ir além da tecnologia, transformando processos industriais tradicionais em operações altamente produtivas, seguras e sustentáveis.
          </p>
        </motion.div>

        {/* Lado da Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/sobre.jpg"
            alt="Robôs em uma linha de produção industrial moderna"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video"
          />
        </motion.div>
      </section>
    </>
  );
}

