"use client";
import React, { useState } from "react";
import { ShoppingBasket, Store, Hotel, ArrowRight } from "lucide-react";

export default function Network() {
    const [activeItem, setActiveItem] = useState(0);

    const cards = [
        {
            title: "Food City Chain",
            description: "Dominating the retail landscape as the primary microgreens provider for the island's largest food house chains.",
            icon: <ShoppingBasket size={18} />,
            image: "/micro1.jpg",
        },
        {
            title: "Supermarket Network",
            description: "Exclusive supplier for premium supermarket outlets, ensuring daily freshness for health-conscious shoppers island-wide.",
            icon: <Store size={18} />,
            image: "/micro2.jpg",
        },
        {
            title: "Hotels & Restaurants",
            description: "The trusted partner for 5-star hotels and luxury restaurants, delivering the \"Gold Standard\" in culinary garnish.",
            icon: <Hotel size={18} />,
            image: "/micro3.jpg",
        }
    ];

    return (
        <section className="relative w-[96%] max-w-[1400px] mx-auto my-12 rounded-[3rem] py-12 md:py-16 bg-[#0F2016] overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[600px] px-8 md:px-16 shadow-2xl" id="supplier">

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-br from-[#173021] to-[#0F2016] rounded-br-[100%] opacity-50 pointer-events-none"></div>

            {/* Left Content Area */}
            <div className="w-full lg:w-5/12 z-20 mb-20 lg:mb-0 relative py-8">
                <span className="text-[#E4B552] font-semibold tracking-widest uppercase text-sm mb-4 block">
                    Leading Supply Network
                </span>
                <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tighter mb-8 max-w-[400px]">
                    The Nation's <br />
                    <span className="relative inline-block text-white mt-1">
                        Choice
                        {/* Decorative squiggly line */}
                        <svg className="absolute top-1/2 left-0 w-[120%] h-8 text-[#E4B552] scale-110 pointer-events-none opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0 10 Q 25 18 50 10 T 100 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </svg>
                        <ArrowRight className="inline-block text-[#E4B552] ml-4 -mt-2 w-10 h-10 md:w-12 md:h-12" />
                    </span>
                </h2>

                {/* Active Description Box */}
                <div className="mt-14 bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl max-w-md relative min-h-[170px] shadow-2xl transition-all duration-500 overflow-hidden group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#E4B552]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    <div className="relative z-10">
                        <div className="text-[#E4B552] mb-4 flex items-center gap-4">
                            <div className="p-2.5 bg-[#E4B552] rounded-xl text-[#0F2016] shadow-sm transform transition-transform group-hover:scale-110">
                                {cards[activeItem].icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">{cards[activeItem].title}</h3>
                        </div>
                        <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                            {cards[activeItem].description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Interactive/Orbit Area */}
            <div className="w-full lg:w-7/12 h-[450px] md:h-[550px] relative flex items-center justify-center lg:justify-end lg:pr-32">

                {/* Arch Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[350px] md:h-[550px] bg-[#617c70]/20 rounded-t-full rounded-b-md shadow-2xl overflow-hidden backdrop-blur-sm lg:translate-x-[-20%]">
                    <svg className="absolute top-20 -right-10 w-64 h-64 text-white/10" viewBox="0 0 100 100">
                        <path d="M10,50 Q30,20 50,50 T90,50 T10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                    <svg className="absolute bottom-10 -left-10 w-80 h-80 text-white/5" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                        <circle cx="20" cy="50" r="5" fill="#E4B552" />
                    </svg>
                </div>

                {/* Center Image */}
                <div className="relative z-20 w-52 h-52 md:w-72 md:h-72 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[#173021] flex items-center justify-center lg:translate-x-[-20%] overflow-hidden border-[8px] border-[#0F2016]/80 transition-all duration-700 ease-in-out group">
                    {cards.map((card, idx) => (
                        <img
                            key={idx}
                            src={card.image}
                            alt={card.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeItem === idx ? "opacity-100 scale-110 group-hover:scale-125" : "opacity-0 scale-90"
                                }`}
                        />
                    ))}

                    {/* Tiny visual indicator ring overlay */}
                    <div className="absolute inset-0 border border-white/20 rounded-full scale-90 pointer-events-none mix-blend-overlay"></div>
                </div>

                {/* Orbiting Container */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 z-30 lg:translate-x-[-20%]">
                    {cards.map((card, index) => {
                        const isHovered = activeItem === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveItem(index)}
                                className={`network-orbit-item absolute flex items-center gap-3 bg-[#08120a] text-white px-4 md:px-6 py-3 md:py-4 rounded-full whitespace-nowrap shadow-2xl border transition-all duration-300 cursor-pointer ${isHovered ? "border-[#E4B552] scale-110 z-50 bg-[#173021] shadow-[0_10px_30px_rgba(228,181,82,0.2)]" : "border-white/10 hover:border-white/30"
                                    }`}
                                style={{
                                    animationDelay: `-${(60 / cards.length) * index}s`,
                                }}
                            >
                                <span className={`p-2 md:p-2.5 rounded-full flex items-center justify-center shrink-0 drop-shadow-md transition-colors duration-300 ${isHovered ? "bg-[#E4B552] text-[#0F2016]" : "bg-white/10 text-white"}`}>
                                    {card.icon}
                                </span>
                                <span className={`text-sm md:text-base font-medium pr-2 transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-400"}`}>
                                    {card.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes network-orbit-lg {
                    0% { transform: rotate(0deg) translateX(240px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(240px) rotate(-360deg); }
                }
                @keyframes network-orbit-sm {
                    0% { transform: rotate(0deg) translateX(160px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
                }

                .network-orbit-item {
                    top: 50%;
                    left: 50%;
                    margin-left: -120px;
                    margin-top: -30px;
                    animation: network-orbit-lg 60s linear infinite;
                }

                /* Pauses ALL orbit items when ANY item is hovered to keep them in sync relative to each other */
                .w-full:has(.network-orbit-item:hover) .network-orbit-item {
                    animation-play-state: paused;
                }

                @media (max-width: 768px) {
                    .network-orbit-item {
                        margin-left: -90px;
                        margin-top: -24px;
                        animation: network-orbit-sm 60s linear infinite;
                    }
                }
            `}} />
        </section>
    );
}
