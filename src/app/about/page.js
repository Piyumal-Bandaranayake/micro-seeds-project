import Navbar from "@/components/Navbar";
import { Leaf, Eye, Target, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F5F8F6] relative">
            <Navbar solid={true} />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-8 bg-[#0F2016] text-white overflow-hidden">
                <Leaf className="absolute top-10 right-10 text-[#4ade80] opacity-10 w-96 h-96 rotate-45 z-0 pointer-events-none" strokeWidth={1} />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#E4B552]">
                        About Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We are an innovative agriculture company focused on delivering the highest quality organic live microgreens to our customers.
                    </p>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto relative">
                <Leaf className="absolute bottom-10 left-[-5%] text-[#4ade80] opacity-10 w-64 h-64 -rotate-12 z-0 pointer-events-none" strokeWidth={1} />
                <div className="grid md:grid-cols-2 gap-16 relative z-10">

                    {/* Vision Card */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-20 h-20 bg-[#f0f8f2] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#E4B552] transition-colors duration-300">
                            <Eye className="w-10 h-10 text-[#2b5837] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-[#0F2016] mb-6">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We envision creating a global community and offering a highly nutritious alternative to traditional leafy greens.
                            Our vision is to cultivate a healthier future generation by prioritizing nutritious alternatives that offer up to 40 times more vitamins.
                            We aim to lead the way in health and wellness through our innovative vertical farming solutions.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-20 h-20 bg-[#f0f8f2] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#E4B552] transition-colors duration-300">
                            <Target className="w-10 h-10 text-[#2b5837] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h2 className="text-4xl font-serif font-bold text-[#0F2016] mb-6">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our mission is to help individuals combat nutritional deficiencies by incorporating microgreens into their diets, ultimately enhancing health and wellbeing.
                            We are committed to delivering the highest quality organic live microgreens, naturally grown with verified non-GMO seeds, to improve diabetes management, blood pressure, cholesterol levels, and cardiovascular health. Furthermore, we commit to conserving natural resources through the proper use of water, minimal waste, and a low carbon footprint.
                        </p>
                    </div>

                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-8 bg-white relative">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-sm font-bold text-[#E4B552] uppercase tracking-widest block mb-4">Leadership</span>
                    <h2 className="text-5xl font-serif font-bold text-[#0F2016] mb-16">Meet Our Team</h2>

                    <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">

                        {/* CEO Card */}
                        <div className="group text-center">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full border-[8px] border-[#f0f8f2] shadow-lg group-hover:border-[#E4B552] transition-all duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                                    alt="CEO"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-[#0F2016] mb-2">John Doe</h3>
                            <p className="text-[#2b5837] font-semibold text-lg uppercase tracking-wider">Chief Executive Officer</p>
                        </div>

                        {/* Director of Marketing Card */}
                        <div className="group text-center">
                            <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full border-[8px] border-[#f0f8f2] shadow-lg group-hover:border-[#E4B552] transition-all duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                                    alt="Director of Marketing"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-[#0F2016] mb-2">Jane Smith</h3>
                            <p className="text-[#2b5837] font-semibold text-lg uppercase tracking-wider">Director of Marketing</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
