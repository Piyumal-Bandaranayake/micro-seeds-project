import Navbar from "@/components/Navbar";
import { storeCategories } from "@/data/storeData";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[var(--color-light)] relative">
            
            {/* Header Section */}
            <section className="relative pt-[180px] pb-[80px] px-[8%] text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/i3.jpg" alt="Products Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-grad-nav opacity-90"></div>
                </div>

                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-10 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-20 text-center">
                    <h1 className="text-[4rem] md:text-[5rem] font-[var(--font-serif)] font-[800] mb-[20px] text-[var(--color-secondary)]">
                        Our Collections
                    </h1>
                    <p className="text-[1.2rem] text-white/80 max-w-[800px] mx-auto leading-[1.7] font-[var(--font-sans)]">
                        Discover our range of premium, organic microgreens grown with care. From nutrient-dense spicy varieties to mild, fresh greens, find the perfect addition to your wellness journey.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 relative z-10 py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-12 md:gap-16">
                    {storeCategories.map((category) => (
                        <div key={category.id} className="group bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                            <div className="relative w-full aspect-[4/3] bg-[#F6F6F6] overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                                />
                                <div className="absolute top-4 left-4 bg-[#E4B552] text-[0.75rem] font-bold px-4 py-1.5 rounded-full text-[#0F2016] shadow-md uppercase tracking-wide">
                                    Organic
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-3xl font-serif font-bold text-[#0F2016] mb-4 group-hover:text-[#2A8742] transition-colors">
                                    {category.name}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {category.description}
                                </p>

                                <ul className="mb-8 space-y-2">
                                    {category.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                                            <span className="w-1.5 h-1.5 bg-[#2A8742] rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={category.link} className="inline-flex w-full">
                                    <button className="w-full flex items-center justify-center gap-3 bg-[#0F2016] hover:bg-[#1C3A28] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl group/btn">
                                        Explore More
                                        <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Section */}
            <section className="pb-12 md:pb-24 px-[5%] md:px-[8%] relative">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col items-end text-right mb-12">
                        <span className="text-[0.8rem] font-bold text-[var(--color-primary-vibrant)] uppercase tracking-[3px] mb-2">Visual Journey</span>
                        <h2 className="text-[1.8rem] md:text-[2.8rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] leading-tight">
                            Fresh From <span className="text-grad-pure">Our Farm</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
                        {/* m1 - Tall on Left */}
                        <div className="col-span-1 row-span-2 md:row-span-3 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m1.jpeg" alt="Farm Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m5 - Large Main Square-ish */}
                        <div className="col-span-1 md:col-span-2 row-span-2 md:row-span-2 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m5.jpeg" alt="Microgreens Growth" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m2 - Small */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m2.jpeg" alt="Harvesting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m4 - Small */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m4.jpeg" alt="Fresh Greens" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m6 - Wide */}
                        <div className="col-span-2 md:col-span-2 row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m6.jpeg" alt="Farm View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m7 - Small */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m7.jpeg" alt="Organic Soil" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m8 - Small */}
                        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m8.jpeg" alt="Sustainability" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>

                        {/* m9 - Tallish */}
                        <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 relative group overflow-hidden rounded-[20px] md:rounded-[30px] shadow-lg">
                            <img src="/m9.jpeg" alt="Detailed Leaves" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
