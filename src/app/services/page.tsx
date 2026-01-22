"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section - Matching Career Style */}
            <section className="relative pt-24 pb-16 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0A0F1A]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0066CC] blur-[150px] opacity-10 rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#004D99] blur-[200px] opacity-8 rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
                        >
                            <Layers size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Our Expertise</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-white mb-4 leading-[1.1] font-bold">
                                Solutions That <span className="text-primary italic">Inspire</span>
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                From large format printing to comprehensive branding strategies, we provide the tools and expertise to make your brand stand out in a crowded market.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group flex flex-col h-full bg-white rounded-[3rem] p-4 premium-shadow border border-transparent hover:border-primary/20 transition-all duration-500"
                            >
                                <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="px-6 py-10 flex flex-col flex-grow">
                                    <h2 className="text-2xl md:text-3xl font-display text-secondary mb-4 uppercase group-hover:text-primary transition-colors font-black tracking-tighter leading-none">
                                        {service.title}
                                    </h2>
                                    <p className="text-secondary/60 text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-primary font-bold uppercase tracking-[0.2em] text-[11px] group-hover:gap-4 transition-all mt-auto pt-4 border-t border-secondary/5">
                                        EXPLORE SERVICE
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}

