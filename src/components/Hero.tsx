"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] w-full flex items-center justify-start overflow-hidden bg-secondary pt-16">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Dynamic Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-secondary/20 z-[1]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-start max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white mb-4 shadow-xl shadow-primary/20"
                    >
                        <Star size={16} className="animate-pulse" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-2"
                    >
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[8px] bg-white/5 py-1 px-3 rounded-full backdrop-blur-sm border border-white/10">
                            Innovative Agency Solutions
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-white font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] uppercase mb-4 font-bold tracking-tight"
                    >
                        ELEVATE YOUR <br />
                        <span className="text-primary italic">DIGITAL PRESENCE</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white/80 text-xs md:text-sm font-medium tracking-wide mb-6 max-w-lg leading-relaxed"
                    >
                        Strategic branding and creative solutions engineered for your exponential business growth in the modern world.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="/contact"
                            className="inline-block bg-primary hover:bg-white hover:text-secondary text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-2xl shadow-primary/30"
                        >
                            Get Started
                        </a>
                        <a
                            href="/portfolio"
                            className="inline-block border border-white/30 hover:border-white bg-white/5 hover:bg-white text-white hover:text-secondary px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full backdrop-blur-md"
                        >
                            View Portfolio
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 z-[2] opacity-[0.1] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-6 z-10">
                <span className="text-white/40 uppercase text-[10px] font-bold tracking-[0.6em] rotate-90 mb-16">Explore</span>
                <div className="w-[1px] h-24 bg-gradient-to-t from-primary to-transparent" />
            </div>
        </section>
    );
}