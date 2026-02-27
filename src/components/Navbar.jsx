"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
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

    const showAlways = !isHome;
    const isVisible = isScrolled || showAlways;

    return (
        <>
            {/* Scroll Progress */}
            <div
                className="fixed top-0 left-0 h-[6px] bg-grad-pure z-[1001]"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            <header
                className={`fixed left-1/2 -translate-x-1/2 z-[1000] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled
                    ? "top-5 w-[92%] md:w-[85%] px-[5%] py-[12px] bg-[#081c15]/95 backdrop-blur-xl rounded-[40px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    : "top-0 w-full px-[5%] md:px-[8%] py-[20px] bg-transparent rounded-none border-none"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="text-[1.4rem] md:text-[1.6rem] font-bold flex items-center gap-2 sm:gap-3 no-underline">
                    <img src="/logogreen.png" alt="Microgreens Lanka Logo" className="h-10 md:h-12 w-auto object-contain" />
                    <span className="text-grad-pure hidden sm:block tracking-tighter">MicroGreens Lanka</span>
                    <span className="text-grad-pure sm:hidden block tracking-tighter text-[1.50rem] font-semibold leading-tight text-center">MicroGreens Lanka (PVT) LTD</span>
                </Link>

                {/* Nav Links */}
                <nav>
                    <ul className={`fixed md:relative top-0 ${isMobileMenuOpen ? "right-0" : "right-[-100%]"} md:right-0 w-[75%] md:w-auto h-screen md:h-auto bg-grad-nav md:!bg-none md:bg-transparent flex flex-col md:flex-row justify-start md:justify-end pt-[80px] md:pt-0 pl-[8%] md:pl-0 gap-6 md:gap-10 items-start md:items-center transition-all duration-500 ease-in-out z-[1001] md:z-auto shadow-[-10px_0_30px_rgba(0,0,0,0.3)] md:shadow-none list-none m-0 p-0 md:items-center`}
                        style={{ paddingLeft: undefined }}>
                        {/* Mobile Menu Close Button Inside */}
                        {isMobileMenuOpen && (
                            <li className="md:hidden absolute top-[20px] right-[20px] cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                                <X size={32} className="text-white" />
                            </li>
                        )}
                        {/* Mobile brand header */}
                        {isMobileMenuOpen && (
                            <li className="md:hidden mb-4 pl-[8%] pt-[10px]">
                                <Link href="/" className="flex items-center gap-2 no-underline" onClick={() => setIsMobileMenuOpen(false)}>
                                    <img src="/logogreen.png" alt="Logo" className="h-9 w-auto" />
                                    <span className="text-grad-pure font-semibold text-[1.1rem] tracking-tighter text-center">Microgreens Lanka (PVT) LTD</span>
                                </Link>
                            </li>
                        )}
                        <li className="pl-[8%] md:pl-0 w-full md:w-auto">
                            <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-semibold text-[1.3rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full block">Home</Link>
                        </li>
                        <li className="pl-[8%] md:pl-0 w-full md:w-auto">
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-semibold text-[1.3rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full block">About Us</Link>
                        </li>
                        <li className="pl-[8%] md:pl-0 w-full md:w-auto">
                            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-semibold text-[1.3rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full block">Product</Link>
                        </li>
                        <li className="pl-[8%] md:pl-0 w-full md:w-auto">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-semibold text-[1.3rem] md:text-[1rem] transition-all relative py-1 hover:text-[var(--color-primary-vibrant)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary-vibrant)] after:transition-all hover:after:w-full block">Contact</Link>
                        </li>
                        <li className="md:hidden mt-4 pl-[8%]">
                            <a href="https://wa.me/94766177948" target="_blank" rel="noopener noreferrer" className="bg-grad-call text-[var(--color-primary)] px-[25px] py-[10px] rounded-full font-extrabold text-[0.9rem] uppercase tracking-[1px] shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition-all hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,204,0,0.5)] hover:brightness-110 inline-block">Call Now</a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <div
                    className="md:hidden text-white text-[1.8rem] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    role="button"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>


                {/* Call Now Button Desktop */}
                <div className="hidden md:block">
                    <a href="https://wa.me/94766177948" target="_blank" rel="noopener noreferrer" className="bg-grad-call text-[var(--color-primary)] px-[25px] py-[10px] rounded-full font-extrabold text-[0.9rem] uppercase tracking-[1px] shadow-[0_4px_15px_rgba(255,204,0,0.4)] transition-all hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,204,0,0.5)] hover:brightness-110">
                        Call Now
                    </a>
                </div>
            </header>
        </>
    );
}
