import Link from "next/link";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-grad-footer text-white pt-[50px] px-[8%] pb-[20px] border-t-[4px] border-transparent relative z-20" style={{ borderImage: "var(--grad-pure-green) 1" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-[40px] mb-[40px]">
                <div className="footer-brand">
                    <Link href="/" className="text-[1.3rem] font-[800] text-white flex items-center gap-[10px] no-underline mb-[15px]">
                        <Leaf className="text-[var(--color-secondary)] w-8 h-8 font-[900]" />
                        <span>Microgreens Lanka</span>
                    </Link>
                    <p className="text-white/70 mb-[15px] font-[var(--font-sans)] leading-[1.6] text-[0.9rem]">
                        Revolutionizing agricultural supply in Sri Lanka through precision farming and a robust island-wide distribution network.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="text-[1rem] mb-[15px] text-[var(--color-secondary)] font-[var(--font-serif)] font-[800]">Explore</h4>
                    <ul className="list-none space-y-[10px] text-[0.9rem]">
                        <li><Link href="/#home" className="text-white/70 no-underline transition-colors hover:text-white">Home</Link></li>
                        <li><Link href="/#about" className="text-white/70 no-underline transition-colors hover:text-white">About</Link></li>
                        <li><Link href="/#products" className="text-white/70 no-underline transition-colors hover:text-white">Product</Link></li>
                        <li><Link href="/contact" className="text-white/70 no-underline transition-colors hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 className="text-[1rem] mb-[15px] text-[var(--color-secondary)] font-[var(--font-serif)] font-[800]">Get In Touch</h4>
                    <ul className="list-none space-y-[10px] text-[0.9rem]">
                        <li className="flex gap-[15px] text-white/70"><MapPin className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> Colombo, Sri Lanka</li>
                        <li className="flex gap-[15px] text-white/70"><a href="https://wa.me/94766177948" target="_blank" rel="noopener noreferrer" className="flex gap-[15px] text-white/70 no-underline hover:text-white transition-colors"><Phone className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> +94 766 177 948</a></li>
                        <li className="flex gap-[15px] text-white/70"><Mail className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> hello@microgreenslanka.lk</li>
                    </ul>
                </div>
            </div>

            <div className="pt-[20px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-[0.8rem] gap-2">
                <p>&copy; {new Date().getFullYear()} Microgreens Lanka (Pvt) Ltd. All Rights Reserved.</p>
                <p>Registration No: AG/MG/2024/001</p>
            </div>
        </footer>
    );
}
