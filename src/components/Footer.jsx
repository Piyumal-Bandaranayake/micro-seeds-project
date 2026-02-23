import Link from "next/link";
import { Facebook, Instagram, Twitter, Leaf, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-grad-footer text-white pt-[100px] px-[8%] pb-[40px] border-t-[4px] border-transparent relative z-20" style={{ borderImage: "var(--grad-pure-green) 1" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[80px] mb-[80px]">
                <div className="footer-brand">
                    <Link href="/" className="text-[1.6rem] font-[800] text-white flex items-center gap-[12px] no-underline mb-[25px]">
                        <Leaf className="text-[var(--color-secondary)] w-8 h-8 font-[900]" />
                        <span>Microgreens Lanka</span>
                    </Link>
                    <p className="text-white/70 mb-[30px] font-[var(--font-sans)] leading-[1.7]">
                        Revolutionizing agricultural supply in Sri Lanka through precision farming and a robust island-wide distribution network.
                    </p>
                    <div className="flex gap-[15px]">
                        <a href="#" className="text-white text-[1.2rem] hover:text-[var(--color-secondary)] transition-colors"><Instagram /></a>
                        <a href="#" className="text-white text-[1.2rem] hover:text-[var(--color-secondary)] transition-colors"><Facebook /></a>
                        <a href="#" className="text-white text-[1.2rem] hover:text-[var(--color-secondary)] transition-colors"><Twitter /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4 className="text-[1.2rem] mb-[30px] text-[var(--color-secondary)] font-[var(--font-serif)] font-[800]">Explore</h4>
                    <ul className="list-none space-y-[15px]">
                        <li><Link href="/#home" className="text-white/70 no-underline transition-colors hover:text-white">Home</Link></li>
                        <li><Link href="/#about" className="text-white/70 no-underline transition-colors hover:text-white">About</Link></li>
                        <li><Link href="/#products" className="text-white/70 no-underline transition-colors hover:text-white">Product</Link></li>
                        <li><Link href="/contact" className="text-white/70 no-underline transition-colors hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 className="text-[1.2rem] mb-[30px] text-[var(--color-secondary)] font-[var(--font-serif)] font-[800]">Legal</h4>
                    <ul className="list-none space-y-[15px]">
                        <li><a href="#" className="text-white/70 no-underline transition-colors hover:text-white">Agriculture Cert</a></li>
                        <li><a href="#" className="text-white/70 no-underline transition-colors hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-white/70 no-underline transition-colors hover:text-white">Quality Assurance</a></li>
                        <li><a href="#" className="text-white/70 no-underline transition-colors hover:text-white">Partner Program</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 className="text-[1.2rem] mb-[30px] text-[var(--color-secondary)] font-[var(--font-serif)] font-[800]">Get In Touch</h4>
                    <ul className="list-none space-y-[15px]">
                        <li className="flex gap-[15px] text-white/70"><MapPin className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> Colombo, Sri Lanka</li>
                        <li className="flex gap-[15px] text-white/70"><Phone className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> +94 11 234 5678</li>
                        <li className="flex gap-[15px] text-white/70"><Mail className="text-[var(--color-secondary)] mt-1 flex-shrink-0" /> hello@microgreenslanka.lk</li>
                    </ul>
                </div>
            </div>

            <div className="pt-[40px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-[0.9rem] gap-4">
                <p>&copy; {new Date().getFullYear()} Microgreens Lanka (Pvt) Ltd. All Rights Reserved.</p>
                <p>Registration No: AG/MG/2024/001</p>
            </div>
        </footer>
    );
}
