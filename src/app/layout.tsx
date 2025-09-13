// src/app/layout.tsx
import './globals.css';
import Navbar from "@/components/_components/Navbar";
import Footer from "@/components/_components/Footer";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata = {
  title: 'Bloomin - Industrial Solutions',
  description: 'Site institucional profissional da Bloomin',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${raleway.variable}`}>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-darkbg font-raleway transition-colors duration-500">
        <Navbar />
        <main className="flex-1">
          <div>
            {children}
          </div>
        </main>
        <Footer />

        {/* Botão flutuante do WhatsApp */}
        <Link
          href="https://wa.me/5511999999999"
          target="_blank"
          className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
        </Link>
      </body>
    </html>
  );
}

