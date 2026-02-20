export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
                    alt="Greenhouse Plants"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0F2016]/80 backdrop-brightness-75 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-serif text-white font-semibold leading-tight mb-4">
                    Fresh Microgreens <br /> For Every Meal.
                </h1>

                {/* Brush Stroke Decoration - Approximated visually */}
                <div className="w-64 h-3 bg-[#E4B552] rounded-full mx-auto mb-8 opacity-90 transform -rotate-1 hidden md:block"></div>

                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                    Discover the intense flavors and dense nutrition of our freshly harvested microgreens,
                    grown sustainably and delivered directly to your doorstep.
                </p>
            </div>
        </section>
    );
}
