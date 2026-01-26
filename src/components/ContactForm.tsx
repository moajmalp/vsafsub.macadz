"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, Phone, FileText, MessageSquare, Sparkles, Zap, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
        },
    }),
};

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
            `*Subject:* ${data.subject}%0A` +
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
        <section id="contact" className="w-full pt-16 md:pt-20 pb-16 md:pb-20 bg-surface relative overflow-hidden">
            {/* Premium Background Effects - Purple Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6a0eac]/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-purple-radial opacity-10 blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-8 md:mb-12"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block"
                    >
                        Direct Message
                    </motion.span>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display uppercase font-black text-white leading-[1.05] tracking-tight"
                    >
                        Send Us A{" "}
                        <span className="text-primary relative inline-block">
                            Message
                            <motion.span
                                className="absolute -bottom-1 left-0 right-0 h-1 bg-primary"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                        </span>
                    </motion.h4>
                </motion.div>

                {/* Two Column Layout - Form and Creative Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Side - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative"
                        style={{
                            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(106, 14, 172, 0.1)"
                        }}
                    >
                    {/* Card Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-3 block"
                        >
                            Contact Our Experts
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-display uppercase font-black text-secondary leading-[1.1]"
                        >
                            Let's Start a{" "}
                            <span className="text-primary relative inline-block">
                                New Project
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                />
                            </span>
                        </motion.h3>
                    </motion.div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                        {/* Full Name Field */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fieldVariants}
                            className="space-y-2"
                        >
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-primary transition-colors duration-300 z-10">
                                    <Mail size={18} />
                                </div>
                                <input
                                    {...register("name")}
                                    placeholder="Your Full Name"
                                    onFocus={() => setFocusedField("name")}
                                    onBlur={() => setFocusedField(null)}
                                    className={cn(
                                        "w-full bg-white border border-secondary/20 rounded-2xl pl-14 pr-6 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                        errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    )}
                                />
                            </div>
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 text-[10px] ml-5 font-bold uppercase tracking-widest"
                                >
                                    {errors.name.message}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Email and Phone Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <motion.div
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fieldVariants}
                                className="space-y-2"
                            >
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-primary transition-colors duration-300 z-10">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Email Address"
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className={cn(
                                            "w-full bg-white border border-secondary/20 rounded-2xl pl-14 pr-6 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                            errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        )}
                                    />
                                </div>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-red-500 text-[10px] ml-5 font-bold uppercase tracking-widest"
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </motion.div>
                            <motion.div
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fieldVariants}
                                className="space-y-2"
                            >
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-primary transition-colors duration-300 z-10">
                                        <Phone size={18} />
                                    </div>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        placeholder="Phone Number"
                                        onFocus={() => setFocusedField("phone")}
                                        onBlur={() => setFocusedField(null)}
                                        className={cn(
                                            "w-full bg-white border border-secondary/20 rounded-2xl pl-14 pr-6 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                            errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        )}
                                    />
                                </div>
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-red-500 text-[10px] ml-5 font-bold uppercase tracking-widest"
                                    >
                                        {errors.phone.message}
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>

                        {/* Subject Field */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fieldVariants}
                            className="space-y-2"
                        >
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/30 group-focus-within:text-primary transition-colors duration-300 z-10">
                                    <FileText size={18} />
                                </div>
                                <input
                                    {...register("subject")}
                                    placeholder="Project Subject"
                                    onFocus={() => setFocusedField("subject")}
                                    onBlur={() => setFocusedField(null)}
                                    className={cn(
                                        "w-full bg-white border border-secondary/20 rounded-2xl pl-14 pr-6 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium",
                                        errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    )}
                                />
                            </div>
                            {errors.subject && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 text-[10px] ml-5 font-bold uppercase tracking-widest"
                                >
                                    {errors.subject.message}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fieldVariants}
                            className="space-y-2"
                        >
                            <div className="relative group">
                                <div className="absolute left-5 top-5 text-secondary/30 group-focus-within:text-primary transition-colors duration-300 z-10">
                                    <MessageSquare size={18} />
                                </div>
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell us about your project goals..."
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    className={cn(
                                        "w-full bg-white border border-secondary/20 rounded-2xl pl-14 pr-6 py-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-secondary placeholder:text-secondary/50 text-sm font-medium resize-none",
                                        errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    )}
                                />
                            </div>
                            {errors.message && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 text-[10px] ml-5 font-bold uppercase tracking-widest"
                                >
                                    {errors.message.message}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            custom={5}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fieldVariants}
                            className="pt-2"
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-primary hover:bg-primary-dark text-white py-5 md:py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[12px] md:text-[13px] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group"
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
                                        Submit Inquiry
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Success Message */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                className="p-6 md:p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 text-green-600 text-center rounded-2xl text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
                            >
                                ✓ Success! We'll reach out to you shortly.
                            </motion.div>
                        )}
                    </form>
                    </motion.div>

                    {/* Right Side - Creative Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative"
                    >
                        {/* Creative Content Card */}
                        <div className="h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/10 relative overflow-hidden">
                            {/* Animated Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                            
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                {/* Top Section - Main Content */}
                                <div className="space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-center"
                                    >
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-4 block"
                                        >
                                            Why Choose Us
                                        </motion.span>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="text-2xl md:text-3xl lg:text-4xl font-display uppercase font-black text-white leading-[1.1] mb-6"
                                        >
                                            Let's Build Something{" "}
                                            <span className="text-primary relative inline-block">
                                                Extraordinary
                                                <motion.span
                                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: 0.8 }}
                                                />
                                            </span>
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            className="text-white/70 text-sm md:text-base leading-relaxed"
                                        >
                                            Transform your vision into reality with our cutting-edge advertising solutions. We combine creativity, strategy, and innovation to deliver exceptional results.
                                        </motion.p>
                                    </motion.div>

                                    {/* Feature Cards */}
                                    <div className="space-y-4">
                                        {[
                                            { icon: Sparkles, title: "Creative Excellence", desc: "Award-winning designs that captivate audiences" },
                                            { icon: Target, title: "Strategic Approach", desc: "Data-driven strategies for maximum impact" },
                                            { icon: Rocket, title: "Innovation First", desc: "Latest technology and fabrication techniques" },
                                        ].map((feature, index) => (
                                            <motion.div
                                                key={feature.title}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/10"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <motion.div
                                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                                        transition={{ duration: 0.6 }}
                                                        className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                                                    >
                                                        <feature.icon className="w-6 h-6 text-primary" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <h4 className="text-white font-bold text-sm md:text-base mb-1 uppercase tracking-wide">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                                            {feature.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Section - Stats or CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                    className="mt-8 pt-8 border-t border-white/10"
                                >
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { number: "10K+", label: "Projects" },
                                            { number: "5K+", label: "Clients" },
                                            { number: "8+", label: "Countries" },
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                                                className="text-center"
                                            >
                                                <motion.div
                                                    className="text-2xl md:text-3xl font-display font-black text-primary mb-1"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                                >
                                                    {stat.number}
                                                </motion.div>
                                                <div className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
