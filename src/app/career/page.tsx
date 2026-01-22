"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Star } from "lucide-react";

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
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section */}
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
                            <Star size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Join Our Creative Powerhouse</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-white mb-4 leading-[1.1] font-bold">
                                Build Your <span className="text-primary italic">Future</span> With Us
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                We're always looking for visionary creators, strategic thinkers, and technical experts to help us push the boundaries of modern advertising and branding.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Why Join Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Our Culture</span>
                            <h2 className="text-4xl md:text-5xl font-display uppercase text-secondary mb-8 leading-tight font-bold">
                                Experience a Culture of <br /> <span className="text-primary italic">Innovation</span>
                            </h2>
                            <p className="text-secondary/60 text-lg mb-10 leading-relaxed">
                                At Vsaf Adz, we believe that great work comes from people who feel inspired and empowered. We foster an environment where ideas are celebrated and everyone has the opportunity to grow.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {BENEFITS.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="font-bold text-secondary text-sm tracking-wide">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] bg-surface rounded-[3rem] overflow-hidden premium-shadow relative group">
                                <Image
                                    src="/careers.jpg"
                                    alt="Work Culture"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <div className="text-4xl font-bold mb-2">98%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-white/80">Employee Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24" id="positions">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Current Opportunities</span>
                        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white font-bold">Open Positions</h2>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        {JOBS.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group bg-white p-8 md:p-10 rounded-[2.5rem] premium-shadow border border-transparent hover:border-primary/20 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-display uppercase text-secondary group-hover:text-primary transition-colors font-bold">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-6 text-secondary/40 text-xs font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={14} className="text-primary" />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="text-primary" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-primary" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-primary hover:bg-white hover:border-primary hover:text-black border border-transparent text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-[0.15em] text-[11px] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                                    Apply Now <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-8 leading-tight font-bold">
                                Don't see the right role?
                            </h2>
                            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
                                We're always interested in talent. Send us your CV and portfolio anyway, and we'll keep you in mind for future openings.
                            </p>
                            <a
                                href="mailto:careers@safprinters.com"
                                className="inline-block bg-primary hover:bg-white hover:text-secondary text-secondary px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl shadow-primary/20"
                            >
                                Send Open Application
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
