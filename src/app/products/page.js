import Navbar from "@/components/Navbar";
import { storeCategories } from "@/data/storeData";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[var(--color-light)] relative">
            
            {/* Header Section */}
            <section className="relative pt-[180px] pb-[80px] px-[8%] bg-grad-nav text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-0 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
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
        </main>
    );
}
