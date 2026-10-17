import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "AL Nails | Mais que unhas, é autoestima",
  description:
    "Alongamento, banho de gel, blindagem e cuidado com as unhas em Almirante Tamandaré. Veja valores, regras de agendamento e agende pelo WhatsApp.",
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
