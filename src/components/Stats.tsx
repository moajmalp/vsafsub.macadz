"use client";

import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const STATS_DATA = [
    { label: "BEST QUALITY", value: "100%" },
    { label: "SATISFACTION", value: "100%" },
    { label: "SUPPORT", value: "100%" },
    { label: "SUCCESS RATE", value: "100%" },
];

export default function Stats() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS_DATA.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:premium-shadow transition-all duration-500 border border-transparent hover:border-primary/20"
                        >
                            <h3 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight text-secondary group-hover:text-primary transition-colors">
                                {stat.value}
                            </h3>
                            <p className="text-[11px] font-bold tracking-[0.3em] text-secondary/40 uppercase group-hover:text-secondary transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative element matching Career page blurs */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}

