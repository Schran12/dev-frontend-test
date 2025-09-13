"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          {/* Logo */}
          <div className="mb-4">
            <Image src="/logo-2.png" alt="InduMax Logo" width={100} height={50} />
          </div>
          <p className="text-sm text-gray-400">
            Soluções industriais inteligentes para aumentar a produtividade e a inovação na sua empresa.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <address className="not-italic space-y-2 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +55 (11) 99999-9999
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a href="mailto:contato@indumax.com" className="hover:underline">contato@indumax.com</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Rua Fictícia, 123 - Bairro Exemplo/SP
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Siga-nos</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" title="Facebook" className="hover:text-[#a81a1a] transition">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" title="Instagram" className="hover:text-[#a81a1a] transition">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" title="LinkedIn" className="hover:text-[#a81a1a] transition">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <iframe
            title="Mapa da unidade InduMax"
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
        © {new Date().getFullYear()} InduMax. Todos os direitos reservados.
      </div>
    </footer>
  );
}

