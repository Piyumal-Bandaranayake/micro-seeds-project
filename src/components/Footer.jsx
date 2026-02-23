import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#08120a] text-white py-12 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-8">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <img src="/logo.png" alt="Botanic Logo" className="h-16 mb-4 object-contain brightness-0 invert" />
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        Cultivating a healthier future generation with premium, highly-nutritive microgreens.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex justify-center gap-8 text-gray-300">
                    <Link href="/" className="hover:text-[#E4B552] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[#E4B552] transition-colors">About</Link>
                    <Link href="/products" className="hover:text-[#E4B552] transition-colors">Products</Link>
                    <Link href="/contact" className="hover:text-[#E4B552] transition-colors">Contact</Link>
                </div>

                {/* Socials */}
                <div className="flex justify-center md:justify-end gap-6">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E4B552] hover:text-[#0F2016] transition-all duration-300">
                        <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E4B552] hover:text-[#0F2016] transition-all duration-300">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E4B552] hover:text-[#0F2016] transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Botanic Microgreens. All rights reserved.
            </div>
        </footer>
    );
}
