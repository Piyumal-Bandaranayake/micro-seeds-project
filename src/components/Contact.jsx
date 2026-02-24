import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-[120px] px-[8%] bg-transparent text-[var(--color-primary)] relative" id="contact">
            <div className="max-w-[900px] mx-auto relative z-10">
                <div className="text-center mb-[60px]">
                    <span className="text-[0.9rem] font-[800] text-[var(--color-primary-light)] uppercase tracking-[3px] block mb-4">Get In Touch</span>
                    <h2 className="text-[3.5rem] font-[var(--font-serif)] font-[800] leading-[1.2] text-[var(--color-primary)] mb-6">
                        Partner With Us For Your Next Harvest
                    </h2>
                    <p className="text-[1.1rem] text-[var(--color-primary-light)] leading-[1.7] font-[var(--font-sans)] max-w-[700px] mx-auto">
                        Whether you are a supermarket general manager looking to order bulk supplies, or a luxury hotel head chef seeking precision quality garnish, our island-wide logistics are ready to serve you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    <a href="https://wa.me/94766177948" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center text-center gap-[20px] p-[40px] bg-white rounded-[30px] shadow-soft border border-[rgba(0,0,0,0.05)] hover:-translate-y-[8px] transition-all duration-500 no-underline">
                        <div className="w-[80px] h-[80px] bg-[var(--color-light)] rounded-full flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                            <Phone size={32} />
                        </div>
                        <div>
                            <h4 className="font-[800] text-[1.3rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-2">Call Us</h4>
                            <p className="text-[1rem] text-[var(--color-primary-light)]">+94 766 177 948</p>
                        </div>
                    </a>

                    <div className="group flex flex-col items-center text-center gap-[20px] p-[40px] bg-white rounded-[30px] shadow-soft border border-[rgba(0,0,0,0.05)] hover:-translate-y-[8px] transition-all duration-500">
                        <div className="w-[80px] h-[80px] bg-[var(--color-light)] rounded-full flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                            <Mail size={32} />
                        </div>
                        <div>
                            <h4 className="font-[800] text-[1.3rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-2">Email Us</h4>
                            <p className="text-[1rem] text-[var(--color-primary-light)]">hello@microgreenslanka.lk</p>
                        </div>
                    </div>

                    <div className="group flex flex-col items-center text-center gap-[20px] p-[40px] bg-white rounded-[30px] shadow-soft border border-[rgba(0,0,0,0.05)] hover:-translate-y-[8px] transition-all duration-500">
                        <div className="w-[80px] h-[80px] bg-[var(--color-light)] rounded-full flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <h4 className="font-[800] text-[1.3rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-2">Visit Us</h4>
                            <p className="text-[1rem] text-[var(--color-primary-light)]">Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
