import { Home, Info, Briefcase, FileText, Phone, Play, PhoneCall, ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full z-50 py-6 px-8 flex items-center justify-between text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <Home size={18} />
                </div>
                <span className="text-2xl font-serif tracking-wider font-semibold">Botanic</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
                <a href="#" className="flex items-center gap-1 hover:text-brand-brown transition-colors text-sm font-medium">
                    Home
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-brand-brown transition-colors text-sm font-medium">
                    About Us
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-brand-brown transition-colors text-sm font-medium">
                    Service
                </a>
                <div className="relative group cursor-pointer flex items-center gap-1 hover:text-brand-brown transition-colors text-sm font-medium">
                    Pages <ChevronDown size={14} />
                </div>
                <a href="#" className="flex items-center gap-1 hover:text-brand-brown transition-colors text-sm font-medium">
                    Contact Us
                </a>
            </div>

            {/* CTA Button */}
            <button className="bg-[#E4B552] hover:bg-[#c99f46] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm">
                Sign Up Now
            </button>
        </nav>
    );
}
