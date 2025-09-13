"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navClass = scrolled
    ? "bg-[#a81a1a] text-white"
    : "bg-gray-900/70 text-white backdrop-blur-md";

  const contatoBtnClass = scrolled
    ? "bg-[#181c2c] hover:bg-[#15171f]"
    : "bg-[#a81a1a] hover:bg-[#8b1414]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${navClass}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2 md:py-2 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bloomin Logo"
            width={50}   // largura do logo
            height={10}   // altura menor para navbar fina
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1 rounded focus:outline-none z-50"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Menu */}
        <ul
          className={`
            flex-col md:flex-row md:flex gap-6 absolute md:static top-12 md:top-0 left-0 w-full md:w-auto
            bg-[#a81a1a] md:bg-transparent text-white md:text-white
            p-1 md:p-0 md:gap-6 rounded-b-lg md:rounded-none
            shadow-lg md:shadow-none
            transition-all duration-300 ease-in-out
            ${open ? "flex" : "hidden"}
            items-center
          `}
        >
          <li className="w-full text-center hover:text-gray-200 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="w-full text-center hover:text-gray-200 transition-colors">
            <Link href="/empresa">Empresa</Link>
          </li>
          <li className="w-full text-center hover:text-gray-200 transition-colors">
            <Link href="/servicos">Serviços</Link>
          </li>
          <li className="w-full mt-1 md:mt-0 text-center">
            <Link
              href="/contato"
              className={`px-4 py-1 text-white rounded-full transition-colors ${contatoBtnClass} inline-block`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}




