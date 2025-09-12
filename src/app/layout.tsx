// src/app/layout.tsx
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";

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
          <div className="">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
