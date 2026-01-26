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
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section - Matching Career Style */}
            <section className="relative pt-24 pb-16 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6a0eac] blur-[150px] opacity-10 rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#3a0b9f] blur-[200px] opacity-8 rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
                        >
                            <Star size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Our Specialties</span>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display uppercase text-white mb-4 leading-[1.1] font-bold">
                                {service.title.split(' ').map((word, i) => (
                                    i === 1 ? <span key={i} className="text-primary italic">{word} </span> : word + ' '
                                ))}
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
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
                            className="bg-white rounded-[2.5rem] p-10 premium-shadow border border-primary/5"
                        >
                            <h3 className="text-xl font-display uppercase tracking-wider text-secondary mb-8 font-bold">Internal Links</h3>
                            <div className="space-y-3">
                                {services.filter((s) => s.slug !== slug).map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        className="flex items-center justify-between p-5 rounded-2xl transition-all duration-300 bg-secondary text-white border border-transparent hover:bg-white hover:text-primary hover:border-primary"
                                    >
                                        <span className="font-bold uppercase text-[11px] tracking-widest">{s.title}</span>
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
                            className="bg-secondary rounded-[2.5rem] p-10 premium-shadow relative overflow-hidden text-white sticky top-28"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                            <h3 className="text-xl font-display uppercase tracking-wider mb-8 font-bold relative z-10">Get a Free Quote</h3>
                            <form className="space-y-4 relative z-10">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/30 text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/30 text-sm"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/30 text-sm resize-none"
                                />
                                <button className="w-full bg-primary hover:bg-white hover:text-secondary text-secondary font-bold py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl shadow-primary/20">
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
                            className="relative aspect-video w-full rounded-[3rem] overflow-hidden premium-shadow"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </motion.div>

                        {/* Text Content */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-display uppercase text-secondary font-bold leading-tight">
                                <span className="text-primary italic">Overview</span>
                            </h2>
                            <p className="text-white text-lg leading-relaxed">
                                {service.content}
                            </p>

                            {/* Benefits Checklist */}
                            {service.benefits && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl premium-shadow border border-primary/5">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-wide text-secondary">{benefit}</span>
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
                                className="bg-white p-12 md:p-16 rounded-[4rem] premium-shadow border border-primary/5"
                            >
                                <h2 className="text-3xl font-display uppercase text-secondary mb-8 font-bold">
                                    {service.offerTitle}
                                </h2>
                                <p className="text-secondary/60 text-lg leading-relaxed mb-10">
                                    {service.offerContent}
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    {service.stats?.map((stat, idx) => (
                                        <div key={idx} className="flex items-center gap-6">
                                            <div className="relative w-20 h-20 flex items-center justify-center">
                                                <svg className="w-full h-full -rotate-90">
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="36"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="transparent"
                                                        className="text-primary/10"
                                                    />
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="36"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="transparent"
                                                        strokeDasharray={2 * Math.PI * 36}
                                                        strokeDashoffset={2 * Math.PI * 36 * (1 - stat.value / 100)}
                                                        className="text-primary"
                                                    />
                                                </svg>
                                                <span className="absolute text-lg font-bold text-secondary">{stat.value}%</span>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/80 max-w-[100px]">
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

