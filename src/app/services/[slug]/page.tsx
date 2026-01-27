"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import { CheckCircle2, ChevronRight, Star, Send } from "lucide-react";
import { motion } from "framer-motion";

import { use } from "react";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = use(params);
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-brand-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-deep/10 blur-[200px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20"
                        >
                            <Star size={24} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Specialties</span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white mb-6 leading-[1.1] font-black">
                                {service.title.split(' ').map((word, i) => (
                                    i === 1 ? <span key={i} className="text-gradient italic">{word} </span> : word + ' '
                                ))}
                            </h1>
                            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                {service.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Our Services List */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-[2.5rem] p-10 border border-white/5"
                        >
                            <h3 className="text-xl font-display uppercase tracking-wider text-white mb-8 font-black">Internal Links</h3>
                            <div className="space-y-3">
                                {services.filter((s) => s.slug !== slug).map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        className="flex items-center justify-between p-5 rounded-2xl transition-all duration-300 bg-white/5 text-white border border-white/5 hover:bg-brand-purple hover:border-white/20 shadow-lg"
                                    >
                                        <span className="font-bold uppercase text-[10px] tracking-widest">{s.title}</span>
                                        <ChevronRight size={16} />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Get A Free Quote Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden text-white sticky top-28 border border-white/10"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-3xl rounded-full" />
                            <h3 className="text-xl font-display uppercase tracking-wider mb-8 font-black relative z-10">Get a Free Quote</h3>
                            <form className="space-y-4 relative z-10">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-sm"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-sm resize-none"
                                />
                                <button className="btn-primary w-full py-5 text-[11px] tracking-[0.2em] shadow-xl shadow-brand-purple/20">
                                    Submit Now
                                </button>
                            </form>
                        </motion.div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Main Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Text Content */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-display uppercase text-white font-black leading-tight tracking-tight">
                                <span className="text-gradient italic">Overview</span>
                            </h2>
                            <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
                                {service.content}
                            </p>

                            {/* Benefits Checklist */}
                            {service.benefits && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-4 glass-card p-6 rounded-2xl border border-white/5 group hover:border-brand-purple/50 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all shadow-lg shadow-brand-purple/5">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Offer Section */}
                        {service.offerTitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-12 md:p-16 rounded-[4rem] border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />

                                <h2 className="text-3xl font-display uppercase text-white mb-8 font-black tracking-tight relative z-10">
                                    {service.offerTitle}
                                </h2>
                                <p className="text-muted text-lg leading-relaxed mb-12 relative z-10">
                                    {service.offerContent}
                                </p>
                                <div className="flex flex-wrap gap-12 relative z-10">
                                    {service.stats?.map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-6 group">
                                            <div className="relative w-20 h-20 flex items-center justify-center">
                                                <svg className="w-full h-full -rotate-90">
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="36"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="transparent"
                                                        className="text-white/5"
                                                    />
                                                    <motion.circle
                                                        cx="40"
                                                        cy="40"
                                                        r="36"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="transparent"
                                                        strokeDasharray={2 * Math.PI * 36}
                                                        initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                                                        whileInView={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - stat.value / 100) }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, delay: 0.3 }}
                                                        className="text-brand-purple"
                                                    />
                                                </svg>
                                                <span className="absolute text-lg font-bold text-white">{stat.value}%</span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-purple transition-colors max-w-[100px]">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

