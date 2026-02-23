"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Leaf, Menu, X } from "lucide-react";

export default function Navbar({ solid = false }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Create a scroll progress bar
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScrollProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollProgress((winScroll / height) * 100);
        };
        window.addEventListener("scroll", handleScrollProgress);
        return () => window.removeEventListener("scroll", handleScrollProgress);
    }, []);

    const showSolid = isScrolled || solid;

    return (
        <>
            {/* Scroll Progress */}
            <div
                className="fixed top-0 left-0 h-[6px] bg-grad-pure z-[2000]"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            <header
                className={`fixed top-0 left-0 right-0 px-[5%] md:px-[8%] flex justify-between items-center z-[1000] border-b-4 border-transparent transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${showSolid
                    ? "py-[10px] bg-[#081c15] shadow-strong"
                    : "py-[15px] bg-grad-nav shadow-strong"
                    }`}
                style={{ borderImage: "var(--grad-pure-green) 1" }}
            >
                {/* Logo */}
                <Link href="/" className="text-[1.6rem] font-extrabold text-white flex items-center gap-3 no-underline tracking-tighter">
                    <img src="/logo.png" alt="Microgreens Lanka Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                    <span>Microgreens Lanka</span>
                </Link>

                {/* Mobile Toggle */}
                <div
                    className="md:hidden text-white text-[1.8rem] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Nav Links */}
                <nav>
                    <ul className={`fixed md:relative top-0 ${isMobileMenuOpen ? "right-0" : "right-[-100%]"} md:right-0 w-[80%] md:w-auto h-screen md:h-auto bg-grad-nav md:!bg-none md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end gap-10 md:gap-10 items-center transition-all duration-500 ease-in-out z-[1001] md:z-auto shadow-[-10px_0_30px_rgba(0,0,0,0.3)] md:shadow-none list-none m-0 p-0`}>
                        {/* Mobile Menu Close Button Inside */}
                        {isMobileMenuOpen && (
                            <li className="md:hidden absolute top-[20px] right-[20px] cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={32} className="text-white" />
                            </li>
                        )}
                        <li>
                            <Link href="/#home" className="text-white font-semibold text-[1.5rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full">Home</Link>
                        </li>
                        <li>
                            <Link href="/#about" className="text-white font-semibold text-[1.5rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full">Story</Link>
                        </li>
                        <li>
                            <Link href="/#supply" className="text-white font-semibold text-[1.5rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full">Suppliers</Link>
                        </li>
                        <li>
                            <Link href="/#gallery" className="text-white font-semibold text-[1.5rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white font-semibold text-[1.5rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full">Contact</Link>
                        </li>
                        <li className="md:hidden mt-5">
                            <Link href="tel:+94123456789" className="bg-grad-call text-[var(--color-primary)] px-[25px] py-[10px] rounded-full font-extrabold text-[0.9rem] uppercase tracking-[1px] shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition-all hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,204,0,0.5)] hover:brightness-110">Call Now</Link>
                        </li>
                    </ul>
                </nav>

                {/* Call Now Button Desktop */}
                <div className="hidden md:block">
                    <Link href="tel:+94123456789" className="bg-grad-call text-[var(--color-primary)] px-[25px] py-[10px] rounded-full font-extrabold text-[0.9rem] uppercase tracking-[1px] shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition-all hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,204,0,0.5)] hover:brightness-110">
                        Call Now
                    </Link>
                </div>
            </header>
        </>
    );
}
