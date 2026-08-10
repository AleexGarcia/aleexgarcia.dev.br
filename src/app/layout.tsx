import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const baseUrl = process.env.CONTEXT === 'production'
  ? (process.env.URL || 'https://aleexgarcia.dev.br')
  : process.env.DEPLOY_PRIME_URL 
    ? process.env.DEPLOY_PRIME_URL 
    : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  title: {
    default: "AleexGarcia | Desenvolvedor Full-Stack",
    template: "%s | AleexGarcia" 
  },
  description: "Dev Full-Stack especialista em Next.js e NestJS. Código limpo, deploy implacável e soluções robustas. Conheça meus projetos!",
  keywords: ["Desenvolvedor Full-Stack", "React", "Next.js", "TypeScript", "Node.js", "Web Development", "Portfólio"],
  authors: [{ name: "AleexGarcia", url: baseUrl }],
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "AleexGarcia | Desenvolvedor Full-Stack",
    description: "Código limpo, deploy implacável. Conheça os projetos e a trajetória de um Desenvolvedor Full-Stack focado em aplicações modernas.",
    url: "./", // Usa a metadataBase automaticamente
    siteName: "Portfólio - AleexGarcia",
    images: [
      {
        url: "/assets/og.webp", 
        width: 1200,
        height: 630,
        alt: "Portfólio de AleexGarcia - Desenvolvedor Full-Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // X / Twitter
  twitter: {
    card: "summary_large_image",
    title: "AleexGarcia | Desenvolvedor Full-Stack",
    description: "Ship it like a Viking! Projetos web modernos com alta performance e foco em resultados.",
    images: ["/assets/og.webp"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
