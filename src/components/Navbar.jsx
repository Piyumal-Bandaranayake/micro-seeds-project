"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Info, Briefcase, FileText, Phone, Play, PhoneCall, ChevronDown } from "lucide-react";
export default function Navbar({ solid = false }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showSolid = isScrolled || solid;

    return (
        <nav className={`fixed top-0 w-full z-50 px-8 flex items-start justify-between text-white transition-all duration-300 ${showSolid ? "bg-[#0F2016]/95 backdrop-blur-md shadow-xl py-2 items-center" : "pt-0 bg-transparent"}`}>
            {/* Logo */}
            <div className={`flex items-center transition-all duration-300 ${showSolid ? "mt-0" : "-mt-8"}`}>
                <img src="/logo.png" alt="Botanic Logo" className={`w-auto object-contain drop-shadow-lg transition-all duration-300 ${showSolid ? "h-20" : "h-40"}`} />
            </div>

            {/* Nav Links */}
            <div className={`hidden md:flex items-center gap-10 px-8 py-3 rounded-full transition-all duration-300 ${showSolid ? "mt-0" : "mt-6"}`}>
                <Link href="/" className="relative text-lg font-medium hover:text-[#E4B552] transition-colors group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/#about" className="relative text-lg font-medium hover:text-[#E4B552] transition-colors group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/products" className="relative text-lg font-medium hover:text-[#E4B552] transition-colors group">
                    Product
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/#contact" className="relative text-lg font-medium hover:text-[#E4B552] transition-colors group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E4B552] transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

        </nav>
    );
}
