import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { images } from "@/content/content";

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const allura = localFont({
  src: "../fonts/allura-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

const montserrat = localFont({
  src: "../fonts/montserrat-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

const title = "AL Nails | Mais que unhas, é autoestima";
const description =
  "Alongamento, banho de gel, blindagem e cuidado com as unhas em Almirante Tamandaré. Veja valores, regras de agendamento e agende pelo WhatsApp.";

export const metadata: Metadata = {
  // Quando publicar (Vercel), trocar por metadataBase: new URL("https://dominio-real.com")
  // para o preview de link (WhatsApp/Instagram) usar a URL certa da imagem.
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: images.hero, alt: images.heroAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.hero],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} ${allura.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
