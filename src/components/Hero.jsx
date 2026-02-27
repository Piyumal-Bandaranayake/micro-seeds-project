"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Award, ShieldCheck, Leaf } from "lucide-react";

export default function Hero() {
    const slides = [
        {
            image: "/micro3.jpg",
            badge: "Dept of Agriculture Registered",
            icon: <Award size={18} />,
            title: "The #1 Leading Microgreens Supplier",
            highlight: "Microgreens"
        },
        {
            image: "/i1.jpg",
            badge: "Government Recognized",
            icon: <ShieldCheck size={18} />,
            title: "Sri Lanka Registered Company",
            highlight: "Registered"
        },
        {
            image: "/i3.jpg",
            badge: "100% Organic & Fresh",
            icon: <Leaf size={18} />,
            title: "Premium Products",
            highlight: "Premium"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Function to render title with gradient on specific word
    const renderTitle = (title, highlight) => {
        const parts = title.split(highlight);
        return (
            <>
                {parts[0]}
                <span className="text-grad-pure">{highlight}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <section className="h-screen min-h-[100vh] relative flex items-center justify-center px-[5%] md:px-[8%] bg-[var(--color-dark)] overflow-hidden" id="home">
            {/* Slideshow Background Images */}
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-50 z-0" : "opacity-0 -z-10"}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-full object-cover filter brightness-50 contrast-125 transition-transform duration-[7s] linear ${idx === currentSlide ? "scale-110" : "scale-100"}`}
                    />
                </div>
            ))}

            {/* Gradient Overlay - Deeper and more protective for text */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-transparent to-[rgba(8,28,21,0.9)] z-[1]"></div>

            <div className="relative z-10 text-center w-full max-w-[1200px] text-white flex flex-col items-center">

                {/* Badge Transition - Improved Centering */}
                <div className="h-[45px] mb-[30px] flex justify-center items-center relative w-full">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`transition-all duration-700 absolute left-0 right-0 flex justify-center ${idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
                        >
                            <div className="inline-flex items-center gap-[10px] bg-white/10 backdrop-blur-[15px] px-[24px] py-[8px] rounded-full font-bold text-[0.8rem] md:text-[0.9rem] text-[var(--color-secondary)] border border-white/20 uppercase tracking-[3px] whitespace-nowrap shadow-xl">
                                {slide.icon} {slide.badge}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Title Transition - Increased Height to prevent overlap */}
                <div className="relative mb-[30px] md:mb-[40px] w-full min-h-[180px] md:min-h-[300px] lg:min-h-[350px] flex items-center justify-center">
                    {slides.map((slide, idx) => (
                        <h1
                            key={idx}
                            className={`absolute w-full px-4 text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-[1] tracking-tighter font-black drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${idx === currentSlide
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                                }`}
                        >
                            {renderTitle(slide.title, slide.highlight)}
                        </h1>
                    ))}
                </div>

                {/* Buttons Always Fixed */}
                <div className="flex flex-col sm:flex-row gap-[15px] md:gap-[20px] justify-center w-full sm:w-auto relative z-20 mt-4 px-4 sm:px-0">
                    <a href="#supply" className="w-full sm:w-auto inline-flex items-center justify-center gap-[12px] px-[30px] md:px-[40px] py-[15px] md:py-[18px] rounded-full font-black uppercase tracking-[2px] text-[0.85rem] md:text-[0.95rem] transition-all duration-500 bg-grad-pure text-white border-none shadow-[0_20px_40px_rgba(27,67,50,0.5)] hover:-translate-y-[8px] hover:shadow-[0_25px_50px_rgba(68,221,102,0.6)] pulse-anim">
                        Our Supply Network
                    </a>
                    <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-[12px] px-[30px] md:px-[40px] py-[15px] md:py-[18px] rounded-full font-black uppercase tracking-[2px] text-[0.85rem] md:text-[0.95rem] transition-all duration-500 bg-white/10 backdrop-blur-[10px] text-[var(--color-secondary)] border border-white/20 shadow-xl hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:-translate-y-[8px]">
                        Partner With Us
                    </a>
                </div>

            </div>
        </section>
    );
}
