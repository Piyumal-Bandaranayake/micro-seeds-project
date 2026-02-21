"use client";
import { useState, useEffect } from "react";

export default function Hero() {
    const images = [
        "/micro1.jpg",
        "/micro2.jpg",
        "/micro3.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0F2016]">
            {/* Background Image Carousel with Overlay */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-[#0F2016]/70 backdrop-brightness-75 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-serif text-white font-semibold leading-tight mb-4">
                    Fresh Microgreens <br /> For Every Meal.
                </h1>

                {/* Brush Stroke Decoration - Approximated visually */}
                <div className="w-64 h-3 bg-[#E4B552] rounded-full mx-auto mb-8 opacity-90 transform -rotate-1 hidden md:block"></div>

                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                    Discover the intense flavors and dense nutrition of our freshly harvested microgreens,
                    grown sustainably and delivered directly to your doorstep.
                </p>
            </div>
        </section>
    );
}
