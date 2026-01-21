"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const infoCards = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            text: "info@safprinters.com",
            subtext: "Drop us a line anytime"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            text: "+966 12 345 6789",
            subtext: "Mon - Fri, 9am - 6pm"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Visit Us",
            text: "Jeddah, Saudi Arabia",
            subtext: "Creative Hub & Studio"
        },
    ];

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section - Matching Career Style */}
            <section className="relative pt-24 pb-16 bg-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#F0F9FF]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#BAE6FD] blur-[150px] opacity-20 rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#60A5FA] blur-[200px] opacity-10 rounded-full" />
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
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-secondary mb-4 leading-[1.1] font-bold">
                                Get In <span className="text-primary italic">Touch</span>
                            </h1>
                            <p className="text-secondary/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                Ready to start your next project or have questions about our services? Our team is here to help you bring your vision to life.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <div className="container mx-auto px-6 py-24">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-12 rounded-[2.5rem] premium-shadow border border-transparent hover:border-primary/20 transition-all text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-display uppercase text-secondary mb-4 font-bold">{card.title}</h3>
                            <p className="text-secondary font-bold mb-2">{card.text}</p>
                            <p className="text-secondary/40 text-xs uppercase tracking-widest font-bold">{card.subtext}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden premium-shadow group">
                            <Image
                                src="https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-1024x768.jpg"
                                alt="Our Studio"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60" />
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/50 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 md:p-16 rounded-[4rem] premium-shadow border border-primary/5"
                    >
                        <div className="mb-12">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Direct Message</span>
                            <h2 className="text-4xl font-display uppercase text-secondary font-bold">Send us a message</h2>
                        </div>
                        <ContactForm />
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <section className="w-full h-[600px] mt-24">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.227282717088!2d39.1866!3d21.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter sepia-[0.3] contrast-110 brightness-95"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}

