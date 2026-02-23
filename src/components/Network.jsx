"use client";
import React from "react";
import { ShoppingBasket, Store, Hotel } from "lucide-react";

export default function Network() {
    const cards = [
        {
            title: "Food City Chain",
            description: "Dominating the retail landscape as the primary microgreens provider for the island's largest food house chains.",
            icon: <ShoppingBasket size={32} className="text-white" />,
            image: "/food.jpg",
        },
        {
            title: "Supermarket Network",
            description: "Exclusive supplier for premium supermarket outlets, ensuring daily freshness for health-conscious shoppers island-wide.",
            icon: <Store size={32} className="text-white" />,
            image: "/super.jpg",
        },
        {
            title: "Hotels & Restaurants",
            description: "The trusted partner for 5-star hotels and luxury restaurants, delivering the \"Gold Standard\" in culinary garnish.",
            icon: <Hotel size={32} className="text-white" />,
            image: "/resturent.jpg",
        }
    ];

    return (
        <section className="py-[120px] px-[8%] bg-white" id="supply">
            <span className="text-[var(--color-primary-light)] font-extrabold text-[0.9rem] uppercase tracking-[3px] block mb-[15px] text-center relative z-10">
                Leading Supply Network
            </span>
            <h2 className="text-[3.5rem] text-center mb-[60px] text-[var(--color-primary)] relative z-10 font-[var(--font-serif)]">
                The Nation's Choice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] relative z-10">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-0 rounded-[30px] text-left transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] border-[4px] border-transparent shadow-[0_12px_48px_rgba(27,67,50,0.3)] overflow-hidden flex flex-col group"
                        style={{
                            backgroundImage: "linear-gradient(white, white), var(--grad-border)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box"
                        }}
                    >
                        <div className="h-[200px] w-full overflow-hidden relative">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"; }}
                            />
                        </div>

                        <div className="p-[30px] flex-grow bg-white">
                            <div className="w-[60px] h-[60px] bg-grad-pure rounded-[15px] flex items-center justify-center -mt-[60px] ml-[20px] relative z-[5] shadow-[0_5px_15px_rgba(0,0,0,0.2)] border-[3px] border-white">
                                {card.icon}
                            </div>

                            <h3 className="text-[1.6rem] mb-[15px] text-[var(--color-primary)] font-[var(--font-serif)] mt-[15px]">
                                {card.title}
                            </h3>

                            <p className="text-[#555] text-[1.05rem] font-[var(--font-sans)]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
