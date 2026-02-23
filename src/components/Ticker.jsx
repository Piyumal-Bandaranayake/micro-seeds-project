"use client";
import React from "react";
import { Award, ShieldCheck, Landmark, Truck } from "lucide-react";

export default function Ticker() {
    const items = [
        { title: "Premium Quality", subtitle: "Lab Certified", icon: <ShieldCheck className="w-12 h-12 text-[#2A8742]" fill="currentColor" /> },
        { title: "Certified", subtitle: "GAP, GMP, ISO", icon: <Award className="w-12 h-12 text-[#2A8742]" /> },
        { title: "Registered", subtitle: "On Agriculture Department in Sri Lanka", icon: <Landmark className="w-12 h-12 text-[#2A8742]" /> },
        { title: "Bulk Supplier", subtitle: "Retail & Wholesale", icon: <Truck className="w-12 h-12 text-[#2A8742]" /> },
    ];

    // Multiply items array to ensure the scroll is perfectly seamless without any gaps
    const marqueeItems = [...items, ...items, ...items, ...items];

    return (
        <section className="w-full bg-[#fcfdfa] py-12 border-y border-gray-100 overflow-hidden relative flex items-center">
            {/* White fading overlays on sides for a smooth entering/exiting effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fcfdfa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fcfdfa] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling container */}
            <div className="flex w-max animate-marquee items-center gap-8 pl-8">
                {marqueeItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 bg-[#DDE3DE] w-72 h-64 rounded-3xl border-2 border-[#2A8742] shrink-0 transition-all duration-300 hover:scale-105 cursor-default group shadow-[0_0_15px_rgba(42,135,66,0.4)] hover:shadow-[0_0_25px_rgba(42,135,66,0.7)]"
                    >
                        <div className="mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <span className="text-[#2A8742] font-bold text-2xl tracking-wide text-center px-4 leading-tight">
                            {item.title}
                        </span>
                        <span className="text-[#102B19] font-semibold text-sm tracking-widest uppercase text-center px-4 leading-relaxed">
                            {item.subtitle}
                        </span>
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    /* We translate exactly half so it loops seamlessly because we multiplied the array */
                    100% { transform: translateX(calc(-50% - 1rem)); } 
                }
                .animate-marquee {
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
