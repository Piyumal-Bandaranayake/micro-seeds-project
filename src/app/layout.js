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
    default: "Microgreens Lanka | Premium Organic Microgreens Sri Lanka",
    template: "%s | Microgreens Lanka",
  },
  description: "Microgreens Lanka (Pvt) Ltd is Sri Lanka's leading supplier of organic microgreens and edible flowers for Food City, supermarkets, and luxury hotels. Fresh, nutrient-dense superfoods grown locally.",
  keywords: ["microgreens Sri Lanka", "organic microgreens", "edible flowers Sri Lanka", "vertical farming Sri Lanka", "healthy greens for diabetes", "organic superfoods Sri Lanka", "Micro Greens Lanka"],
  authors: [{ name: "Microgreens Lanka (Pvt) Ltd" }],
  creator: "Microgreens Lanka",
  publisher: "Microgreens Lanka (Pvt) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logogreen.svg",
    apple: "/logogreen.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://microgreenslanka.lk",
    siteName: "Microgreens Lanka",
    title: "Microgreens Lanka | Premium Organic Microgreens Sri Lanka",
    description: "Leading supplier of organic microgreens and edible flowers in Sri Lanka. Fresh, nutrient-dense superfoods delivered island-wide.",
    images: [
      {
        url: "/og-image.jpg", // Suggested image path
        width: 1200,
        height: 630,
        alt: "Premium Organic Microgreens Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microgreens Lanka | Premium Organic Microgreens Sri Lanka",
    description: "Leading supplier of organic microgreens and edible flowers in Sri Lanka. Fresh, nutrient-dense superfoods delivered island-wide.",
    images: ["/og-image.jpg"],
  },
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
