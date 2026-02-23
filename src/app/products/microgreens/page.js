import Navbar from "@/components/Navbar";
import { storeCategories } from "@/data/storeData";
import { Leaf } from "lucide-react";

export default function MicrogreensPage() {
    const data = storeCategories.find(c => c.id === "microgreens");

    return (
        <main className="min-h-screen bg-[#F5F8F6] relative">
            <Navbar solid={true} />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-8 bg-[#0F2016] text-white overflow-hidden">
                <Leaf className="absolute top-10 right-10 text-[#4ade80] opacity-10 w-96 h-96 rotate-45 z-0 pointer-events-none" strokeWidth={1} />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#E4B552]">
                        {data.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
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
