"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Events & Booth", "Premium Podium", "Signages", "Vehicle Branding"];

const ITEMS = [
    { id: 1, title: "Custom Exhibition Stand", category: "Events & Booth", image: "https://vsafsub.macadz.com/wp-content/uploads/2026/01/37.jpg" },
    { id: 2, title: "Luxury Retail Podium", category: "Premium Podium", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-scaled.jpg" },
    { id: 3, title: "Corporate Event Booth", category: "Events & Booth", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/1-scaled.jpg" },
    { id: 4, title: "Outdoor Billboard", category: "Signages", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/1-1.jpg" },
    { id: 5, title: "3D Wayfinding Signage", category: "Signages", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/73.jpg" },
    { id: 6, title: "Fleet Branding Solution", category: "Vehicle Branding", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/2.jpg" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? ITEMS
        : ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="py-32 bg-surface">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Our Creative Portfolio</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-secondary">Featured Projects</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-20">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                                    : "bg-white text-secondary/40 hover:text-secondary hover:bg-accent border border-transparent hover:border-primary/20"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="group relative w-full aspect-square overflow-hidden rounded-[2.5rem] bg-white premium-shadow"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-white/80 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">{item.category}</span>
                                    <h3 className="text-white text-2xl font-display uppercase leading-tight font-bold">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

