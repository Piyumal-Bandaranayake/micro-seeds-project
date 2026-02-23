"use client";
import { useState, useEffect } from "react";

export default function Hero() {
    const slides = [
        {
            image: "/micro1.jpg",
            title: <>Leading Supplier <br /> In Microgreens.</>,
            description: "Discover the intense flavors and dense nutrition of our freshly harvested microgreens, grown sustainably and delivered directly to your doorstep."
        },
        {
            image: "/micro2.jpg",
            title: <>Providing Healthful <br /> Products.</>,
            description: "Dedicated to helping you combat nutritional deficiencies by seamlessly incorporating highly-nutritious alternatives into your daily diet."
        },
        {
            image: "/micro3.jpg",
            title: <>Premium Edible <br /> Flowers.</>,
            description: "Elevate your culinary creations with our exquisitely grown, vibrant edible flowers built to match and enhance your finest dishes."
        }
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0F2016]">
            {/* Background Image Carousel with Overlay */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlideIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-[#0F2016]/70 backdrop-brightness-75 mix-blend-multiply"></div>
            </div>

            {/* Content w-full instead of max-w-4xl constraint */}
            <div className="relative z-10 text-center px-4 w-full mx-auto mt-20 flex flex-col items-center">
                {/* Text Carousel */}
                <div className="relative w-full h-[400px] flex items-center justify-center">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out w-full max-w-[1200px] mx-auto ${index === currentSlideIndex
                                    ? "opacity-100 mt-0 pointer-events-auto"
                                    : "opacity-0 mt-8 pointer-events-none"
                                }`}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white font-bold leading-[1.1] mb-6 tracking-tight w-full whitespace-pre-wrap">
                                {slide.title}
                            </h1>

                            {/* Brush Stroke Decoration - Approximated visually */}
                            <div className="w-64 h-3 bg-[#E4B552] rounded-full mx-auto mb-8 opacity-90 transform -rotate-1 hidden md:block"></div>

                            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed w-full px-4 font-light">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
