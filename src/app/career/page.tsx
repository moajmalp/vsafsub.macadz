"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

const JOBS = [
    {
        id: 1,
        title: "Senior Branding Designer",
        type: "Full-time",
        location: "Jeddah, SA",
        salary: "Competitive",
    },
    {
        id: 2,
        title: "Production Coordinator",
        type: "Full-time",
        location: "Riyadh, SA",
        salary: "Competitive",
    },
    {
        id: 3,
        title: "Creative Copywriter",
        type: "Part-time / Remote",
        location: "Dubai, UAE",
        salary: "Project-based",
    },
    {
        id: 4,
        title: "Large Format Print Tech",
        type: "Full-time",
        location: "Jeddah, SA",
        salary: "Competitive",
    },
];

const BENEFITS = [
    "Competitive Salary Packages",
    "Health & Wellness Insurance",
    "Modern & Creative Work Space",
    "Professional Growth Training",
    "Flexible Working Hours",
    "Collaborative Team Environment",
];

export default function CareerPage() {
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
                    <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
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
                            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Join Our Creative Powerhouse</span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white mb-6 leading-[1.1] font-black">
                                BUILD YOUR <br className="hidden md:block" />
                                <span className="text-gradient italic pe-2">FUTURE</span> WITH US
                            </h1>
                            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                We're always looking for visionary creators, strategic thinkers, and technical experts to help us push the boundaries of modern advertising and branding.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Why Join Us */}
            <section className="py-24 bg-brand-black overflow-hidden px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[11px] block">Our Culture</span>
                                <h2 className="text-3xl md:text-5xl font-display uppercase text-white leading-tight font-black">
                                    EXPERIENCE A CULTURE OF <br /> <span className="text-gradient italic">INNOVATION</span>
                                </h2>
                            </div>

                            <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                                At Vsaf Adz, we believe that great work comes from people who feel inspired and empowered. We foster an environment where ideas are celebrated and everyone has the opportunity to grow.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {BENEFITS.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center border border-brand-purple/30 group-hover:bg-brand-purple group-hover:scale-110 transition-all duration-300">
                                            <div className="w-2 h-2 rounded-full bg-brand-purple group-hover:bg-white" />
                                        </div>
                                        <span className="text-white/80 text-sm font-medium transition-colors group-hover:text-white uppercase tracking-wide">{benefit}</span>
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
                                <Link href="#positions" className="btn-primary">
                                    Explore Positions
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 relative group shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=800&fit=crop"
                                    alt="Office Culture"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                                <motion.div
                                    className="absolute bottom-10 left-10 p-6 glass-card rounded-2xl border-white/20 backdrop-blur-md"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">Employee Satisfaction</div>
                                </motion.div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-brand-black px-6" id="positions">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[11px] mb-4">Current Opportunities</span>
                        <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white font-black">OPEN <span className="text-gradient italic">POSITIONS</span></h1>
                    </div>

                    <div className="space-y-6">
                        {JOBS.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group glass-card p-8 md:p-10 rounded-[3rem] border border-white/5 hover:border-brand-purple/50 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-display uppercase text-white group-hover:text-brand-purple transition-colors font-black tracking-tight">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-6 text-muted text-[10px] font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={14} className="text-brand-purple" />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="text-brand-purple" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-brand-purple" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn-primary min-w-[180px] flex items-center justify-center gap-3">
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-brand-black px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden border border-white/10"
                    >
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-purple/10 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[30%] h-full bg-brand-deep/10 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-display uppercase text-white mb-8 leading-[1.1] font-black tracking-tight">
                                DON'T SEE THE <br className="hidden md:block" />
                                <span className="text-gradient italic">RIGHT ROLE?</span>
                            </h2>
                            <p className="text-muted text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                We're always interested in talent. Send us your CV and portfolio anyway, and we'll keep you in mind for future openings.
                            </p>
                            <a
                                href="mailto:careers@safprinters.com"
                                className="btn-primary inline-flex items-center justify-center px-12 py-5"
                            >
                                <span className="text-[14px] tracking-[0.2em] font-black">Send Open Application</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
