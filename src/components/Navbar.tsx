"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navClass = scrolled
    ? "bg-[#a81a1a] text-white"
    : "bg-gray-900/70 dark:bg-gray-900/70 text-white";

  // Cor do botão Contato baseada no scroll
  const contatoBtnClass = scrolled
    ? "bg-[#181c2c] hover:bg-[#15171f]"
    : "bg-[#a81a1a] hover:bg-[#8b1414]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 transition-colors duration-300 ${navClass}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          Bloomin
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white/90 dark:bg-gray-900/90 md:bg-transparent p-6 md:p-0 transition-all ${
            open ? "flex" : "hidden"
          } ${scrolled ? "text-white" : "text-white"}`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/empresa">Empresa</Link>
          </li>
          <li>
            <Link href="/solucoes">Serviços</Link>
          </li>

          {/* Contato como botão */}
          <li>
            <Link
              href="/contato"
              className={`px-4 py-2 text-white rounded-full transition-colors ${contatoBtnClass}`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

