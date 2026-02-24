import Navbar from "@/components/Navbar";
import { storeCategories } from "@/data/storeData";
import { microgreensProducts } from "@/data/microgreensProducts";
import { Leaf } from "lucide-react";

export default function MicrogreensPage() {
    const data = storeCategories.find(c => c.id === "microgreens");

    return (
        <main className="min-h-screen bg-[var(--color-light)] relative">
            
            {/* Header Section */}
            <section className="relative pt-[120px] md:pt-[180px] pb-[50px] md:pb-[80px] px-[5%] md:px-[8%] text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/micro3.jpg" alt="Microgreens Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-grad-nav opacity-90"></div>
                </div>

                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-10 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-20 text-center">
                    <h1 className="text-[2.2rem] md:text-[4rem] lg:text-[5rem] font-[var(--font-serif)] font-[800] text-[var(--color-secondary)]">
                        {data.name}
                    </h1>
                </div>
            </section>

            <section className="py-12 md:py-24 px-[5%] md:px-[8%] relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-grad-pure opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {microgreensProducts.map((product, idx) => (
                        <div key={idx} className="group relative bg-white rounded-[30px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(27,67,50,0.12)] transition-all duration-500 hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                {/* Bottom Gradient Overlay for Text Readability if needed, though name is below */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Info Container */}
                            <div className="p-8 text-center bg-white relative z-10">
                                <h3 className="text-[1.3rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] leading-tight group-hover:text-[var(--color-primary-vibrant)] transition-colors">
                                    {product.name}
                                </h3>
                                <div className="w-[40px] h-[3px] bg-grad-pure mx-auto mt-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
