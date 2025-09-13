"use client";
import React from "react";

export default function Mission() {
  const items = [
    {
      title: "Missão",
      description:
        "Oferecer soluções industriais inovadoras que transformem o setor e aumentem a produtividade.",
    },
    {
      title: "Visão",
      description:
        "Ser referência global em tecnologia industrial e automação de processos.",
    },
    {
      title: "Valores",
      description:
        "Inovação, comprometimento, excelência e sustentabilidade em cada projeto.",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 text-center">
      {items.map((item) => (
        <div
          key={item.title}
          className="p-6 bg-white rounded-xl shadow-lg"
        >
          <h3 className="font-bold mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
