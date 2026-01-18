"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight mb-8">
                            LET'S START <br />
                            <span className="text-gray-500">A NEW PROJECT</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            We are ready to bring your vision to life. Fill out the form or reach out directly to start the conversation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Call Us</span>
                                    <span className="text-xl font-medium">+966 549 900 322</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Email Us</span>
                                    <span className="text-xl font-medium">info@safprinters.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-primary outline-none transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-primary outline-none transition-all text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Service Interest</label>
                                <select className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-primary outline-none transition-all text-white appearance-none">
                                    <option className="bg-black">Events & Booth</option>
                                    <option className="bg-black">Premium Podium</option>
                                    <option className="bg-black">Vehicle Branding</option>
                                    <option className="bg-black">Signages</option>
                                    <option className="bg-black">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 px-4 py-4 focus:border-primary outline-none transition-all text-white resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-white hover:text-black text-white py-5 font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
