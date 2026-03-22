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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KI-Beratung Sebastian Pieper",
  url: "https://ki-beratung.vercel.app",
  description:
    "Praxisnahe KI-Beratung für den deutschen Mittelstand — Strategie, Workshops, Implementierung und laufende Begleitung.",
  provider: {
    "@type": "Person",
    name: "Sebastian Pieper",
    url: "https://sebastian-pieper.vercel.app",
    email: "seb@stianpieper.de",
    sameAs: ["https://www.linkedin.com/in/sebastian-pieper-selb/"],
  },
  areaServed: {
    "@type": "Country",
    name: "Germany",
  },
  serviceType: [
    "KI-Strategie",
    "KI-Workshops",
    "AI Agents",
    "KI-Implementierung",
    "KI-Governance",
  ],
  availableLanguage: ["de", "en"],
  priceRange: "Kostenloses Erstgespräch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
