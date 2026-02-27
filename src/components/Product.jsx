"use client";
import { storeCategories } from "@/data/storeData";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Product() {
    return (
        <section className="py-[120px] px-[8%] bg-gradient-to-br from-[#1b4332] to-[#081c15] text-white relative overflow-hidden" id="products">
            <span className="text-[var(--color-primary-light)] font-[800] text-[0.9rem] uppercase tracking-[3px] block mb-[15px] text-center relative z-10">
                Our Collection
            </span>
            <h2 className="text-[3.5rem] text-center mb-[60px] text-white relative z-10 font-[var(--font-serif)]">
                Harvesting Excellence
            </h2>

            {/* Microgreens Rain Effect Background */}
            <div className="absolute inset-0 pointer-events-none z-[5] opacity-20 hidden md:block">
                {[...Array(15)].map((_, i) => (
                    <Leaf
                        key={i}
                        className={`absolute text-[var(--color-primary-vibrant)] animate-[leafRain_linear_infinite] opacity-60 drop-shadow-[0_0_5px_rgba(68,221,102,0.3)]`}
                        size={30}
                        style={{
                            left: `${Math.random() * 100}vw`,
                            animationDuration: `${10 + Math.random() * 15}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[minmax(250px,_350px)_minmax(250px,_350px)] gap-[25px] relative z-10">
                {/* Dynamically integrating Store Categories as the first items, followed by other gallery items */}
                {storeCategories.length > 0 && (
                    <div className="relative rounded-[20px] overflow-hidden cursor-pointer md:col-span-2 md:row-span-2 group">
                        <Link href={storeCategories[0].link}>
                            <img src={storeCategories[0].image || "/i2.jpg"} alt={storeCategories[0].name} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,67,50,0.85)] to-transparent flex flex-col justify-end p-[30px] opacity-0 transition-opacity duration-400 border-b-[5px] border-[var(--color-primary-vibrant)] group-hover:opacity-100">
                                <h3 className="text-[1.8rem] font-[var(--font-serif)] font-[800] mb-2">{storeCategories[0].name}</h3>
                                <p className="text-[1rem] font-[var(--font-sans)]">{storeCategories[0].description}</p>
                            </div>
                        </Link>
                    </div>
                )}

                {storeCategories.length > 1 && (
                    <div className="relative rounded-[20px] overflow-hidden cursor-pointer md:col-span-2 group">
                        <Link href={storeCategories[1].link}>
                            <img src={storeCategories[1].image || "/i3.jpg"} alt={storeCategories[1].name} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,67,50,0.85)] to-transparent flex flex-col justify-end p-[30px] opacity-0 transition-opacity duration-400 border-b-[5px] border-[var(--color-primary-vibrant)] group-hover:opacity-100">
                                <h3 className="text-[1.5rem] font-[var(--font-serif)] font-[800] mb-2">{storeCategories[1].name}</h3>
                                <p className="text-[1rem] font-[var(--font-sans)]">{storeCategories[1].description}</p>
                            </div>
                        </Link>
                    </div>
                )}

                <div className="relative rounded-[20px] overflow-hidden cursor-pointer md:col-span-1 group">
                    <img src="/i4.jpg" alt="Organic microgreens used as gourmet garnish by professional chefs" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1592398633346-60868f0514da?auto=format&fit=crop&q=80&w=1200"; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,67,50,0.85)] to-transparent flex flex-col justify-end p-[20px] opacity-0 transition-opacity duration-400 border-b-[5px] border-[var(--color-primary-vibrant)] group-hover:opacity-100">
                        <h3 className="text-[1.2rem] font-[var(--font-serif)] font-[800] mb-1">Gourmet Garnish</h3>
                        <p className="text-[0.9rem] font-[var(--font-sans)]">Elevate any dish.</p>
                    </div>
                </div>

                <div className="relative rounded-[20px] overflow-hidden cursor-pointer md:col-span-1 group">
                    <img src="/i5.jpg" alt="Vibrant and fresh organic radish microgreen leaves" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1606707335967-0c7f897621c4?auto=format&fit=crop&q=80&w=1200"; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,67,50,0.85)] to-transparent flex flex-col justify-end p-[20px] opacity-0 transition-opacity duration-400 border-b-[5px] border-[var(--color-primary-vibrant)] group-hover:opacity-100">
                        <h3 className="text-[1.2rem] font-[var(--font-serif)] font-[800] mb-1">Radish Greens</h3>
                        <p className="text-[0.9rem] font-[var(--font-sans)]">Vibrant colors.</p>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes leafRain {
                    0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { transform: translateY(110vh) translateX(100px) rotate(360deg); opacity: 0; }
                }
                `
            }} />
        </section>
    );
}
