"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
    { name: "Events And Booths", value: 98 },
    { name: "Premium Podiums", value: 99 },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl bg-gray-100"
                    >
                        <Image
                            src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/yassen.png"
                            alt="About Vsaf Adz"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-display font-medium uppercase tracking-[0.2em] mb-4 block">
                            WHAT MAKES US UNIQUE
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-tight mb-8">
                            OFFERING SOLUTIONS FOR <br />
                            <span className="text-gray-300">BRAND AND BUSINESS</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Through strategic and online communication, we offer creative solutions for your brand and business. Our quality is visible in everything.
                        </p>

                        <div className="space-y-8">
                            {STATS.map((stat) => (
                                <div key={stat.name} className="space-y-3">
                                    <div className="flex justify-between font-display uppercase tracking-wider text-sm">
                                        <span>{stat.name}</span>
                                        <span>{stat.value}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
