import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const AD_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXX";

export const metadata: Metadata = {
  title: "AldiaDeTodo - Crecimiento Personal y Finanzas",
  description: "Tu dosis diaria de inspiración, consejos prácticos y crecimiento personal.",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* SCRIPT DE GOOGLE ADSENSE 
            Descomenta o ajusta la estrategia de carga según necesites.
            'afterInteractive' es ideal para no bloquear la carga inicial.
        */}
        {/* 
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> 
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-slate-900 bg-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
