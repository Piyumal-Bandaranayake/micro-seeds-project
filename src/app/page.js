import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Explanation from "@/components/Explanation";
import Network from "@/components/Network";
import Product from "@/components/Product";
import About from "@/components/About";
import Benefits from "@/components/Benefits";

export const metadata = {
    title: "Microgreens Sri Lanka | #1 Organic Microgreens & Edible Flowers",
    description: "Welcome to Microgreens Lanka, the leading supplier of 100% organic microgreens in Sri Lanka. Certified by the Dept of Agriculture. Freshly grown and delivered island-wide to supermarkets, hotels, and homes.",
    alternates: {
        canonical: "https://microgreenslanka.lk",
    },
    keywords: "microgreens sri lanka, buy microgreens sri lanka, microgreens price sri lanka, organic microgreens colombo, sunflower microgreens colombo, edible flowers sri lanka, vertical farming sri lanka",
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Microgreens Lanka (Pvt) Ltd",
        "image": "https://microgreenslanka.lk/og-image.jpg",
        "@id": "https://microgreenslanka.lk",
        "url": "https://microgreenslanka.lk",
        "telephone": "+94766177948",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Colombo",
            "addressLocality": "Colombo",
            "addressRegion": "Western Province",
            "postalCode": "00100",
            "addressCountry": "LK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.9271,
            "longitude": 79.8612
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "08:00",
            "closes": "20:00"
        },
        "sameAs": [
            "https://facebook.com/microgreenslanka",
            "https://instagram.com/microgreenslanka",
            "https://linkedin.com/company/microgreenslanka"
        ]
    };

    return (
        <main className="min-h-screen bg-[var(--color-background)]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <Ticker />
            <Explanation />
            <Network />
            <Product />
            <About />
            <Benefits />
        </main>
    );
}
