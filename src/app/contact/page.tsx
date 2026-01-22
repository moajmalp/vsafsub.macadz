"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const infoCards = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            text: "info@vsafadz.com",
            link: "mailto:info@vsafadz.com",
            subtext: "Drop us a line anytime"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            text: "+966 549 900 322",
            link: "tel:+966549900322",
            subtext: "Sun - Thu, 9am - 6pm"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Visit Us",
            text: "Jeddah, Saudi Arabia",
            link: "https://maps.google.com/?q=Jeddah,Saudi+Arabia",
            subtext: "Creative Hub & Studio"
        },
    ];

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
                            <Send size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Let's Connect</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-white mb-4 leading-[1.1] font-bold">
                                Get In <span className="text-primary italic">Touch</span>
                            </h1>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                Ready to start your next project or have questions about our services? Our team is here to help you bring your vision to life.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <div className="container mx-auto px-6 py-24">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] premium-shadow border border-transparent hover:border-primary/20 transition-all text-center group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-display uppercase text-secondary mb-3 font-bold">{card.title}</h3>
                            <a
                                href={card.link}
                                target={card.link.startsWith('http') ? "_blank" : undefined}
                                rel={card.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                className="text-secondary font-bold mb-1 text-sm block hover:text-primary transition-colors"
                            >
                                {card.text}
                            </a>
                            <p className="text-secondary/40 text-[10px] uppercase tracking-widest font-bold">{card.subtext}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Center */}
                <div className="max-w-4xl mx-auto mb-24">
                    <ContactForm />
                </div>

                {/* New Map Section */}
                <MapSection />
            </div>

            <Footer />
        </main>
    );
}



