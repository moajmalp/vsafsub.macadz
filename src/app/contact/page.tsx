"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

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
        <main className="min-h-screen bg-[#F0F8F6]">
            <Navbar />

            {/* Header Section */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto px-6">
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
                            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
                        >
                            Contact
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-secondary mb-6"
                        >
                            Contact Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-secondary/70 text-base md:text-lg leading-relaxed"
                        >
                            Contact VSAF ADZ for project inquiries, service details, and creative solutions in branding, advertising, and fabrication services.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Two Cards Side by Side */}
            <section className="pb-12 md:pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                        {/* Left Card - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
                        >
                            <h2 className="text-xl md:text-2xl font-display font-black text-secondary mb-8 uppercase">
                                Contact Info
                            </h2>
                            <div className="space-y-6">
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
                                            className="flex items-start gap-4 group"
                                        >
                                            {/* Circular Icon with Light Blue Background */}
                                            <div className="w-14 h-14 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <h3 className="font-bold text-secondary mb-2 text-sm md:text-base uppercase tracking-wide">
                                                    {info.label}
                                                </h3>
                                                <p className="text-secondary/70 text-sm md:text-base leading-relaxed font-normal">
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
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-black text-secondary mb-2">
                                Send a Message
                            </h2>
                            <p className="text-secondary/60 text-sm mb-8">
                                We'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <input
                                            {...register("name")}
                                            placeholder="Name"
                                            className={cn(
                                                "w-full bg-white border border-secondary/20 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                                errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs ml-2">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="Email"
                                            className={cn(
                                                "w-full bg-white border border-secondary/20 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                                errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone and Service Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <input
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="Phone"
                                            className={cn(
                                                "w-full bg-white border border-secondary/20 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                                errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs ml-2">{errors.phone.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <select
                                            {...register("course")}
                                            className={cn(
                                                "w-full bg-white border border-secondary/20 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary text-sm font-medium appearance-none",
                                                errors.course && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                            )}
                                        >
                                            <option value="">Service Interested</option>
                                            {SERVICES.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.course && (
                                            <p className="text-red-500 text-xs ml-2">{errors.course.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        placeholder="Message"
                                        className={cn(
                                            "w-full bg-white border border-secondary/20 rounded-xl px-5 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium resize-none",
                                            errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        )}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs ml-2">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-primary"
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

                                {/* Success Message */}
                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/30 text-green-600 text-center rounded-xl text-sm font-medium"
                                    >
                                        ✓ Success! We'll reach out to you shortly.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-16 md:pb-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-black text-secondary mb-6">
                            Our Location
                        </h2>
                        <div className="w-full h-[400px] md:h-[500px] rounded-xl border-2 border-dashed border-secondary/20 flex items-center justify-center bg-secondary/5 relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14842.227282717088!2d39.1866!3d21.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            />
                        </div>
                        <p className="text-secondary/60 text-sm mt-4 text-center">
                            Visit us at 8127 Abdullah Ibn Badr, Al-Sharafeyah, Jeddah 23218 Saudi Arabia
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}



