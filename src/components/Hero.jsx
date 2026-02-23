"use client";
import Link from "next/link";
import { Award } from "lucide-react";

export default function Hero() {
    return (
        <section className="h-screen min-h-[100vh] relative flex items-center justify-center px-[8%] bg-[var(--color-dark)] overflow-hidden pt-[120px] md:pt-0" id="home">
            {/* Main Hero Image Background */}
            <img
                src="https://images.unsplash.com/photo-1592398633346-60868f0514da?auto=format&fit=crop&q=80&w=2000"
                alt="Microgreens Hero"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70 filter brightness-90 contrast-110 z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(27,67,50,0.6)] z-[1]"></div>

            <div className="relative z-10 text-center max-w-[1000px] text-white">
                <div className="inline-flex items-center gap-[10px] bg-white/20 backdrop-blur-[5px] px-[24px] py-[8px] rounded-full font-bold text-[0.85rem] text-[var(--color-secondary)] border-2 border-[var(--color-primary-light)] mb-[30px] uppercase tracking-[2px]">
                    <Award size={18} /> Sri Lanka Registered Company
                </div>

                <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1] mb-[25px] tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    The #1 Leading <span className="text-grad-pure block">Microgreens</span> Supplier
                </h1>

                <p className="text-[1.1rem] md:text-[1.3rem] text-white mb-[40px] max-w-[700px] mx-auto font-normal drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                    One of the few registered companies in the <strong>Department of Agriculture</strong>. We are the primary dealer for <strong>Food City chains</strong>, <strong>Supermarket networks</strong>, and <strong>Luxury Hotels</strong> island-wide.
                </p>

                <div className="flex flex-col md:flex-row gap-[20px] justify-center w-full md:w-auto">
                    <Link href="#supply" className="inline-flex items-center justify-center gap-[12px] px-[35px] py-[16px] rounded-full font-extrabold uppercase tracking-[1.5px] text-[0.95rem] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] relative overflow-hidden z-[1] bg-grad-pure text-white border-none shadow-[0_10px_25px_rgba(27,67,50,0.3)] hover:-translate-y-[5px] hover:scale-105 hover:shadow-[0_15px_35px_rgba(68,221,102,0.4)] pulse-anim before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-600 hover:before:left-[100%]">
                        Our Supply Network
                    </Link>
                    <Link href="#contact" className="inline-flex items-center justify-center gap-[12px] px-[35px] py-[16px] rounded-full font-extrabold uppercase tracking-[1.5px] text-[0.95rem] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] relative overflow-hidden z-[1] bg-white/10 backdrop-blur-[10px] text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:-translate-y-[5px] hover:scale-105 hover:shadow-[0_15px_35px_rgba(255,204,0,0.4)]">
                        Partner With Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
