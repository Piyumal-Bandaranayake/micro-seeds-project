import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-[120px] px-[8%] bg-transparent text-[var(--color-primary)] relative" id="contact">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start relative z-10">
                <div className="space-y-[30px] lg:pr-[40px]">
                    <span className="text-[0.9rem] font-[800] text-[var(--color-primary-light)] uppercase tracking-[3px] block mb-2">Get In Touch</span>
                    <h2 className="text-[3.5rem] font-[var(--font-serif)] font-[800] leading-[1.2] text-[var(--color-primary)]">
                        Partner With Us For <br /> Your Next Harvest
                    </h2>

                    <p className="text-[1.1rem] text-[var(--color-primary-light)] leading-[1.7] mb-8 font-[var(--font-sans)]">
                        Whether you are a supermarket general manager looking to order bulk supplies, or a luxury hotel head chef seeking precision quality garnish, our island-wide logistics are ready to serve you.
                    </p>

                    <div className="space-y-[30px] pt-[20px]">
                        <div className="flex items-center gap-[25px] group cursor-pointer">
                            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[var(--color-primary-light)] shadow-soft border border-[rgba(0,0,0,0.05)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h4 className="font-[800] text-[1.4rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-1">Call Us</h4>
                                <p className="text-[1rem] text-[var(--color-primary-light)]">+94 11 234 5678</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[25px] group cursor-pointer">
                            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[var(--color-primary-light)] shadow-soft border border-[rgba(0,0,0,0.05)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h4 className="font-[800] text-[1.4rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-1">Email Us</h4>
                                <p className="text-[1rem] text-[var(--color-primary-light)]">hello@microgreenslanka.lk</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[25px] group cursor-pointer">
                            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[var(--color-primary-light)] shadow-soft border border-[rgba(0,0,0,0.05)] group-hover:bg-grad-pure group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-strong">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="font-[800] text-[1.4rem] text-[var(--color-primary)] font-[var(--font-serif)] mb-1">Visit Us</h4>
                                <p className="text-[1rem] text-[var(--color-primary-light)]">Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[40px] p-[40px] md:p-[50px] shadow-strong border border-[rgba(0,0,0,0.05)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[var(--color-accent)] rounded-full blur-[60px] -z-10 opacity-50"></div>
                    <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[var(--color-primary-vibrant)] rounded-full blur-[80px] -z-10 opacity-10"></div>

                    <h3 className="text-[2rem] font-[var(--font-serif)] font-[800] text-[var(--color-primary)] mb-[40px]">Send an Inquiry</h3>
                    <form className="space-y-[25px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
                            <div>
                                <label className="block text-[0.9rem] font-[600] text-[var(--color-primary)] mb-[10px]">First Name</label>
                                <input type="text" className="w-full bg-[var(--color-light)] border border-[rgba(0,0,0,0.05)] rounded-[15px] px-[20px] py-[15px] text-[var(--color-primary)] focus:outline-none focus:bg-white focus:border-[var(--color-primary-vibrant)] focus:ring-1 focus:ring-[var(--color-primary-vibrant)] transition-colors text-[1rem]" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-[0.9rem] font-[600] text-[var(--color-primary)] mb-[10px]">Last Name</label>
                                <input type="text" className="w-full bg-[var(--color-light)] border border-[rgba(0,0,0,0.05)] rounded-[15px] px-[20px] py-[15px] text-[var(--color-primary)] focus:outline-none focus:bg-white focus:border-[var(--color-primary-vibrant)] focus:ring-1 focus:ring-[var(--color-primary-vibrant)] transition-colors text-[1rem]" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[0.9rem] font-[600] text-[var(--color-primary)] mb-[10px]">Email Address</label>
                            <input type="email" className="w-full bg-[var(--color-light)] border border-[rgba(0,0,0,0.05)] rounded-[15px] px-[20px] py-[15px] text-[var(--color-primary)] focus:outline-none focus:bg-white focus:border-[var(--color-primary-vibrant)] focus:ring-1 focus:ring-[var(--color-primary-vibrant)] transition-colors text-[1rem]" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-[0.9rem] font-[600] text-[var(--color-primary)] mb-[10px]">Your Message</label>
                            <textarea rows="4" className="w-full bg-[var(--color-light)] border border-[rgba(0,0,0,0.05)] rounded-[15px] px-[20px] py-[15px] text-[var(--color-primary)] focus:outline-none focus:bg-white focus:border-[var(--color-primary-vibrant)] focus:ring-1 focus:ring-[var(--color-primary-vibrant)] transition-colors resize-none text-[1rem]" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-grad-call text-[var(--color-primary)] font-[800] text-[1.1rem] py-[18px] rounded-[15px] transition-all duration-400 ease-[cubic-bezier(0.165,0.84,0.44,1)] shadow-[0_10px_30px_rgba(255,204,0,0.3)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,204,0,0.5)] pulse-anim mt-[10px]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
