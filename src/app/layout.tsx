import './globals.css';
import Navbar from "@/components/_components/Navbar";
import Footer from "@/components/_components/Footer";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Script from 'next/script'; // Importe o componente Script

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
});

// Adicionando o objeto metadata
export const metadata = {
  title: 'InduMax | Soluções Industriais e Tecnológicas',
  description: 'InduMax oferece automação industrial, robótica, IoT e soluções personalizadas para empresas nacionais e internacionais.',
  alternates: {
    canonical: 'https://www.matheusschran.com.br',
  },
  openGraph: {
    title: 'InduMax | Soluções Industriais e Tecnológicas',
    description: 'Especialistas em automação industrial, robótica e IoT.',
    url: 'https://www.matheusschran.com.br',
    type: 'website',
    images: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InduMax | Soluções Industriais e Tecnológicas',
    description: 'Especialistas em automação industrial, robótica e IoT.',
    images: '/og-image.png',
  },
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
        
        {/* Adicionando dados estruturados com o componente Script do Next.js */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InduMax",
              url: "https://www.matheusschran.com.br",
              logo: "favicon.ico",
              description: "Empresa especializada em soluções de automação industrial, robótica e IoT."
            }),
          }}
        />
      </body>
    </html>
  );
}


