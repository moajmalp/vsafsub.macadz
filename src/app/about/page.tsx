"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CommitmentSection from "@/components/CommitmentSection";
import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";



export default function AboutPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section - Matching Career Style */}
            <section className="relative pt-32 md:pt-40 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6a0eac] blur-[150px] opacity-10 rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#3a0b9f] blur-[200px] opacity-8 rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
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



            <Stats />
            <Footer />
        </main>
    );
}

