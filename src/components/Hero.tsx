// components/HeroCarousel.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dados dos slides do carrossel
const slides = [
  {
    image: "/banner.jpg",
    alt: "Soluções sob medida para um mundo sustentável",
    title: "Soluções sob medida para um mundo sustentável",
    text: "A Indústria Fox acredita em um Mundo mais sustentável com o uso de novas tecnologias.",
  },
  {
    image: "/banner-2.jpg",
    alt: "Inovação e tecnologia na indústria",
    title: "Inovação e tecnologia na indústria",
    text: "Transformamos processos tradicionais em operações altamente produtivas e seguras.",
  },
  {
    image: "/banner-3.jpg",
    alt: "Automação industrial inteligente",
    title: "Automação industrial inteligente",
    text: "Sistemas avançados que otimizam a produção e reduzem custos operacionais.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <style jsx global>{`
        /* Setas de navegação */
        .swiper-button-next,
        .swiper-button-prev {
          color: #a81a1a;
        }

        /* Bolinha de paginação ativa */
        .swiper-pagination-bullet-active {
          background-color: #a81a1a;
        }
      `}</style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative flex items-center justify-center text-center text-white">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Conteúdo do Hero */}
              <div className="relative z-10 px-6 md:px-20 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="mb-8 text-base md:text-lg">
                  {slide.text}
                </p>
                <button className="bg-[#a81a1a] px-8 py-3 rounded-full font-bold hover:bg-[#8b1414] transition-colors shadow-lg">
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}