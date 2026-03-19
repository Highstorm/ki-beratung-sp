import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KI-Beratung Sebastian Pieper — KI praxisnah einsetzen",
  description:
    "KI-Strategie, Workshops und Implementierung für den Mittelstand. Praxisnah, DSGVO-konform und mit messbaren Ergebnissen. Kostenloses Erstgespräch buchen.",
  openGraph: {
    title: "KI-Beratung Sebastian Pieper",
    description: "KI praxisnah einsetzen — Beratung, Schulung & Implementierung für den Mittelstand",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
