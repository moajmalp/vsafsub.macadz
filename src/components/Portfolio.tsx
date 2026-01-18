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
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-primary font-display font-medium uppercase tracking-[0.2em] mb-4">OUR LATEST WORK</span>
                    <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">FEATURED PROJECTS</h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 text-sm font-display uppercase tracking-widest transition-all ${activeCategory === cat
                                ? "bg-primary text-white"
                                : "bg-white text-gray-400 hover:text-black hover:shadow-lg"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square overflow-hidden bg-white shadow-xl"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-primary font-display text-sm uppercase mb-2">{item.category}</span>
                                    <h3 className="text-white text-2xl font-display uppercase">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
