"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const BRANCHES = [
    { 
        name: "RIYADH", 
        phone: "+966 549 900 322",
        email: "INFO@SAFPRINTERS.COM",
        address: [
            "7383, Unit No.153,",
            "Riyadh",
            "34627-2761,",
            "Kingdom of Saudi Arabia"
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
    },
    { 
        name: "JEDDAH", 
        phone: "+966 549 900 322",
        email: "INFO@SAFPRINTERS.COM",
        address: [
            "7383, Unit No.153,",
            "Jeddah",
            "34627-2761,",
            "Kingdom of Saudi Arabia"
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
    },
    { 
        name: "KHOBAR", 
        phone: "+966 549 900 322",
        email: "INFO@SAFPRINTERS.COM",
        address: [
            "7383, Unit No.153,",
            "Al Khobar",
            "34627-2761,",
            "Kingdom of Saudi Arabia"
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
    },
];

export default function Locations() {
    return (
        <section id="locations" className="py-16 md:py-24 bg-surface relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-[11px] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Global Presence
                    </motion.span>
                    <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display uppercase font-black text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        OUR <span className="text-primary italic">BRANCHES</span>
                    </motion.h2>
                </motion.div>

                {/* Branch Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {BRANCHES.map((branch, index) => (
                        <motion.div
                            key={branch.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="relative flex flex-col items-center"
                        >
                            {/* Circular Image - Overlapping */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                className="relative w-32 h-32 md:w-40 md:h-40 z-20 mb-0"
                            >
                                <div className="absolute inset-0 rounded-full border-[3px] border-white shadow-2xl overflow-hidden bg-white">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 128px, 160px"
                                    />
                                </div>
                            </motion.div>

                            {/* Trapezoidal Connector */}
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                                className="relative w-12 h-5 md:w-16 md:h-6 -mt-2.5 z-10"
                                style={{
                                    clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)"
                                }}
                            >
                                <div className="w-full h-full bg-white shadow-lg" />
                            </motion.div>

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                                className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 pt-12 md:pt-16 shadow-2xl border border-gray-700/50"
                            >
                                {/* Location Name */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                                    className="text-3xl md:text-4xl font-display font-black text-white uppercase text-center mb-6 md:mb-8 tracking-tight"
                                >
                                    {branch.name}
                                </motion.h3>

                                {/* Contact Information - Centered */}
                                <div className="space-y-4 md:space-y-5 text-center">
                                    {/* Email */}
                                    <motion.a
                                        href={`mailto:${branch.email.toLowerCase()}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                                        className="block text-white text-sm md:text-base font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        {branch.email.toLowerCase()}
                                    </motion.a>

                                    {/* Phone */}
                                    <motion.a
                                        href={`tel:${branch.phone.replace(/\s/g, '')}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                                        className="block text-white text-sm md:text-base font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        {branch.phone}
                                    </motion.a>

                                    {/* Address */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                                        className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-gray-700/50"
                                    >
                                        <div className="space-y-1 text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                                            {branch.address.map((line, lineIndex) => (
                                                <div key={lineIndex} className="text-center">
                                                    {line}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

