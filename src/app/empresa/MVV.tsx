"use client";
import React from "react";
import FlipCard from "@/app/empresa/FlipCard";

const mvv = [
  {
    title: "Missão",
    desc: "Transformar o setor industrial, oferecendo soluções de automação e consultoria que otimizam a produtividade, reduzem custos e garantem a excelência operacional de nossos clientes.",
  },
  {
    title: "Visão",
    desc: "Ser a principal referência em tecnologia e inovação industrial na América Latina, reconhecida pela confiabilidade e pela capacidade de criar parcerias duradouras com base no sucesso mútuo.",
  },
  {
    title: "Valores",
    desc: "Nossos valores são a base de tudo que fazemos: Excelência Técnica, Inovação Contínua, Integridade em todas as ações, e um profundo Compromisso com o Sucesso do Cliente.",
  },
];

export default function MVV() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {mvv.map((item, idx) => (
        <FlipCard key={idx} item={item} idx={idx} />
      ))}
    </div>
  );
}
