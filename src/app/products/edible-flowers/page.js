import Navbar from "@/components/Navbar";
import { storeCategories } from "@/data/storeData";
import { Leaf } from "lucide-react";

export default function EdibleFlowersPage() {
    const data = storeCategories.find(c => c.id === "edible-flowers");

    return (
        <main className="min-h-screen bg-[var(--color-light)] relative">
            
            {/* Header Section */}
            <section className="relative pt-[180px] pb-[80px] px-[8%] text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/i5.jpg" alt="Edible Flowers Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-grad-nav opacity-90"></div>
                </div>

                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-10 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-20 text-center">
                    <h1 className="text-[4rem] md:text-[5rem] font-[var(--font-serif)] font-[800] text-[var(--color-secondary)]">
                        {data.name}
                    </h1>
                </div>
            </section>

            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-[2.5rem] shadow-xl p-12 text-center border border-gray-100">
                    <h2 className="text-3xl font-serif font-bold text-[#0F2016] mb-6">Coming Soon</h2>
                    <p className="text-gray-600">Our vast collection of {data.name.toLowerCase()} is currently being populated directly from our farm. Check back soon for our full inventory.</p>
                </div>
            </section>
        </main>
    );
}
