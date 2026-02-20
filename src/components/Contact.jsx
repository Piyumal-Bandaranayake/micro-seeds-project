import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-[#0F2016] text-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-sm font-bold text-[#E4B552] uppercase tracking-widest block mb-2">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                        Let's Talk About <br /> Your Next Harvest.
                    </h2>
                    <div className="w-20 h-1 bg-[#2B5A3C] rounded-full my-6"></div>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        Whether you are a chef looking for specific varieties, or a home cook eager
                        to boost your meals, we are here to provide the freshest microgreens.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4 text-gray-300 hover:text-[#E4B552] transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#2B5A3C] backdrop-blur-sm border border-white/10">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Call Us</h4>
                                <p>0766177948</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 hover:text-[#E4B552] transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#2B5A3C] backdrop-blur-sm border border-white/10">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Email Us</h4>
                                <p>hello@botanic.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300 hover:text-[#E4B552] transition-colors">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#2B5A3C] backdrop-blur-sm border border-white/10">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Visit Us</h4>
                                <p>123 Green Avenue, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2B5A3C]/10 rounded-full blur-3xl -z-10"></div>
                    <h3 className="text-3xl font-serif font-bold text-[#0F2016] mb-8">Send a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#2B5A3C] focus:ring-1 focus:ring-[#2B5A3C] transition-colors" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#2B5A3C] focus:ring-1 focus:ring-[#2B5A3C] transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#2B5A3C] focus:ring-1 focus:ring-[#2B5A3C] transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                            <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#2B5A3C] focus:ring-1 focus:ring-[#2B5A3C] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-[#E4B552] hover:bg-[#c99f46] text-[#0F2016] font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#E4B552]/30">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
