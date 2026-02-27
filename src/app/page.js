import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Explanation from "@/components/Explanation";
import Network from "@/components/Network";
import Product from "@/components/Product";
import About from "@/components/About";
import Benefits from "@/components/Benefits";

export const metadata = {
    title: "Premium Organic Microgreens & Edible Flowers Sri Lanka",
    description: "Microgreens Lanka (Pvt) Ltd provides fresh, organic microgreens with up to 40x more vitamins. Island-wide distribution to supermarkets and luxury hotels in Sri Lanka.",
    alternates: {
        canonical: "https://microgreenslanka.lk",
    },
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
            "opens": "00:00",
            "closes": "23:59"
        }
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
