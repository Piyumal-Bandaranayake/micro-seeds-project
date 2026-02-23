import Link from "next/link";

export default function Benefits() {
    return (
        <section className="py-[100px] px-[8%] bg-grad-nav text-center text-white relative overflow-hidden flex justify-center items-center">
            <div className="relative z-10">
                <h2 className="text-[3.5rem] mb-[20px] font-[var(--font-serif)] font-[800]">Ready to Elevate Your Menu?</h2>
                <p className="text-[1.2rem] mb-[40px] opacity-90 max-w-[600px] mx-auto font-[var(--font-sans)] leading-[1.7]">
                    Join the elite network of retailers and chefs who trust Microgreens Lanka for their premium green supply.
                </p>
                <div className="flex gap-[20px] justify-center flex-wrap">
                    <Link
                        href="tel:+94123456789"
                        className="bg-grad-call text-[var(--color-primary)] px-[40px] py-[15px] rounded-full no-underline font-[800] text-[1.1rem] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_10px_30px_rgba(255,204,0,0.3)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,204,0,0.5)] pulse-anim"
                    >
                        Order Now
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-white/10 backdrop-blur-[10px] text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] px-[40px] py-[15px] rounded-full no-underline font-[800] text-[1.1rem] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:scale-105 hover:shadow-[0_15px_35px_rgba(255,204,0,0.4)]"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
