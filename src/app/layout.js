import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://microgreenslanka.lk"),
  title: {
    default: "Microgreens Lanka | #1 Organic Microgreens Supplier in Sri Lanka",
    template: "%s | Microgreens Lanka",
  },
  description: "Microgreens Lanka (Pvt) Ltd is Sri Lanka's leading licensed producer of 100% organic microgreens and edible flowers. We provide premium, nutrient-dense superfoods to supermarkets (Food City, Keells) and luxury hotels island-wide. Freshly harvested and delivered daily.",
  keywords: [
    "microgreens Sri Lanka",
    "organic microgreens Sri Lanka",
    "buy microgreens Sri Lanka",
    "microgreens Colombo",
    "edible flowers Sri Lanka",
    "microgreens price Sri Lanka",
    "best microgreens supplier Sri Lanka",
    "organic vegetables Sri Lanka",
    "healthy food delivery Sri Lanka",
    "sunflower microgreens Sri Lanka",
    "broccoli microgreens Sri Lanka",
    "radish microgreens Sri Lanka",
    "pea shoots Sri Lanka",
    "vertical farming Sri Lanka",
    "hydroponics Sri Lanka",
    "superfoods Colombo",
    "organic superfoods Sri Lanka",
    "Micro Greens Lanka",
    "wholesale microgreens Sri Lanka",
    "restaurant supplier Sri Lanka",
    "hotel food supplier Sri Lanka",
    "fresh produce delivery Sri Lanka",
    "gourmet garnish Sri Lanka",
    "culinary herbs Sri Lanka",
    "healthy greens for diabetes Sri Lanka",
    "immune boosting foods Sri Lanka",
    "buy organic greens Colombo",
    "fresh microgreens daily Sri Lanka",
    "primary microgreens supplier",
    "Cargills Food City supplier",
    "Keells supermarket supplier Sri Lanka",
    "Arpico microgreens supplier",
    "luxury hotel food supplier Colombo"
  ],
  authors: [{ name: "Microgreens Lanka (Pvt) Ltd" }],
  creator: "Microgreens Lanka",
  publisher: "Microgreens Lanka (Pvt) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logogreen.svg", type: "image/svg+xml" },
      { url: "/logogreen.png", type: "image/png" },
    ],
    shortcut: "/logogreen.png",
    apple: [
      { url: "/logogreen.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://microgreenslanka.lk",
    siteName: "Microgreens Lanka",
    title: "Microgreens Sri Lanka | Premium Organic Microgreens & Edible Flowers",
    description: "The #1 Microgreens Sri Lanka supplier. We provide 100% organic, freshly harvested microgreens and edible flowers for Food City, Keells, and 5-star hotels in Colombo and island-wide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microgreens Sri Lanka - Leading Organic Supplier for Supermarkets and Hotels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microgreens Sri Lanka | #1 Premium Organic Supplier",
    description: "Buy the best organic microgreens in Sri Lanka. Fresh delivery to Colombo and island-wide. Supplier for top supermarkets and luxury hotels.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-LK">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Microgreens Lanka (Pvt) Ltd",
              "url": "https://microgreenslanka.lk",
              "logo": "https://microgreenslanka.lk/logogreen.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94766177948",
                "contactType": "customer service",
                "areaServed": "LK",
                "availableLanguage": ["English", "Sinhala"]
              },
              "sameAs": [
                "https://facebook.com/microgreenslanka", // Replace with actual social links if available
                "https://instagram.com/microgreenslanka",
                "https://linkedin.com/company/microgreenslanka"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
