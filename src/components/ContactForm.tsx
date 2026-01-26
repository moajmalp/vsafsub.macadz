"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, Phone, FileText, MessageSquare } from "lucide-react";
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
            ease: [0.22, 1, 0.36, 1],
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
        <section id="contact" className="w-full pt-20 md:pt-28 pb-20 md:pb-28 bg-surface relative overflow-hidden">
            {/* Premium Background Effects - Subtle Blue Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-12 md:mb-16"
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
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase font-black text-white leading-[1.05] tracking-tight"
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
                    </motion.h2>
                </motion.div>

                {/* Form Card - Pure White */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative"
                    style={{
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 102, 204, 0.1)"
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
            </div>
        </section>
    );
}
