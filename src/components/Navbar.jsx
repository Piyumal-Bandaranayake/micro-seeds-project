"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Info, Briefcase, FileText, Phone, Play, PhoneCall, ChevronDown } from "lucide-react";
export default function Navbar({ solid = false }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const showSolid = isScrolled || solid;

    return (
        <nav
            className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center text-white
            ${showSolid
                    ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] bg-[#0F2016]/80 backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-white/10 py-3 px-8 rounded-full translate-y-0 opacity-100 scale-100"
                    : "top-0 left-0 w-full bg-transparent py-8 px-12 -translate-y-2 opacity-100 scale-[1.02]"
                }`}
        >
            {/* Logo */}
            <div className={`absolute flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSolid ? "left-8 md:left-10" : "left-8 md:left-12 -translate-y-1"}`}>
                <Link href="/">
                    <img
                        src="/logo.png"
                        alt="Botanic Logo"
                        className={`w-auto object-contain drop-shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-0 invert ${showSolid ? "h-[70px] md:h-[85px]" : "h-[110px] md:h-[140px]"}`}
                    />
                </Link>
            </div>

            {/* Nav Links */}
            <div className={`hidden md:flex items-center gap-12 px-8 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSolid ? "opacity-100 translate-y-0" : "opacity-90 -translate-y-1"}`}>
                <Link href="/" className="relative text-lg font-medium text-white/90 hover:text-[#E4B552] transition-colors group">
                    Home
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/#about" className="relative text-lg font-medium text-white/90 hover:text-[#E4B552] transition-colors group">
                    About
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/products" className="relative text-lg font-medium text-white/90 hover:text-[#E4B552] transition-colors group">
                    Product
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="relative text-lg font-medium text-white/90 hover:text-[#E4B552] transition-colors group">
                    Contact
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            {/* Call Now Button */}
            <div className={`hidden md:flex absolute items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${showSolid ? "right-6 md:right-8 opacity-100 translate-y-0" : "right-8 md:right-12 opacity-90 -translate-y-1"}`}>
                <Link href="tel:+1234567890" className="flex items-center gap-2 bg-[#E4B552] text-[#0F2016] px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-[#0F2016] transition-all duration-300 shadow-[0_10px_20px_rgba(228,181,82,0.3)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
                    <PhoneCall size={18} />
                    <span>Call Now</span>
                </Link>
            </div>

        </nav>
    );
}
