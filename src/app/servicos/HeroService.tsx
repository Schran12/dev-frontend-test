"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/automacao.jpg",
    alt: "Automação Industrial",
    title: "Automação Industrial Inteligente",
    text: "Tecnologia de ponta para otimizar processos e aumentar a eficiência.",
  },
  {
    image: "/eficiencia.jpg",
    alt: "Eficiência Energética",
    title: "Eficiência Energética Sustentável",
    text: "Reduza custos e contribua para um futuro mais verde.",
  },
  {
    image: "/consultoria.jpg",
    alt: "Suporte e Consultoria",
    title: "Suporte Técnico Especializado",
    text: "Consultoria completa para o sucesso da sua operação.",
  },
];

export default function HeroService() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #a81a1a;
        }
        .swiper-pagination-bullet-active {
          background-color: #a81a1a;
        }
      `}</style>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
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
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 px-6 md:px-20 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="mb-8 text-base md:text-lg">{slide.text}</p>
                <Link
                  href="/contato"
                  className="bg-[#a81a1a] px-8 py-3 rounded-full font-bold hover:bg-[#8b1414] transition-colors shadow-lg inline-block"
                >
                  FALE CONOSCO
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

