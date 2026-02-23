import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Network from "@/components/Network";
import Product from "@/components/Product";
import About from "@/components/About";
import Benefits from "@/components/Benefits";

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-background)]">
            <Navbar />
            <Hero />
            <Ticker />
            <Network />
            <Product />
            <About />
            <Benefits />
        </main>
    );
}
