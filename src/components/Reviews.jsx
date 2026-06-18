"use client";
import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { supabase } from "@/data/supabaseClient";

export default function Reviews() {
    const staticReviews = [
        {
            name: "Chef Dilhan Senanayake",
            role: "Executive Chef",
            company: "Jetwing Hotels",
            rating: 5,
            text: "Microgreens Lanka has completely transformed our culinary presentation. The quality, freshness, and vibrant colors of the edible flowers and microgreens are consistently world-class. Absolutely the best supplier in Sri Lanka.",
            imageInitials: "DS"
        },
        {
            name: "Dr. Priyantha Jayasekara",
            role: "Nutrition Specialist",
            company: "Colombo Clinic",
            rating: 5,
            text: "I highly recommend the broccoli and sunflower microgreens from Microgreens Lanka. They are incredibly nutrient-dense, 100% organic, and grown under strict hygienic standards. A perfect addition to a healthy lifestyle.",
            imageInitials: "PJ"
        },
        {
            name: "Anoma Perera",
            role: "Loyal Home Customer",
            company: "Kandy",
            rating: 5,
            text: "Finding fresh, organic microgreens was so difficult until I found Microgreens Lanka. Their home delivery is extremely reliable, and the packaging keeps the greens fresh for days. My family loves them!",
            imageInitials: "AP"
        },
        {
            name: "Kasun Rajapaksha",
            role: "Founder",
            company: "FitLife Cafe, Negombo",
            rating: 5,
            text: "Our customers love the wheatgrass shots and radish microgreens. The taste is incredibly fresh and crisp. Exceptional customer service and prompt delivery every single time.",
            imageInitials: "KR"
        },
        {
            name: "Sanduni Wickramasinghe",
            role: "Category Sourcing Manager",
            company: "Keells Supermarkets",
            rating: 5,
            text: "A highly reliable partner with GAP and GMP certifications. Microgreens Lanka has consistently met our high standards for freshness, quality, and volume. Our customers absolutely love their products.",
            imageInitials: "SW"
        },
        {
            name: "Dr. Thusitha Fernando",
            role: "Ayurvedic Practitioner",
            company: "Colombo Wellness",
            rating: 5,
            text: "The organic wheatgrass and pea shoots from Microgreens Lanka are of superior quality. Excellent natural source of enzymes and vitamins. Highly recommended for daily detoxification.",
            imageInitials: "TF"
        }
    ];

    const [dbReviews, setDbReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from("reviews")
                .select("*")
                .eq("approved", true)
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching reviews from Supabase:", error.message);
            } else if (data) {
                setDbReviews(data);
            }
        } catch (err) {
            console.error("Failed to query reviews:", err);
        }
    };

    useEffect(() => {
        fetchReviews();

        // Listen for locally added reviews to trigger immediate updates
        const handleReviewAdded = () => {
            fetchReviews();
        };

        window.addEventListener("review-added", handleReviewAdded);
        return () => {
            window.removeEventListener("review-added", handleReviewAdded);
        };
    }, []);

    // Helper to get initials
    const getInitials = (review) => {
        if (review.imageInitials) return review.imageInitials;
        if (review.image_initials) return review.image_initials;
        if (review.name) {
            return review.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
        }
        return "U";
    };

    // Combine static and dynamic reviews (dynamic/latest reviews first)
    const combinedReviews = [...dbReviews, ...staticReviews];

    // Duplicate list for infinite marquee slide show effect
    const marqueeReviews = [...combinedReviews, ...combinedReviews];

    return (
        <section className="py-[100px] bg-[var(--color-light)] overflow-hidden relative border-t border-[var(--color-primary-light)]/10">
            {/* Background elements */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-primary-vibrant)]/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-primary-light)]/5 blur-[80px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-[8%] mb-[50px] text-center relative z-10">
                <span className="text-[var(--color-primary-light)] font-[800] text-[0.9rem] uppercase tracking-[3px] block mb-[15px]">
                    Client Testimonials
                </span>
                <h2 className="text-[3rem] md:text-[3.5rem] text-[var(--color-primary)] font-[var(--font-serif)] leading-[1.2]">
                    What Our Sri Lankan Clients Say
                </h2>
                <p className="text-[1.1rem] md:text-[1.2rem] text-[var(--color-primary-light)]/80 mt-[15px] max-w-[650px] mx-auto font-[var(--font-sans)] leading-[1.6]">
                    Trusted by executive chefs, health professionals, supermarkets, and health-conscious families across Sri Lanka.
                </p>
            </div>

            {/* Slide Show Bar (Marquee container) */}
            <div className="relative w-full overflow-hidden py-10 z-10 select-none">
                {/* Left & Right fading overlays for premium depth effect */}
                <div className="absolute left-0 top-0 bottom-0 w-[8%] md:w-[15%] bg-gradient-to-r from-[var(--color-light)] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-[8%] md:w-[15%] bg-gradient-to-l from-[var(--color-light)] to-transparent z-20 pointer-events-none" />

                {/* Testimonial Track */}
                <div className="flex gap-[30px] w-max animate-slide-show hover:[animation-play-state:paused] cursor-pointer">
                    {marqueeReviews.map((review, index) => (
                        <div
                            key={`${review.id || 'static'}-${index}`}
                            className="w-[380px] md:w-[450px] bg-white/80 backdrop-blur-[10px] rounded-[30px] p-[35px] border border-white/60 shadow-[0_15px_35px_rgba(27,67,50,0.06)] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(27,67,50,0.12)] hover:border-[var(--color-primary-vibrant)]/30 group"
                        >
                            <div>
                                {/* Rating and Quote Icon */}
                                <div className="flex justify-between items-center mb-[20px]">
                                    <div className="flex gap-[4px]">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-[1.2rem] h-[1.2rem] fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                                            />
                                        ))}
                                    </div>
                                    <Quote className="w-[2.2rem] h-[2.2rem] text-[var(--color-primary-vibrant)]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                                </div>

                                {/* Review Text */}
                                <p className="text-[1.05rem] text-[var(--color-primary)]/90 leading-[1.6] mb-[25px] font-[var(--font-sans)] italic font-[400] relative">
                                    "{review.text}"
                                </p>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center gap-[15px] border-t border-[var(--color-primary-light)]/5 pt-[20px]">
                                <div className="w-[50px] h-[50px] rounded-full bg-grad-pure text-white flex items-center justify-center font-[800] text-[1.1rem] shadow-[0_8px_16px_rgba(68,221,102,0.2)]">
                                    {getInitials(review)}
                                </div>
                                <div>
                                    <h4 className="text-[1.15rem] font-bold text-[var(--color-primary)] font-[var(--font-sans)] leading-tight">
                                        {review.name}
                                    </h4>
                                    <p className="text-[0.9rem] text-[var(--color-primary-light)] font-semibold font-[var(--font-sans)]">
                                        {review.role || "Customer"}{review.company ? `, ${review.company}` : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
