"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";

const CATEGORIES = ["ALL", "Events & Booth", "Premium Podium", "Signages", "Vehicle Branding"];

const ITEMS = [
    { id: 1, title: "Custom Exhibition Stand", category: "Events & Booth", image: "https://vsafsub.macadz.com/wp-content/uploads/2026/01/37.jpg", year: "2024" },
    { id: 2, title: "Luxury Retail Podium", category: "Premium Podium", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-scaled.jpg", year: "2024" },
    { id: 3, title: "Corporate Event Booth", category: "Events & Booth", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/1-scaled.jpg", year: "2023" },
    { id: 4, title: "Outdoor Billboard", category: "Signages", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/1-1.jpg", year: "2024" },
    { id: 5, title: "3D Wayfinding Signage", category: "Signages", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/73.jpg", year: "2023" },
    { id: 6, title: "Fleet Branding Solution", category: "Vehicle Branding", image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/2.jpg", year: "2024" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const filteredItems = activeCategory === "ALL"
        ? ITEMS
        : ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6a0eac] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3a0b9f] rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span 
                        className="inline-block text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Our Creative Portfolio
                    </motion.span>
                    <motion.h2 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        EXECUTED PROJECTS
                    </motion.h2>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {CATEGORIES.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                relative px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider
                                transition-all duration-300 overflow-hidden
                                ${activeCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
                                }
                            `}
                        >
                            {/* Active button background animation */}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-blue-600"
                                    style={{ borderRadius: "9999px" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    layout 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{ y: -8 }}
                                onHoverStart={() => setHoveredItem(item.id)}
                                onHoverEnd={() => setHoveredItem(null)}
                                className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    
                                    {/* Hover Content */}
                                    <motion.div 
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                        initial={false}
                                        animate={hoveredItem === item.id ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={hoveredItem === item.id ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30"
                                        >
                                            <Eye className="w-6 h-6 text-white" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <motion.span 
                                            className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        >
                                            {item.category}
                                        </motion.span>
                                    </div>

                                    {/* Year Badge */}
                                    <div className="absolute top-4 right-4">
                                        <motion.span 
                                            className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        >
                                            {item.year}
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Content */}
                                <motion.div 
                                    className="p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {item.category}
                                            </p>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 45 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <ArrowUpRight className="w-5 h-5 text-blue-400" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Animated Border */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100"
                                    initial={false}
                                    animate={hoveredItem === item.id ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link href="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#6a0eac] to-[#3a0b9f] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                        >
                            View All Projects
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

