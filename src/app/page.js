import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Network from "@/components/Network";
import Product from "@/components/Product";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f1faf3]">
            <Navbar />
            <Hero />
            <Benefits />
            <Ticker />
            <About />
            <Network />
            <Product />
        </main>
    );
}
