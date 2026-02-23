import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Leaf } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--color-light)] relative">
            <Navbar solid={true} />

            {/* Header Section */}
            <section className="relative pt-[180px] pb-[80px] px-[8%] bg-grad-nav text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-0 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <h1 className="text-[4rem] md:text-[5rem] font-[var(--font-serif)] font-[800] mb-[20px] text-[var(--color-secondary)]">
                        Contact Us
                    </h1>
                    <p className="text-[1.2rem] text-white/80 max-w-[800px] mx-auto leading-[1.7] font-[var(--font-sans)]">
                        Have questions or want to partner with us? We'd love to hear from you. Reach out for any inquiries regarding bulk supply or our premium organic microgreens.
                    </p>
                </div>
            </section>

            <Contact />
        </main>
    );
}
