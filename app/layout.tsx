import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const AD_CLIENT_ID = "ca-pub-5266241351956416";

export const metadata: Metadata = {
  title: {
    default: "AldiaDeTodo - Crecimiento Personal, Finanzas y Productividad",
    template: "%s | AldiaDeTodo",
  },
  description: "Tu dosis diaria de inspiración, consejos prácticos de productividad, finanzas personales, salud mental y crecimiento personal. Artículos originales en español.",
  keywords: ["crecimiento personal", "productividad", "finanzas personales", "salud mental", "autoestima", "hábitos", "motivación", "superación personal", "artículos en español"],
  authors: [{ name: "AldiaDeTodo" }],
  creator: "AldiaDeTodo",
  metadataBase: new URL("https://aldiadetodo.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aldiadetodo.com",
    siteName: "AldiaDeTodo",
    title: "AldiaDeTodo - Crecimiento Personal, Finanzas y Productividad",
    description: "Tu dosis diaria de inspiración, consejos prácticos y crecimiento personal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AldiaDeTodo - Crecimiento Personal y Finanzas",
    description: "Tu dosis diaria de inspiración, consejos prácticos y crecimiento personal.",
  },
  alternates: {
    canonical: './',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        {/* SCRIPT DE GOOGLE ADSENSE - Native Script to avoid data-nscript error */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}`}
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-slate-900 bg-white min-h-screen flex flex-col`}
      >
        <GoogleAnalytics gaId="G-SNE0YWHNQ4" />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
