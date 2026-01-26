"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CommitmentSection from "@/components/CommitmentSection";
import { motion } from "framer-motion";
import { Target, Users, Award, ShieldCheck } from "lucide-react";

const VALUES = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Our Mission",
        description: "To empower brands through innovative creative solutions that drive real business growth."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Our Team",
        description: "A diverse collective of visionary creators, strategic thinkers, and technical experts."
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Our Quality",
        description: "High-impact branding and fabrication delivered with uncompromising attention to detail."
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Our Promise",
        description: "Building long-term partnerships based on transparency, reliability, and excellence."
    }
];

export default function AboutPage() {
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
                            <Users size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">The Team Behind the Magic</span>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display uppercase text-white mb-4 leading-[1.1] font-bold">
                                We Are <span className="text-primary italic">Vsaf Adz</span>
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                A premier creative agency dedicated to transforming visions into reality through strategic branding, high-end fabrication, and innovative digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <About />

            <CommitmentSection />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4">What Drives Us</span>
                        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-secondary font-bold">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-secondary border border-transparent hover:border-primary/20 hover:premium-shadow transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-display uppercase text-white mb-4 font-bold">{value.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Stats />
            <Footer />
        </main>
    );
}

