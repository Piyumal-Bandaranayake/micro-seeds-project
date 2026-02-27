"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, HeartPulse, ShoppingCart, Sparkles, ChevronRight } from "lucide-react";

export default function Explanation() {
    const images = [
        { src: "/micro1.jpg", alt: "Freshly harvested organic microgreens in Sri Lanka" },
        { src: "/i2.jpg", alt: "Premium organic microgreens ready for supermarket distribution" },
        { src: "/i5.jpg", alt: "Vibrant and nutrient-dense microgreen leaves" },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            title: "What are Microgreens?",
            desc: "The 'Super-Plants' of the future. Tiny, young vegetable greens that are harvested just after the first true leaves have developed.",
            icon: <Leaf className="text-[var(--color-primary-vibrant)]" size={24} />,
            color: "bg-emerald-500/10"
        },
        {
            title: "Why Use Them?",
            desc: "Beyond being a gourmet garnish, they add intense flavor, vibrant color, and unique textures to any culinary masterpiece.",
            icon: <Sparkles className="text-amber-500" size={24} />,
            color: "bg-amber-500/10"
        },
        {
            title: "Health Benefits",
            desc: "Powerhouse of nutrition. Research shows they contain up to 40 times higher nutrient concentrations than mature vegetables.",
            icon: <HeartPulse className="text-red-500" size={24} />,
            color: "bg-red-500/10"
        },
        {
            title: "How to Buy?",
            desc: "Find us at major supermarket chains like Food City or order direct for premium bulk supplies for luxury hotels & restaurants.",
            icon: <ShoppingCart className="text-blue-500" size={24} />,
            color: "bg-blue-500/10"
        }
    ];

    return (
        <section className="py-[100px] px-[8%] bg-white relative overflow-hidden" id="explanation">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

                {/* Left Side: Content */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <span className="text-[var(--color-primary-light)] font-black text-[0.9rem] uppercase tracking-[4px] block">
                            Nature's Finest Superfood
                        </span>
                        <h2 className="text-[3rem] md:text-[3.5rem] font-[var(--font-serif)] font-black leading-[1.1] text-[var(--color-primary)]">
                            Small in Size, <span className="text-grad-pure">Giant in Impact</span>
                        </h2>
                        <p className="text-[1.1rem] text-gray-600 leading-relaxed font-medium max-w-[600px]">
                            Discover the secret of gourmet chefs and nutritionists worldwide. Our microgreens are grown in controlled environments to ensure peak potency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="group p-6 rounded-[30px] bg-[var(--color-light)] border-[3px] border-[var(--color-primary-vibrant)]/50 transition-all duration-400 hover:border-[var(--color-primary-vibrant)] hover:bg-white hover:shadow-strong">
                                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-[1.2rem] font-black text-[var(--color-primary)] mb-2">{feature.title}</h4>
                                <p className="text-[0.95rem] text-gray-500 leading-normal">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <Link href="/products" className="inline-flex items-center justify-center gap-[12px] px-[40px] py-[18px] rounded-full font-black uppercase tracking-[2px] text-[0.95rem] transition-all duration-500 bg-grad-pure text-white border-none shadow-[0_20px_40px_rgba(27,67,50,0.3)] hover:-translate-y-[8px] hover:shadow-[0_25px_50px_rgba(68,221,102,0.4)] group w-max mt-6">
                        Explore Product <ChevronRight size={20} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                {/* Right Side: Slideshow */}
                <div className="relative order-1 lg:order-2">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-grad-pure rounded-full blur-[80px] opacity-20"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[var(--color-secondary)] rounded-full blur-[100px] opacity-10"></div>

                    <div className="relative aspect-square md:aspect-[4/5] rounded-[50px] overflow-hidden shadow-strong border-[8px] border-[var(--color-primary-vibrant)]/20 group">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${idx === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
                                    }`}
                            />
                        ))}

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Image Counter Overlay */}
                        <div className="absolute bottom-10 left-10 flex gap-2">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentImage ? "w-8 bg-[var(--color-primary-vibrant)]" : "w-2 bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[30px] shadow-strong flex items-center gap-4 animate-bounce hover:animation-pause cursor-pointer z-10 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-grad-pure flex items-center justify-center text-white font-black">40x</div>
                        <div>
                            <p className="text-[0.8rem] font-bold text-gray-400 uppercase tracking-tighter">Nutrient Density</p>
                            <p className="text-[1rem] font-black text-[var(--color-primary)]">More Vitamins</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
