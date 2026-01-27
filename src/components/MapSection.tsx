"use client";

import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function MapSection() {
    return (
        <section className="py-12 bg-brand-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                >
                    {/* Header Section */}
                    <div className="p-8 md:p-10">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 shrink-0 bg-brand-purple rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-brand-purple/20">
                                    <MapPin className="text-white w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-black text-white mb-1 uppercase tracking-tight">Visit Our Studio</h3>
                                    <p className="text-muted text-sm max-w-md">
                                        If you prefer to speak with us in person, you're welcome to visit our creative hub in Jeddah.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://maps.google.com/?q=Prince+Sultan+Street,Jeddah,Saudi+Arabia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-purple hover:bg-brand-deep text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-brand-purple/20 active:scale-95"
                                >
                                    Open Maps <ExternalLink size={16} />
                                </a>
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Prince+Sultan+Street,Jeddah,Saudi+Arabia"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95"
                                >
                                    Get Directions <Navigation size={16} />
                                </a>
                                <a
                                    href="tel:+966549900322"
                                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95"
                                >
                                    Call for Help <Phone size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Address</span>
                            <a
                                href="https://maps.google.com/?q=Prince+Sultan+Street,Al+Nahda+District,Jeddah,Saudi+Arabia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white/80 font-medium hover:text-brand-purple transition-colors group w-fit"
                            >
                                <MapPin size={18} className="text-brand-purple group-hover:scale-110 transition-transform" />
                                <span className="text-sm">Prince Sultan Street, Al Nahda District, Jeddah, Saudi Arabia</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Embed Section */}
                    <div className="w-full h-[500px] border-t border-white/10 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.227282717088!2d39.1866!3d21.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale invert brightness-90 contrast-[1.2]"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
