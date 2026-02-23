"use client";
import { Gem, Clock, Tags } from "lucide-react";

export default function About() {
    return (
        <section className="py-[120px] px-[8%] bg-[var(--color-light)] relative overflow-hidden [perspective:2000px] flex items-center justify-center min-h-[800px]" id="about">
            {/* Background text decorative element */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-[15rem] md:text-[20rem] font-[900] text-[rgba(68,221,102,0.05)] pointer-events-none z-0">
                CHOOSE
            </div>

            <div className="relative z-10 w-full max-w-[1400px]">
                <span className="text-[var(--color-primary-light)] font-[800] text-[0.9rem] uppercase tracking-[3px] block mb-[15px] text-center">
                    Why Microgreens Lanka?
                </span>
                <h2 className="text-[3.5rem] text-center mb-[60px] text-[var(--color-primary)] font-[var(--font-serif)]">
                    Experience the Green Difference
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-[60px] [transform-style:preserve-3d]">
                    <div className="why-card group px-[40px] py-[60px] rounded-[40px] bg-grad-pure text-white text-center relative overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer [transform-style:preserve-3d] [animation:rotateFloat_7s_ease-in-out_infinite] hover:[animation-play-state:paused] hover:!transform hover:!-translate-y-[40px] hover:!scale-110 hover:!rotate-y-12 hover:!rotate-x-6 hover:shadow-[0_40px_80px_rgba(27,67,50,0.5)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 hover:z-[100] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-[0.8s] hover:before:left-[100%]">
                        <Gem className="w-[4rem] h-[4rem] text-white mb-[35px] inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                        <h3 className="text-[1.8rem] mb-[20px] text-white font-[800] font-[var(--font-serif)]">High Quality</h3>
                        <p className="text-[1.1rem] text-white/90 leading-[1.6] font-[400] font-[var(--font-sans)]">
                            Grown in lab-controlled environments to ensure the most premium, nutrient-dense harvest in the market.
                        </p>
                    </div>

                    <div className="why-card group px-[40px] py-[60px] rounded-[40px] bg-grad-pure text-white text-center relative overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer [transform-style:preserve-3d] [animation:rotateFloat_9s_ease-in-out_infinite_1s] hover:[animation-play-state:paused] hover:!transform hover:!-translate-y-[40px] hover:!scale-110 hover:!rotate-y-12 hover:!rotate-x-6 hover:shadow-[0_40px_80px_rgba(27,67,50,0.5)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 hover:z-[100] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-[0.8s] hover:before:left-[100%]">
                        <Clock className="w-[4rem] h-[4rem] text-white mb-[35px] inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                        <h3 className="text-[1.8rem] mb-[20px] text-white font-[800] font-[var(--font-serif)]">Fresh Harvest</h3>
                        <p className="text-[1.1rem] text-white/90 leading-[1.6] font-[400] font-[var(--font-sans)]">
                            From our farm to your store or kitchen within hours. We guarantee 100% daily freshness island-wide.
                        </p>
                    </div>

                    <div className="why-card group px-[40px] py-[60px] rounded-[40px] bg-grad-pure text-white text-center relative overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer [transform-style:preserve-3d] [animation:rotateFloat_8s_ease-in-out_infinite_0.5s] hover:[animation-play-state:paused] hover:!transform hover:!-translate-y-[40px] hover:!scale-110 hover:!rotate-y-12 hover:!rotate-x-6 hover:shadow-[0_40px_80px_rgba(27,67,50,0.5)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 hover:z-[100] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-[0.8s] hover:before:left-[100%]">
                        <Tags className="w-[4rem] h-[4rem] text-white mb-[35px] inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                        <h3 className="text-[1.8rem] mb-[20px] text-white font-[800] font-[var(--font-serif)]">Best Prices</h3>
                        <p className="text-[1.1rem] text-white/90 leading-[1.6] font-[400] font-[var(--font-sans)]">
                            As the primary bulk supplier, we offer the most competitive wholesale rates for supermarket chains and hotels.
                        </p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes rotateFloat {
                    0% { transform: translateY(0px) rotateY(-5deg) rotateX(2deg); }
                    50% { transform: translateY(-20px) rotateY(10deg) rotateX(-2deg); }
                    100% { transform: translateY(0px) rotateY(-5deg) rotateX(2deg); }
                }
                `
            }} />
        </section>
    );
}
