export default function About() {
    return (
        <section className="py-24 bg-[#F9F6F0] text-gray-800" id="about">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 w-full">
                    <img
                        src="https://images.unsplash.com/photo-1545241047-6083a36a1c08?q=80&w=2000&auto=format&fit=crop"
                        alt="Beautiful Houseplants"
                        className="rounded-3xl shadow-2xl w-full h-[550px] object-cover border-4 border-white"
                    />
                </div>
                <div className="flex-1 space-y-6">
                    <span className="text-sm font-bold text-[#E4B552] uppercase tracking-widest block mb-2">About Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F2016] leading-tight">
                        We Grow Microgreens <br /> To Nourish You.
                    </h2>
                    <div className="w-20 h-1 bg-[#2B5A3C] rounded-full my-6"></div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Adding microgreens to your diet is more than just a culinary garnish—it's about infusing your meals
                        with vibrant flavor and incredible nutrition. We meticulously grow our microgreens
                        to ensure you receive only the freshest, nutrient-packed greens.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg pb-4">
                        With a deep passion for sustainable agriculture, our team is dedicated to cultivating
                        the highest quality microgreens to elevate your everyday cooking and well-being.
                    </p>
                    <button className="bg-[#2B5A3C] hover:bg-[#1e402a] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#2B5A3C]/20">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
}
