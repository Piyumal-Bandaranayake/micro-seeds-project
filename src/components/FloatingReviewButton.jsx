"use client";
import React, { useState } from "react";
import { MessageSquare, Star, X, CheckCircle } from "lucide-react";
import { supabase } from "@/data/supabaseClient";

export default function FloatingReviewButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [rating, setRating] = useState(5);
    const [text, setText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            setErrorMsg("Please fill in both Name and Review fields.");
            return;
        }

        if (!supabase) {
            setErrorMsg("Supabase connection is not initialized. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your hosting environment.");
            return;
        }

        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const initials = name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

            const { error } = await supabase
                .from("reviews")
                .insert([
                    {
                        name: name.trim(),
                        role: role.trim() || null,
                        company: company.trim() || null,
                        rating,
                        text: text.trim(),
                        image_initials: initials,
                        approved: true // Set to true for immediate display
                    }
                ]);

            if (error) {
                console.error("Supabase insert error:", error);
                setErrorMsg("Failed to submit review: " + error.message);
            } else {
                setSubmitSuccess(true);
                // Dispatch event so the Reviews component re-fetches instantly
                window.dispatchEvent(new Event("review-added"));
                // Reset form
                setTimeout(() => {
                    handleClose();
                }, 2000);
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setErrorMsg("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setName("");
        setRole("");
        setCompany("");
        setRating(5);
        setText("");
        setSubmitSuccess(false);
        setErrorMsg("");
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-[30px] right-[30px] z-[999] bg-grad-pure text-white p-[18px] rounded-full shadow-[0_10px_30px_rgba(68,221,102,0.4)] border border-white/20 transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:scale-110 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(68,221,102,0.6)] group cursor-pointer"
                title="Write a review"
                aria-label="Write a review"
            >
                <div className="flex items-center justify-center relative">
                    <MessageSquare className="w-[1.6rem] h-[1.6rem] transition-transform duration-500 group-hover:rotate-12" />
                    <span className="absolute -top-[15px] -right-[15px] flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-secondary)]"></span>
                    </span>
                </div>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-[8px] flex items-center justify-center z-[1000] p-4 transition-all duration-300">
                    {/* Modal Content Box */}
                    <div className="bg-white rounded-[32px] w-full max-w-[550px] p-[30px] md:p-[40px] shadow-[0_25px_60px_rgba(8,28,21,0.2)] border border-[var(--color-primary-light)]/10 relative overflow-hidden transition-all duration-500 transform scale-100 max-h-[90vh] overflow-y-auto">
                        
                        {/* Background subtle glow */}
                        <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] rounded-full bg-[var(--color-primary-vibrant)]/5 blur-[50px] pointer-events-none" />

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-[25px] right-[25px] text-[var(--color-primary-light)]/60 hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] p-2 rounded-full transition-all duration-300 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-[1.5rem] h-[1.5rem]" />
                        </button>

                        {submitSuccess ? (
                            /* Success State */
                            <div className="flex flex-col items-center justify-center text-center py-[40px]">
                                <CheckCircle className="w-[5rem] h-[5rem] text-[var(--color-primary-vibrant)] mb-[20px] drop-shadow-[0_4px_10px_rgba(68,221,102,0.2)] animate-bounce" />
                                <h3 className="text-[2.2rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-[10px]">
                                    Thank You!
                                </h3>
                                <p className="text-[1.1rem] text-[var(--color-primary-light)]/80 max-w-[350px]">
                                    Your review has been successfully submitted and added to the testimonials slideshow.
                                </p>
                            </div>
                        ) : (
                            /* Form State */
                            <div>
                                <div className="mb-[25px]">
                                    <span className="text-[var(--color-primary-light)] font-[800] text-[0.85rem] uppercase tracking-[2px] block mb-[5px]">
                                        Share Your Experience
                                    </span>
                                    <h3 className="text-[2.2rem] text-[var(--color-primary)] font-[var(--font-serif)] leading-tight">
                                        Write a Review
                                    </h3>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                                    {/* Name Input */}
                                    <div className="flex flex-col gap-[8px]">
                                        <label className="text-[0.95rem] font-bold text-[var(--color-primary)]" htmlFor="rev-name">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="rev-name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name (e.g., Priyantha Jayasekara)"
                                            className="w-full px-[20px] py-[14px] rounded-[15px] border border-[var(--color-primary-light)]/20 focus:border-[var(--color-primary-vibrant)] focus:outline-none bg-[var(--color-light)]/40 font-[var(--font-sans)] text-[var(--color-primary)] transition-all duration-300"
                                        />
                                    </div>

                                    {/* Grid for Role & Location/Company */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                                        {/* Role */}
                                        <div className="flex flex-col gap-[8px]">
                                            <label className="text-[0.95rem] font-bold text-[var(--color-primary)]" htmlFor="rev-role">
                                                Role / Profession
                                            </label>
                                            <input
                                                id="rev-role"
                                                type="text"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                placeholder="e.g., Executive Chef, Home Cook"
                                                className="w-full px-[20px] py-[14px] rounded-[15px] border border-[var(--color-primary-light)]/20 focus:border-[var(--color-primary-vibrant)] focus:outline-none bg-[var(--color-light)]/40 font-[var(--font-sans)] text-[var(--color-primary)] transition-all duration-300"
                                            />
                                        </div>

                                        {/* Company/Location */}
                                        <div className="flex flex-col gap-[8px]">
                                            <label className="text-[0.95rem] font-bold text-[var(--color-primary)]" htmlFor="rev-company">
                                                Company / City
                                            </label>
                                            <input
                                                id="rev-company"
                                                type="text"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="e.g., Jetwing Hotels, Kandy"
                                                className="w-full px-[20px] py-[14px] rounded-[15px] border border-[var(--color-primary-light)]/20 focus:border-[var(--color-primary-vibrant)] focus:outline-none bg-[var(--color-light)]/40 font-[var(--font-sans)] text-[var(--color-primary)] transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Rating Selector */}
                                    <div className="flex flex-col gap-[8px]">
                                        <label className="text-[0.95rem] font-bold text-[var(--color-primary)]">
                                            Rating
                                        </label>
                                        <div className="flex gap-[8px] items-center py-2">
                                            {[1, 2, 3, 4, 5].map((starValue) => (
                                                <button
                                                    key={starValue}
                                                    type="button"
                                                    onClick={() => setRating(starValue)}
                                                    className="cursor-pointer transition-all duration-300 hover:scale-125 focus:outline-none"
                                                >
                                                    <Star
                                                        className={`w-[2rem] h-[2rem] ${
                                                            starValue <= rating
                                                                ? "fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                                                                : "text-gray-300"
                                                        }`}
                                                    />
                                                </button>
                                            ))}
                                            <span className="text-[1rem] font-bold text-[var(--color-primary-light)] ml-2">
                                                ({rating} out of 5)
                                            </span>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <div className="flex flex-col gap-[8px]">
                                        <label className="text-[0.95rem] font-bold text-[var(--color-primary)]" htmlFor="rev-text">
                                            Your Review <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="rev-text"
                                            required
                                            rows={4}
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            placeholder="Write your review about our premium microgreens..."
                                            className="w-full px-[20px] py-[14px] rounded-[15px] border border-[var(--color-primary-light)]/20 focus:border-[var(--color-primary-vibrant)] focus:outline-none bg-[var(--color-light)]/40 font-[var(--font-sans)] text-[var(--color-primary)] transition-all duration-300 resize-none"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {errorMsg && (
                                        <p className="text-red-500 text-[0.95rem] font-semibold">
                                            {errorMsg}
                                        </p>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-grad-pure text-white py-[16px] rounded-full no-underline font-[800] text-[1.1rem] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_10px_25px_rgba(68,221,102,0.3)] hover:scale-102 hover:shadow-[0_15px_35px_rgba(68,221,102,0.5)] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer mt-2 text-center"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Review"}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
