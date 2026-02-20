import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Product />
            <Contact />
        </main>
    );
}
