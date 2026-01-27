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
        <main className="min-h-screen bg-brand-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 bg-brand-black overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-deep/10 blur-[200px] rounded-full" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20"
                        >
                            <Layers size={24} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Expertise</span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white mb-6 leading-[1.1] font-black">
                                SOLUTIONS THAT <br className="hidden md:block" />
                                <span className="text-gradient italic">INSPIRE</span>
                            </h1>
                            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="h-full"
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group flex flex-col h-full glass-card rounded-[3rem] p-4 border border-white/5 hover:border-brand-purple/50 transition-all duration-500 shadow-2xl"
                            >
                                <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] shrink-0 border border-white/10">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                                </div>
                                <div className="px-6 py-10 flex flex-col flex-grow">
                                    <h2 className="text-2xl md:text-3xl font-display text-white mb-4 uppercase group-hover:text-brand-purple transition-colors font-black tracking-tighter leading-none">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-brand-purple font-bold uppercase tracking-[0.2em] text-[11px] group-hover:gap-4 transition-all mt-auto pt-6 border-t border-white/5">
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

