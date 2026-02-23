import { storeCategories } from "@/data/storeData";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Product() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="product">
            {/* Background floating leaves decoration */}
            <Leaf className="absolute top-40 left-[-2%] text-[#4ade80] opacity-20 w-56 h-56 rotate-12 z-0 pointer-events-none" strokeWidth={1} />
            <Leaf className="absolute bottom-20 right-[5%] text-[#4ade80] opacity-15 w-48 h-48 -rotate-45 z-0 pointer-events-none" strokeWidth={1.5} />
            <Leaf className="absolute top-1/4 right-[10%] text-[#4ade80] opacity-[0.08] w-72 h-72 rotate-90 z-0 pointer-events-none" strokeWidth={1} />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold text-[#E4B552] uppercase tracking-widest block mb-4">Our Store</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2016] mb-6">
                        Explore Our Collections
                    </h2>
                    <div className="w-16 h-1 bg-[#2A8742] rounded-full mx-auto"></div>
                </div>

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
        </section>
    );
}
