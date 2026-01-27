"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Palette, Zap, Users, Award, Target } from "lucide-react";
import Link from "next/link";

const STATS = [
    { name: "Events And Booths Fabrication", value: 98 },
    { name: "Premium Branding & Signages", value: 99 },
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
            {/* Background Glow Blobs */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-deep/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Main Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
                    {/* Left - Main Question */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient"
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
                                className="btn-primary inline-flex items-center gap-2 mt-6 group text-sm"
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
                            className="text-lg text-muted leading-relaxed"
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
                        className="lg:col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
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
                                className="text-2xl font-bold text-white mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Brands that grow
                            </motion.h3>
                            <motion.p
                                className="text-muted mb-6 leading-relaxed"
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
                            <div className="w-full h-full bg-gradient-to-br from-brand-purple to-brand-deep rounded-full flex items-center justify-center">
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
                            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl opacity-30"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* Feature Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ y: -8 }}
                        className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
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
                                    <Zap className="w-12 h-12 text-brand-purple" />
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                className="text-xl font-bold mb-4 text-white uppercase"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Always innovative,<br />
                                always impactful
                            </motion.h3>
                            <motion.p
                                className="text-muted leading-relaxed"
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
                            className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-purple/10 rounded-full blur-xl"
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
                        className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                        style={{
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
                                    <Users className="w-12 h-12 text-brand-deep" />
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                className="text-xl font-bold mb-4 text-white uppercase"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                100%<br />
                                client-focused
                            </motion.h3>
                            <motion.p
                                className="text-muted leading-relaxed"
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
                            className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-deep/10 rounded-full blur-xl"
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
                    className="mt-16 glass-card rounded-3xl p-8 cursor-pointer"
                    style={{
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
                                    <span className="font-bold text-white uppercase tracking-widest text-sm">
                                        {stat.name}
                                    </span>
                                    <motion.span
                                        className="text-2xl font-bold text-brand-purple"
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
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0, opacity: 0.8 }}
                                        whileInView={{ width: `${stat.value}%`, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.5,
                                            delay: 0.8 + index * 0.3,
                                            ease: "easeOut"
                                        }}
                                        className="h-full bg-gradient-to-r from-brand-purple to-brand-deep rounded-full relative overflow-hidden"
                                        style={{
                                            boxShadow: "0 0 10px rgba(106, 14, 172, 0.3)",
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

                {/* What Drives Us Section */}
                <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="space-y-2">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[11px]"
                            >
                                Purpose & Ambition
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                                WHAT <span className="text-gradient italic">DRIVES US</span>
                            </h2>
                        </div>
                        <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
                            Our primary goal is to empower ourselves through research and development,
                            and provide the highest standard and quality services to fulfill our clients' objectives.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-purple"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h4 className="text-brand-purple font-bold uppercase tracking-widest text-xs mb-3">Our Mission</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    To provide premium display stands, branding and signage products to the market through innovative and sustainable methods.
                                </p>
                            </motion.div>
                            <motion.div
                                className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-deep"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h4 className="text-brand-deep font-bold uppercase tracking-widest text-xs mb-3">Our Vision</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    To emerge as the finest service provider and manufacturer of high-quality advertising products in the region.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-[120px]" />
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                                alt="Team Collaboration"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>

                {/* Our Core Values Section */}
                <div className="mt-24 md:mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block">Foundational Principles</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            OUR <span className="text-gradient italic pe-2">CORE VALUES</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { icon: Target, title: "EXCELLENCE", desc: "Commitment to the highest quality standards in every project." },
                            { icon: Zap, title: "INNOVATION", desc: "Pushing boundaries with creative thinking and new technologies." },
                            { icon: Users, title: "COLLABORATION", desc: "Working as one with our clients and team to achieve greatness." },
                            { icon: Award, title: "INTEGRITY", desc: "Honesty and transparency in all our business relationships." }
                        ].map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center group cursor-pointer border border-white/5"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 border border-brand-purple/20 group-hover:bg-brand-purple group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-brand-purple/5 group-hover:shadow-brand-purple/20">
                                    <value.icon className="w-8 h-8 text-brand-purple group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 tracking-wider uppercase">{value.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Our Culture Section (From Uploaded Image) */}
                <div className="mt-24 md:mt-32 relative">
                    <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-deep/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <motion.span
                                    className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[11px]"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Our Culture
                                </motion.span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">
                                    EXPERIENCE A CULTURE OF <br />
                                    <span className="text-gradient italic">INNOVATION</span>
                                </h2>
                            </div>

                            <p className="text-muted text-base md:text-lg leading-relaxed">
                                At Vsaf Adz, we believe that great work comes from people who feel
                                inspired and empowered. We foster an environment where ideas are
                                celebrated and everyone has the opportunity to grow.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Competitive Salary Packages",
                                    "Health & Wellness Insurance",
                                    "Modern & Creative Work Space",
                                    "Professional Growth Training",
                                    "Flexible Working Hours",
                                    "Collaborative Team Environment"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 group-hover:bg-brand-purple group-hover:scale-110 transition-all duration-300">
                                            <div className="w-2 h-2 rounded-full bg-brand-purple group-hover:bg-white" />
                                        </div>
                                        <span className="text-white/80 text-sm font-medium transition-colors group-hover:text-white">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="pt-4"
                            >
                                <Link href="/career" className="btn-primary">
                                    Join Our Team
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=800&fit=crop"
                                    alt="Office Culture"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />

                                {/* 98% Stat Overlay */}
                                <motion.div
                                    className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl border-white/20 backdrop-blur-md"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="text-4xl font-bold text-white mb-1">98%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">Employee Satisfaction</div>
                                </motion.div>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

