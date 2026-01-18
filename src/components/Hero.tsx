"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-black pt-20">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Darker overlay to match reference opacity */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-start max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white font-display text-5xl md:text-8xl lg:text-9xl leading-[0.9] uppercase mb-4"
                    >
                        GRAB ATTENTION <br />
                        CREATE <span className="text-white italic">IMPACT!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/90 text-sm md:text-xl font-medium tracking-wide mb-12"
                    >
                        The Fastest Growing Indoor and Outdoor Advertising Agency in the Middle East.
                    </motion.p>

                    {/* Statistics - Matching the reference style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-12 md:gap-24 mb-16"
                    >
                        <div className="flex flex-col">
                            <span className="text-primary text-4xl md:text-6xl font-bold mb-2">10000+</span>
                            <span className="text-white/70 text-lg md:text-2xl uppercase tracking-widest font-light">Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-primary text-4xl md:text-6xl font-bold mb-2">5000+</span>
                            <span className="text-white/70 text-lg md:text-2xl uppercase tracking-widest font-light">Clients</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-primary text-4xl md:text-6xl font-bold mb-2">8+</span>
                            <span className="text-white/70 text-lg md:text-2xl uppercase tracking-widest font-light">Countries</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="inline-block bg-primary hover:bg-white hover:text-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-full"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-block border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-full"
                        >
                            Our Works
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Refined for better look */}
            <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4">
                <div className="w-10 h-16 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-white rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}

