import Navbar from "@/components/Navbar";
import { productsData } from "@/data/products";
import { Star } from "lucide-react";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24">
            <Navbar solid />

            <section className="py-24" id="all-products">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-[#E4B552] uppercase tracking-widest block mb-2">Our Full Collection</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2016]">
                            Explore All Microgreens
                        </h1>
                        <div className="w-20 h-1 bg-[#2B5A3C] rounded-full mx-auto my-6"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* We use existing products multiple times just to populate the page */}
                        {[...productsData, ...productsData].map((product, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-[#2B5A3C]">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif font-bold text-xl text-[#0F2016] mb-1 group-hover:text-[#2B5A3C] transition-colors">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-[#E4B552]">
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                                        </div>
                                    </div>
                                    <span className="font-bold text-lg text-[#2B5A3C]">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
