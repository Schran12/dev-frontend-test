"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sobre */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Bloomin</h3>
          <p className="text-sm text-gray-400">
            Soluções industriais inteligentes para impulsionar o futuro da
            tecnologia e da manufatura.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +55 (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> contato@bloomin.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Av. Industrial, 123 - São Paulo/SP
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Siga-nos</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mapa */}
        <div className="rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.295782872814!2d-46.65693918451192!3d-23.59598156732653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b9ed8146f7%3A0x6c66e5d0f8f4a26!2sSão+Paulo%2C+SP!5e0!3m2!1spt-BR!2sbr!4v1694362549068!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      <div className="bg-[#a81a1a] py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Bloomin. Todos os direitos reservados.
      </div>
    </footer>
  );
}

