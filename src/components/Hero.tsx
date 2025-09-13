"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/banner.jpg",
    alt: "Soluções personalizadas para indústria sustentável",
    title: "Indústria Sustentável Personalizada",
    text: "A InduxMax desenvolve tecnologias inteligentes que promovem eficiência energética e processos sustentáveis.",
  },
  {
    image: "/banner-2.jpg",
    alt: "Automação e inovação industrial",
    title: "Automação e inovação industrial",
    text: "Transformamos linhas de produção com sistemas inteligentes que aumentam produtividade e segurança.",
  },
  {
    image: "/banner-3.jpg",
    alt: "Energia sustentável e tecnologia avançada",
    title: "Energia sustentável e tecnologia avançada",
    text: "Soluções em automação e energia renovável para reduzir custos e impactos ambientais.",
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
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 px-6 md:px-20 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="mb-8 text-base md:text-lg">
                  {slide.text}
                </p>
                <a
                  href="/empresa"
                  className="bg-[#a81a1a] px-8 py-3 rounded-full font-bold hover:bg-[#8b1414] transition-colors shadow-lg inline-block"
                >
                  SAIBA MAIS
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


