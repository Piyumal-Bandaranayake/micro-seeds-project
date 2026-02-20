import { Play, PhoneCall } from "lucide-react";

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
                    Leafy Beauties For <br /> Every Space.
                </h1>

                {/* Brush Stroke Decoration - Approximated visually */}
                <div className="w-64 h-3 bg-[#E4B552] rounded-full mx-auto mb-8 opacity-90 transform -rotate-1 hidden md:block"></div>

                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                    ullamcorper mattis, pulvinar dapibus leo.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                    <button className="flex items-center gap-3 border border-white/40 hover:border-white text-white px-6 py-3 rounded-full transition-all hover:bg-white/10">
                        <span className="text-sm font-medium">Watch Our Video</span>
                        <div className="bg-white text-black rounded-full p-1.5 flex items-center justify-center">
                            <Play size={14} fill="currentColor" />
                        </div>
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="bg-[#2B5A3C] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                            <PhoneCall size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-0.5">Call Us Now:</p>
                            <p className="text-white font-bold text-lg">+123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
