"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const STATS = [
    { number: "10000+", label: "Projects" },
    { number: "5000+", label: "Clients" },
    { number: "8+", label: "Countries" },
];

export default function CommitmentSection() {
    return (
        <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-deep/10 rounded-full blur-[100px] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Top Section - Stats and Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-12 md:mb-16">
                    {/* Left Side - Statistics */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 gap-0 glass-card rounded-2xl overflow-hidden"
                    >
                        {/* Vertical Divider */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

                        {/* Horizontal Divider */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />

                        {/* Projects - Full Width */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-2 flex flex-col items-center justify-center p-8 md:p-10"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-brand-purple mb-2"
                            >
                                {STATS[0].number}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-white text-sm md:text-base font-bold uppercase tracking-wider"
                            >
                                {STATS[0].label}
                            </motion.div>
                        </motion.div>

                        {/* Clients */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col items-center justify-center p-6 md:p-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-brand-purple mb-2"
                            >
                                {STATS[1].number}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-white text-xs md:text-sm font-bold uppercase tracking-wider text-center"
                            >
                                {STATS[1].label}
                            </motion.div>
                        </motion.div>

                        {/* Countries */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center justify-center p-6 md:p-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-brand-purple mb-2"
                            >
                                {STATS[2].number}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-white text-xs md:text-sm font-bold uppercase tracking-wider text-center"
                            >
                                {STATS[2].label}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6 md:mb-8 leading-tight text-gradient"
                        >
                            Unwavering Commitment to Your Success
                        </motion.h2>

                        <div className="space-y-4 md:space-y-5">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-muted text-sm md:text-base leading-relaxed"
                            >
                                VSAF ADZ established its strong presence across the GCC & Middle East region and flourished over time through the remarkable experiences we offer our clients, becoming a leading model for the industry.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-muted text-sm md:text-base leading-relaxed"
                            >
                                Going above what's asked & beyond expectations, we became the #1 choice for our clients when it comes to exhibition stands, advertising services, and event companies in Dubai, Saudi Arabia, Egypt, Oman, and Bahrain.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-muted text-sm md:text-base leading-relaxed"
                            >
                                We aspire to become a worldwide leader in our industries by empowering our clients through solutions that enrich both individuals and businesses to accomplish their goals.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section - Image Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group overflow-hidden rounded-3xl aspect-[4/3] border border-white/10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                            alt="VSAF ADZ Building"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Play Button Overlay */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-300"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-purple/90 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:border-white transition-all duration-300"
                            >
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group overflow-hidden rounded-3xl aspect-[4/3] border border-white/10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                            alt="VSAF ADZ Office"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
