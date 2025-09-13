"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/empresa.jpg",
    alt: "Inovação para transformar indústrias",
    title: "Tecnologia e inovação para sua indústria",
    text: "Soluções personalizadas que impulsionam a produtividade e a eficiência de sua produção.",
  },
  {
    image: "/empresa-1.jpg",
    alt: "Automação industrial inteligente",
    title: "Automação para um futuro mais eficiente",
    text: "Transformamos processos tradicionais em operações inteligentes, seguras e de alta performance.",
  },
  {
    image: "/empresa-2.jpg",
    alt: "Parceria e crescimento sustentável",
    title: "Seu parceiro em soluções industriais",
    text: "Construímos o futuro da sua empresa com tecnologia de ponta e um compromisso sólido com a sustentabilidade.",
  },
];

export default function HeroCarousel() {
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
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
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
                  SAIBA MAIS
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
