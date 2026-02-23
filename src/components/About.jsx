import { Leaf } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-24 bg-transparent text-gray-800 relative overflow-hidden" id="about">
            {/* Background floating leaves decoration */}
            <Leaf className="absolute top-10 left-[-5%] text-[#4ade80] opacity-20 w-48 h-48 -rotate-12 z-0 pointer-events-none" strokeWidth={1.5} />
            <Leaf className="absolute bottom-20 right-[-2%] text-[#4ade80] opacity-15 w-64 h-64 rotate-45 z-0 pointer-events-none" strokeWidth={1} />
            <Leaf className="absolute top-1/2 left-1/2 text-[#4ade80] opacity-[0.07] w-96 h-96 -rotate-45 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2" strokeWidth={1} />

            <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-16 relative z-10">

                {/* Image Section */}
                <div className="flex-1 w-full">
                    <img
                        src="/micro2.jpg"
                        alt="Microgreens growing"
                        className="rounded-[2.5rem] shadow-md w-full h-[600px] object-cover border-[12px] border-white"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4 lg:pl-10">
                    <span className="text-[0.8rem] font-bold text-[#E4B552] uppercase tracking-widest block mb-4">About Us</span>
                    <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#0F2016] leading-[1.15]">
                        We Grow<br />Microgreens<br />To Nourish You.
                    </h2>

                    <div className="w-16 h-1 bg-[#2b5837] rounded-full mt-6 mb-10"></div>

                    <p className="text-gray-600 leading-relaxed text-[1.1rem]">
                        Adding microgreens to your diet is more than just a culinary garnish—it's about infusing your meals
                        with vibrant flavor and incredible nutrition. We meticulously grow our microgreens
                        to ensure you receive only the freshest, nutrient-packed greens.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[1.1rem] pb-8 pt-4">
                        With a deep passion for sustainable agriculture, our team is dedicated to cultivating
                        the highest quality microgreens to elevate your everyday cooking and well-being.
                    </p>

                    <Link href="/about" className="inline-block bg-[#2b5837] hover:bg-[#1d4026] text-white font-bold px-8 py-4 rounded-full transition-all duration-300">
                        Discover More
                    </Link>
                </div>

            </div>
        </section>
    );
}
