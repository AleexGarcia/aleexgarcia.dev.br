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

export const metadata: Metadata = {
  title: "AleexGarcia | Desenvolvedor Full-Stack",
  description: "Portfólio profissional de AleexGarcia, Desenvolvedor Full-Stack especializado em React, Next.js, TypeScript e Node.js. Conheça meus projetos e soluções web.",
  keywords: ["Desenvolvedor Full-Stack", "React", "Next.js", "TypeScript", "Node.js", "Web Development", "Portfólio"],
  authors: [{ name: "AleexGarcia", url: "https://aleexgarcia.dev.br/" }],
  openGraph: {
    title: "AleexGarcia | Desenvolvedor Full-Stack",
    description: "Conheça os projetos e a trajetória de AleexGarcia, Desenvolvedor Full-Stack focado em criar aplicações web modernas e escaláveis.",
    url: "https://aleexgarcia.dev.br/",
    siteName: "Portfólio - AleexGarcia",
    images: [
      {
        url: "https://aleexgarcia.dev.br/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de AleexGarcia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AleexGarcia | Desenvolvedor Full-Stack",
    description: "Portfólio profissional de AleexGarcia. Projetos web modernos com alta performance.",
    images: ["https://aleexgarcia.dev.br/assets/og.png"],
  },
  robots: {
    index: true,
    follow: true,
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
