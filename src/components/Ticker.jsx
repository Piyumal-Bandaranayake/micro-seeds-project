"use client";
import React from "react";
import { Award, ShieldCheck, Landmark, Truck } from "lucide-react";

export default function Ticker() {
    const items = [
        { title: "#1 Dealer", subtitle: "Island-wide Supply", icon: <Award className="w-[3rem] h-[3rem] text-[#44dd66] mb-[5px] drop-shadow-[0_2px_5px_rgba(68,221,102,0.2)]" strokeWidth={1.5} /> },
        { title: "State Registered", subtitle: "Govt. Recognized", icon: <Landmark className="w-[3rem] h-[3rem] text-[#44dd66] mb-[5px] drop-shadow-[0_2px_5px_rgba(68,221,102,0.2)]" strokeWidth={1.5} /> },
        { title: "Bulk Supplier", subtitle: "Retail & Wholesale", icon: <Truck className="w-[3rem] h-[3rem] text-[#44dd66] mb-[5px] drop-shadow-[0_2px_5px_rgba(68,221,102,0.2)]" strokeWidth={1.5} /> },
        { title: "Premium Quality", subtitle: "Lab Certified", icon: <ShieldCheck className="w-[3rem] h-[3rem] text-[#44dd66] mb-[5px] drop-shadow-[0_2px_5px_rgba(68,221,102,0.2)]" strokeWidth={1.5} /> },
    ];

    // Duplicate for infinite slide show
    const marqueeItems = [...items, ...items];

    return (
        <div className="p-0 -mt-[60px] relative z-[100] overflow-hidden bg-transparent">
            <div className="flex gap-[25px] px-[8%] py-[20px] w-max animate-slide-show">
                {marqueeItems.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] bg-white text-[var(--color-primary)] px-[30px] py-[40px] text-center transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] rounded-[30px] border-[3px] border-transparent shadow-[0_15px_35px_rgba(27,67,50,0.1)] flex flex-col items-center gap-[15px] hover:-translate-y-[10px] hover:scale-105 hover:shadow-[0_20px_45px_rgba(27,67,50,0.2)]"
                        style={{
                            backgroundImage: "linear-gradient(white, white), var(--grad-pure-green)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box"
                        }}
                    >
                        {item.icon}
                        <h3 className="text-[1.5rem] font-extrabold text-transparent text-grad-pure" style={{ WebkitTextFillColor: "transparent" }}>
                            {item.title}
                        </h3>
                        <p className="text-[1rem] text-[var(--color-primary-light)] font-semibold">
                            {item.subtitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
