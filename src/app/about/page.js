import { Leaf, Eye, Target, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F5F8F6] relative">

            {/* Header Section */}
            <section className="relative pt-[120px] md:pt-[180px] pb-[50px] md:pb-[80px] px-[5%] md:px-[8%] text-white overflow-hidden border-b-[4px] border-transparent" style={{ borderImage: "var(--grad-pure-green) 1" }}>
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/i2.jpg" alt="About Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-grad-nav opacity-90"></div>
                </div>

                <Leaf className="absolute top-10 right-10 text-[var(--color-primary-vibrant)] opacity-10 w-96 h-96 rotate-45 z-10 pointer-events-none" strokeWidth={1} />
                <div className="max-w-[1400px] mx-auto relative z-20 text-center">
                    <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-[var(--font-serif)] font-[800] mb-[20px] text-[var(--color-secondary)]">
                        About Us
                    </h1>
                    <p className="text-[1.2rem] text-white/80 max-w-[800px] mx-auto leading-[1.7] font-[var(--font-sans)]">
                        We are an innovative agriculture company focused on delivering the highest quality organic live microgreens to our customers. Our dedication to quality and freshness defines everything we grow.
                    </p>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-[60px] md:py-[120px] px-[5%] md:px-[8%] relative overflow-hidden bg-white">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-grad-pure opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-secondary)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-[30px] md:gap-[50px] relative z-10">
                    
                    {/* Vision Card */}
                    <div className="group relative p-[3px] rounded-[40px] transition-all duration-500 hover:-translate-y-[10px]" style={{ background: "var(--grad-pure-green)" }}>
                        <div className="h-full bg-white rounded-[38px] p-[60px] flex flex-col items-start gap-[30px] shadow-[0_20px_60px_rgba(27,67,50,0.05)]">
                            <div className="w-[90px] h-[90px] rounded-[25px] bg-grad-nav flex items-center justify-center shadow-lg group-hover:rotate-[10deg] transition-all duration-500">
                                <Eye className="w-10 h-10 text-[var(--color-secondary)]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-[2.8rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] mb-4 leading-tight">
                                    Our <span className="text-grad-pure">Vision</span>
                                </h2>
                                <p className="text-[1.1rem] text-[var(--color-primary-light)] leading-relaxed font-medium">
                                    We envision creating a global community and offering a highly nutritious alternative to traditional leafy greens.
                                    Our focus is to cultivate a healthier future generation by prioritizing nutritious alternatives that offer up to 40 times more vitamins.
                                    We aim to lead the way in health and wellness through our innovative vertical farming solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group relative p-[3px] rounded-[40px] transition-all duration-500 hover:-translate-y-[10px]" style={{ background: "var(--grad-pure-green)" }}>
                        <div className="h-full bg-white rounded-[38px] p-[60px] flex flex-col items-start gap-[30px] shadow-[0_20px_60px_rgba(27,67,50,0.05)]">
                            <div className="w-[90px] h-[90px] rounded-[25px] bg-grad-nav flex items-center justify-center shadow-lg group-hover:rotate-[-10deg] transition-all duration-500">
                                <Target className="w-10 h-10 text-[var(--color-secondary)]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-[2.8rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] mb-4 leading-tight">
                                    Our <span className="text-grad-pure">Mission</span>
                                </h2>
                                <p className="text-[1.1rem] text-[var(--color-primary-light)] leading-relaxed font-medium">
                                    Our mission is to help individuals combat nutritional deficiencies by incorporating microgreens into their diets, ultimately enhancing health and wellbeing.
                                    We are committed to delivering the highest quality organic live microgreens, naturally grown with verified non-GMO seeds, to improve diabetes management, blood pressure, cholesterol levels, and cardiovascular health.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Team Section */}
            <section className="py-[60px] md:py-[120px] px-[5%] md:px-[8%] bg-[var(--color-light)] relative">
                <div className="max-w-[1400px] mx-auto text-center">
                    <div className="inline-flex items-center gap-[15px] mb-[20px] px-[25px] py-[10px] rounded-full bg-white shadow-sm border border-[var(--color-primary-vibrant)]/10">
                        <span className="w-[10px] h-[10px] rounded-full bg-grad-pure"></span>
                        <span className="text-[0.9rem] font-bold text-[var(--color-primary)] uppercase tracking-[3px]">Leadership</span>
                    </div>
                    <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] mb-[40px] md:mb-[80px] leading-tight">
                        Meet Our <span className="text-grad-pure">Experts</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[80px] max-w-[1100px] mx-auto">

                        {/* CEO Card */}
                        <div className="group relative flex flex-col items-center">
                            <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] mb-[25px] md:mb-[40px]">
                                {/* Decorative Ring */}
                                <div className="absolute -inset-[15px] rounded-full border-[2px] border-dashed border-[var(--color-primary-vibrant)]/20 animate-spin-slow group-hover:border-[var(--color-primary-vibrant)] transition-colors duration-700"></div>
                                
                                <div className="relative w-full h-full overflow-hidden rounded-full border-[10px] border-white shadow-[0_20px_50px_rgba(27,67,50,0.15)] group-hover:scale-[1.05] transition-all duration-700 ease-out">
                                    <img
                                        src="/ceo.jpeg"
                                        alt="CEO - K D Wijerathne"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                </div>
                            </div>
                            
                            <h3 className="text-[2rem] md:text-[2.2rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] mb-2 tracking-tight">K D Wijerathne</h3>
                            <div className="px-6 py-2 rounded-full bg-white shadow-md border border-[var(--color-primary-vibrant)]/10">
                                <p className="text-[var(--color-primary-vibrant)] font-bold text-[0.85rem] uppercase tracking-[2px]">CEO</p>
                            </div>
                        </div>

                        {/* Director of Marketing Card */}
                        <div className="group relative flex flex-col items-center">
                            <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] mb-[25px] md:mb-[40px]">
                                {/* Decorative Ring */}
                                <div className="absolute -inset-[15px] rounded-full border-[2px] border-dashed border-[var(--color-primary-vibrant)]/20 animate-spin-slow-reverse group-hover:border-[var(--color-primary-vibrant)] transition-colors duration-700"></div>
                                
                                <div className="relative w-full h-full overflow-hidden rounded-full border-[10px] border-white shadow-[0_20px_50px_rgba(27,67,50,0.15)] group-hover:scale-[1.05] transition-all duration-700 ease-out">
                                    <img
                                        src="/dom.jpeg"
                                        alt="Director Marketing - H M R N Kaldera"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-grad-nav opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            <h3 className="text-[2rem] md:text-[2.2rem] font-[var(--font-serif)] font-black text-[var(--color-primary)] mb-2 tracking-tight">H M R N Kaldera (Bsc)</h3>
                            <div className="px-6 py-2 rounded-full bg-white shadow-md border border-[var(--color-primary-vibrant)]/10">
                                <p className="text-[var(--color-primary-vibrant)] font-bold text-[0.85rem] uppercase tracking-[2px]">Director Marketing</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
