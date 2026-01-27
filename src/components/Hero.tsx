"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] w-full flex items-center justify-start overflow-hidden bg-brand-black pt-24">
            {/* Background Radial Glow Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none z-0" />

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
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-brand-black/20 z-[1]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-start max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-2"
                    >
                        <span className="text-white font-bold tracking-[0.4em] uppercase text-[8px] bg-white/5 py-1 px-3 rounded-full backdrop-blur-sm border border-white/10">
                            Innovative Agency Solutions
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.1] uppercase mb-4 font-bold tracking-tight text-gradient"
                    >
                        ELEVATE YOUR <br />
                        <span className="italic">DIGITAL PRESENCE</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-muted text-xs md:text-sm font-medium tracking-wide mb-6 max-w-lg leading-relaxed"
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
                            className="btn-primary flex items-center justify-center text-[10px] uppercase tracking-[0.2em]"
                        >
                            Get Started
                        </a>
                        <a
                            href="/portfolio"
                            className="inline-block border border-white/10 hover:border-brand-purple/50 bg-white/5 hover:bg-brand-purple/10 text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full backdrop-blur-md"
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
                <div className="w-[1px] h-24 bg-gradient-to-t from-brand-purple to-transparent" />
            </div>
        </section>
    );
}