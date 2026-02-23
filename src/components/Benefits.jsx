"use client";
import { ShieldCheck, Leaf, HeartPulse, Sparkles, Sprout, ArrowRight } from "lucide-react";

export default function Benefits() {
    const benefits = [
        { text: "Highly nutritious", icon: <Sparkles size={16} color="#0F2016" /> },
        { text: "Boost immunity", icon: <ShieldCheck size={16} color="#0F2016" /> },
        { text: "Easy to grow at home", icon: <Sprout size={16} color="#0F2016" /> },
        { text: "Improve digestion", icon: <HeartPulse size={16} color="#0F2016" /> },
        { text: "Enhance food taste", icon: <Leaf size={16} color="#0F2016" /> }
    ];

    return (
        <section className="relative w-[96%] max-w-[1400px] mx-auto my-12 rounded-[3rem] py-12 md:py-16 bg-[#0F2016] overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[600px] px-8 md:px-16 shadow-2xl" id="story">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-[#173021] to-[#0F2016] rounded-bl-full opacity-50 pointer-events-none"></div>

            {/* Left Content Area (Mimicking screenshot text) */}
            <div className="w-full lg:w-5/12 z-20 mb-20 lg:mb-0 relative py-8">
                <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-[0.9] tracking-tighter mb-4">
                    Organic <br />
                    <span className="relative inline-block text-white">
                        microgreens
                        {/* Decorative squiggly line under text matching screenshot vibe */}
                        <svg className="absolute top-1/2 left-0 w-full h-8 text-[#E4B552] scale-110 pointer-events-none opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 Q 25 18 50 10 T 100 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                        <ArrowRight className="inline-block text-[#E4B552] ml-2 -mt-4 w-10 h-10 md:w-12 md:h-12" />
                    </span>
                </h2>
            </div>

            {/* Right Interactive/Orbit Area */}
            <div className="w-full lg:w-7/12 h-[400px] md:h-[550px] relative flex items-center justify-center lg:justify-end lg:pr-32">

                {/* Arch Background matching the screenshot style */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[380px] h-[350px] md:h-[550px] bg-[#617c70]/40 rounded-t-full rounded-b-md shadow-2xl overflow-hidden backdrop-blur-sm lg:translate-x-[-10%]">
                    {/* Decorative squiggles behind */}
                    <svg className="absolute top-20 -left-10 w-64 h-64 text-white/30" viewBox="0 0 100 100">
                        <path d="M10,50 Q30,20 50,50 T90,50 T10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                    <svg className="absolute bottom-20 -right-10 w-80 h-80 text-white/20 animate-spin-slow" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                        <circle cx="80" cy="50" r="5" fill="white" />
                        <circle cx="20" cy="30" r="3" fill="white" />
                    </svg>
                </div>

                {/* Center Plate (Microgreen) */}
                <div className="relative z-20 w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-white flex items-center justify-center lg:translate-x-[-10%] overflow-hidden border-[8px] border-[#0F2016]/20">
                    <img
                        src="/micro1.jpg"
                        alt="Microgreen Plate"
                        className="w-full h-full object-cover scale-150 hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Center down arrow button */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
                        <span className="text-sm">↓</span>
                    </div>
                </div>

                {/* Orbiting Container */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 z-30 lg:translate-x-[-10%]">
                    {benefits.map((benefit, index) => {
                        const animationDelay = (30 / benefits.length) * index;

                        return (
                            <div
                                key={index}
                                className="orbit-item group absolute flex items-center gap-3 bg-[#0a110d] text-white px-4 md:px-5 py-2 md:py-3 rounded-full whitespace-nowrap shadow-2xl border border-white/5 transition-all cursor-pointer"
                                style={{
                                    animationDelay: `-${animationDelay}s`
                                }}
                            >
                                <span className="bg-[#E4B552] p-1.5 md:p-2 rounded-full flex items-center justify-center shrink-0 drop-shadow-md">
                                    {benefit.icon}
                                </span>
                                <span className="text-xs md:text-sm font-medium pr-2 text-gray-200">{benefit.text}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Additional floating UI mimicking the accordion list on the right */}
                <div className="hidden lg:block absolute bottom-24 -right-4 w-72 bg-transparent p-4 z-20 text-sm">
                    <div className="flex justify-between items-center mb-6 text-gray-400 border-b border-white/10 pb-4 cursor-pointer hover:text-white transition-colors">
                        <span className="font-medium tracking-wide">Description</span>
                        <span className="text-xl leading-none">+</span>
                    </div>
                    <div className="flex justify-between items-center mb-6 text-gray-400 border-b border-white/10 pb-4 cursor-pointer hover:text-white transition-colors">
                        <span className="font-medium tracking-wide">Nutrition</span>
                        <span className="text-xl leading-none">+</span>
                    </div>
                    <div className="text-white font-medium flex justify-between items-center mb-4 cursor-pointer">
                        <span className="tracking-wide">Ingredients</span>
                        <span className="text-xl leading-none">-</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                        Fresh, tangy and zesty organic microgreens with refreshing earthy notes ready to elevate your meals.
                    </p>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
                
                @keyframes orbit-lg {
                    0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
                }
                @keyframes orbit-sm {
                    0% { transform: rotate(0deg) translateX(130px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
                }

                .orbit-item {
                    top: 50%;
                    left: 50%;
                    margin-left: -80px;
                    margin-top: -20px;
                    animation: orbit-lg 30s linear infinite;
                }

                .orbit-item:hover {
                    animation-play-state: paused;
                    transform: scale(1.05);
                    border-color: #E4B552;
                    z-index: 100;
                }

                @media (max-width: 768px) {
                    .orbit-item {
                        margin-left: -65px;
                        margin-top: -16px;
                        animation: orbit-sm 30s linear infinite;
                    }
                }
            `}} />
        </section>
    );
}
