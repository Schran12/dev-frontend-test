"use client";
import React from "react";

export default function Stats() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossa Indústria em Números
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Estamos comprometidos em entregar resultados e impulsionar a inovação tecnológica para um futuro mais sustentável.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#a81a1a]">
              850.000
            </span>
            <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">
              Equipamentos reciclados
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#a81a1a]">
              400.000
            </span>
            <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">
              Residências eficientizadas
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#a81a1a]">
              170GWh
            </span>
            <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">
              Energia economizada
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-extrabold text-[#a81a1a]">
              600.000t
            </span>
            <p className="mt-2 text-sm md:text-base text-gray-700 font-medium">
              CO2 tratado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
