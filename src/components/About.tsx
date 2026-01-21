"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
    { name: "Events And Booths Fabrication", value: 98 },
    { name: "Premium Branding & Signages", value: 99 },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="bg-white p-12 md:p-24 rounded-[3.5rem] premium-shadow border border-primary/5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[2.5rem] bg-accent premium-shadow">
                                <Image
                                    src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/yassen.png"
                                    alt="About Vsaf Adz"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        {/* Text Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-6 block">
                                Crafting Excellence
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase text-secondary leading-[1.1] mb-8 font-bold">
                                Tailored <span className="text-primary italic">Branding</span> <br />
                                Solutions
                            </h2>
                            <p className="text-secondary/60 text-base md:text-lg mb-12 leading-relaxed max-w-xl font-medium">
                                We bridge the gap between imagination and reality. By combining strategic thinking with creative craftsmanship, we deliver high-impact branding that resonates with your audience and drives growth.
                            </p>

                            <div className="space-y-10">
                                {STATS.map((stat) => (
                                    <div key={stat.name} className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-secondary uppercase tracking-widest text-xs">{stat.name}</span>
                                            <span className="text-primary font-bold text-sm tracking-tighter">{stat.value}%</span>
                                        </div>
                                        <div className="h-2 bg-accent rounded-full overflow-hidden p-[2px]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${stat.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2, ease: "circOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full shadow-[0_0_10px_rgba(0,163,255,0.4)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

