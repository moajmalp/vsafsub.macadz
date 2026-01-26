"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Palette, Zap, Users, Award } from "lucide-react";
import Link from "next/link";

const STATS = [
    { name: "Events And Booths Fabrication", value: 98 },
    { name: "Premium Branding & Signages", value: 99 },
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Main Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left - Main Question */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            What is VSAF ADZ?
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 mt-6 group"
                            >
                                <motion.span
                                    whileHover={{ x: 2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    Explore now
                                </motion.span>
                                <motion.div
                                    whileHover={{ x: 3, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right - Description */}
                    <motion.div 
                        className="lg:pl-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.p 
                            className="text-lg text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            VSAF ADZ is a premium branding agency that transforms your vision into reality. 
                            We specialize in creating impactful brand experiences that captivate audiences 
                            and drive business growth through innovative design and strategic thinking.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Large Feature Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        whileHover={{ y: -8 }}
                        className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    >
                        <motion.div 
                            className="relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <motion.h3 
                                className="text-2xl font-bold text-gray-900 mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Brands that grow
                            </motion.h3>
                            <motion.p 
                                className="text-gray-600 mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Transform your business identity with our strategic branding solutions 
                                that resonate with your target audience and drive sustainable growth.
                            </motion.p>
                        </motion.div>

                        {/* Decorative Image/Icon */}
                        <motion.div 
                            className="absolute bottom-4 right-4 w-32 h-32 opacity-20 group-hover:opacity-30 transition-all duration-500"
                            whileHover={{ rotate: 10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Palette className="w-16 h-16 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Animated background elements */}
                        <motion.div 
                            className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"
                            animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-40"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.4, 0.6, 0.4]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </motion.div>

                    {/* Feature Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ y: -8 }}
                        className="bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    >
                        <motion.div 
                            className="relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.div 
                                className="mb-6"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    animate={{ 
                                        y: [0, -3, 0],
                                        rotate: [0, 2, -2, 0]
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity, 
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Zap className="w-12 h-12 text-orange-400" />
                                </motion.div>
                            </motion.div>
                            <motion.h3 
                                className="text-xl font-bold mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Always innovative,<br />
                                always impactful
                            </motion.h3>
                            <motion.p 
                                className="text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Stay ahead of the curve with cutting-edge design solutions and 
                                creative strategies that make your brand unforgettable.
                            </motion.p>
                        </motion.div>
                        
                        <motion.div 
                            className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400/10 rounded-full blur-xl"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Feature Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        whileHover={{ y: -8 }}
                        className="bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    >
                        <motion.div 
                            className="relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.div 
                                className="mb-6"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 1, -1, 0]
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                >
                                    <Users className="w-12 h-12 text-blue-400" />
                                </motion.div>
                            </motion.div>
                            <motion.h3 
                                className="text-xl font-bold mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                100%<br />
                                client-focused
                            </motion.h3>
                            <motion.p 
                                className="text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                Your success is our priority. We work closely with you to understand 
                                your vision and deliver results that exceed expectations.
                            </motion.p>
                        </motion.div>
                        
                        <motion.div 
                            className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer"
                    style={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {STATS.map((stat, index) => (
                            <motion.div 
                                key={stat.name} 
                                className="space-y-4"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            >
                                <motion.div 
                                    className="flex items-center justify-between"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                >
                                    <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">
                                        {stat.name}
                                    </span>
                                    <motion.span 
                                        className="text-2xl font-bold text-orange-500"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 200, 
                                            delay: 1.2 + index * 0.2 
                                        }}
                                    >
                                        {stat.value}%
                                    </motion.span>
                                </motion.div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0, opacity: 0.8 }}
                                        whileInView={{ width: `${stat.value}%`, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 1.5, 
                                            delay: 0.8 + index * 0.3, 
                                            ease: "easeOut"
                                        }}
                                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full relative overflow-hidden"
                                        style={{
                                            boxShadow: "0 0 10px rgba(255, 165, 0, 0.3)",
                                        }}
                                    >
                                        {/* Shimmer effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ 
                                                duration: 2, 
                                                delay: 2 + index * 0.3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

