import { productsData } from "@/data/products";
import { Star, Leaf } from "lucide-react";
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
                        Most Popular Microgreens
                    </h2>
                    <div className="w-16 h-1 bg-[#2A8742] rounded-full mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-8 md:gap-16">
                    {productsData.slice(0, 2).map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-[2rem] mb-4 aspect-[4/5] bg-[#F6F6F6] shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                                />
                                <div className="absolute top-4 left-4 bg-white text-[0.7rem] font-bold px-4 py-1.5 rounded-full text-[#102B19] shadow-sm">
                                    {product.category}
                                </div>
                            </div>
                            <div className="flex justify-between items-start px-1 mt-5">
                                <div className="flex flex-col">
                                    <h3 className="font-serif font-bold text-[1.35rem] text-[#0F2016] mb-1 leading-tight group-hover:text-[#2A8742] transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-1.5 mt-1 text-[#E4B552]">
                                        <Star size={14} fill="currentColor" className="opacity-90" />
                                        <span className="text-sm font-medium text-gray-500">{product.rating}</span>
                                    </div>
                                </div>
                                <span className="font-bold text-lg text-[#144A29] pt-1">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/products">
                        <button className="bg-[#E4B552] hover:bg-[#c99f46] text-[#0F2016] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#E4B552]/30">
                            Explore More Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
