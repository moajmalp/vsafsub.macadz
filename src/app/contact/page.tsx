"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, MessageCircle, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    course: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Visit Us",
        details: "8127 Abdullah Ibn Badr, Al-Sharafeyah, Jeddah 23218 Saudi Arabia",
        link: "https://maps.google.com/?q=8127+Abdullah+Ibn+Badr,+Al-Sharafeyah,+Jeddah+23218+Saudi+Arabia"
    },
    {
        icon: Phone,
        label: "Call Us",
        details: "+966 549 900 322",
        link: "tel:+966549900322"
    },
    {
        icon: Mail,
        label: "Email Us",
        details: "info@safprinters.com",
        link: "mailto:info@safprinters.com"
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        details: "Chat with us",
        link: "https://wa.me/966549900322"
    },
];

const SERVICES = [
    "Events & Booth Design",
    "Premium Retail Podiums",
    "Dynamic Vehicle Branding",
    "3D Indoor Branding",
    "Large Scale Signages",
    "Branding & Identity",
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            course: "",
        }
    });

    const selectedCourse = watch("course");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsSelectOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Construct WhatsApp Message
        const phoneNumber = "966549900322";
        const message = `*New Project Inquiry*%0A%0A` +
            `*Name:* ${data.name}%0A` +
            `*Email:* ${data.email}%0A` +
            `*Phone:* ${data.phone}%0A` +
            `*Service:* ${data.course}%0A` +
            `*Message:* ${data.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.open(whatsappUrl, "_blank");

        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <main className="min-h-screen bg-brand-black">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 md:pt-48 pb-12 md:pb-16 bg-brand-black overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-deep/10 blur-[200px] rounded-full pointer-events-none" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 uppercase leading-tight"
                        >
                            TALK TO <br /> <span className="text-gradient italic pe-4">OUR EXPERTS</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-muted text-base md:text-lg leading-relaxed"
                        >
                            Contact VSAF ADZ for project inquiries, service details, and creative solutions in branding, advertising, and fabrication services.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Two Cards Side by Side */}
            <section className="pb-12 md:pb-16 relative overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-deep/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                        {/* Left Card - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl"
                        >
                            <h2 className="text-xl md:text-3xl font-display font-black text-white mb-10 uppercase tracking-tight">
                                Contact <span className="text-brand-purple">Info</span>
                            </h2>
                            <div className="space-y-8">
                                {CONTACT_INFO.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            target={info.link.startsWith('http') ? "_blank" : undefined}
                                            rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-start gap-6 group"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple transition-all duration-500 border border-brand-purple/20 shadow-lg shadow-brand-purple/5">
                                                <Icon className="w-6 h-6 text-brand-purple group-hover:text-white transition-colors duration-500" />
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-widest text-brand-purple/80">
                                                    {info.label}
                                                </h3>
                                                <p className="text-muted text-sm md:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                                                    {info.details}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right Card - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2 uppercase tracking-tight">
                                Send a <span className="text-gradient italic">Message</span>
                            </h2>
                            <p className="text-muted text-sm mb-8">
                                We'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <input
                                            {...register("name")}
                                            placeholder="Name"
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/20 text-sm font-medium",
                                                errors.name && "border-red-500/50 focus:border-red-500"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-widest">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="Email"
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/20 text-sm font-medium",
                                                errors.email && "border-red-500/50 focus:border-red-500"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-widest">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <input
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="Phone"
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/20 text-sm font-medium",
                                                errors.phone && "border-red-500/50 focus:border-red-500"
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-widest">{errors.phone.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="relative" ref={selectRef}>
                                            <button
                                                type="button"
                                                onClick={() => setIsSelectOpen(!isSelectOpen)}
                                                className={cn(
                                                    "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none transition-all duration-300 text-sm font-medium flex items-center justify-between group",
                                                    isSelectOpen ? "border-brand-purple/50 ring-1 ring-brand-purple/20" : "hover:border-white/20",
                                                    errors.course ? "border-red-500/50" : "",
                                                    selectedCourse ? "text-white" : "text-white/20"
                                                )}
                                            >
                                                <span>{selectedCourse || "Service Interested"}</span>
                                                <ChevronDown
                                                    size={18}
                                                    className={cn(
                                                        "transition-transform duration-300 text-brand-purple",
                                                        isSelectOpen ? "rotate-180" : ""
                                                    )}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {isSelectOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl"
                                                    >
                                                        <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                                            {SERVICES.map((service) => (
                                                                <button
                                                                    key={service}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setValue("course", service, { shouldValidate: true });
                                                                        setIsSelectOpen(false);
                                                                    }}
                                                                    className={cn(
                                                                        "w-full px-6 py-4 text-left text-sm transition-colors hover:bg-brand-purple/10",
                                                                        selectedCourse === service ? "text-brand-purple bg-brand-purple/5 font-bold" : "text-white/70"
                                                                    )}
                                                                >
                                                                    {service}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        {errors.course && (
                                            <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-widest">{errors.course.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        placeholder="Message"
                                        className={cn(
                                            "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/20 text-sm font-medium resize-none",
                                            errors.message && "border-red-500/50 focus:border-red-500"
                                        )}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-[10px] ml-2 font-bold uppercase tracking-widest">{errors.message.message}</p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary py-5 rounded-2xl text-[12px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Submit Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-center rounded-2xl text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        ✓ Success! We'll reach out shortly.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-16 md:pb-24 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-[3rem] p-4 md:p-6 border border-white/5 shadow-22xl relative overflow-hidden"
                    >
                        <div className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.227282717088!2d39.1866!3d21.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {/* Overlay for premium feel */}
                            <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-black/10 rounded-[2.5rem]" />
                        </div>
                        <p className="text-muted text-[10px] mt-6 text-center font-bold uppercase tracking-[0.3em]">
                            Our Headquarters: 8127 Abdullah Ibn Badr, Jeddah, KSA
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}



