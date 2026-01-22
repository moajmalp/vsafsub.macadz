"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
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

export default function ContactForm() {
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
        <section id="contact" className="w-full pt-16 md:pt-24 pb-16 md:pb-24">
            <div className="max-w-3xl mx-auto">
                {/* Main Heading Style from Reference */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                        Direct Message
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display uppercase font-black text-white leading-none tracking-tighter">
                        Send Us A <span className="text-primary italic">Message</span>
                    </h2>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3.5rem] p-10 md:p-16 premium-shadow border border-primary/5 relative overflow-hidden"
                >
                    {/* Interior Design Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
                            Contact Our Experts
                        </span>
                        <h3 className="text-3xl md:text-4xl font-display uppercase font-black text-secondary leading-none">
                            Let's Start a <span className="text-primary italic">New Project</span>
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <input
                                {...register("name")}
                                placeholder="Your Full Name"
                                className={cn(
                                    "w-full bg-transparent border border-secondary/20 rounded-2xl px-8 py-5 focus:border-primary/40 outline-none transition-all text-secondary placeholder:text-black/50 text-sm font-medium",
                                    errors.name && "border-red-500/50"
                                )}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-widest">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <input
                                    {...register("email")}
                                    placeholder="Email Address"
                                    className={cn(
                                        "w-full bg-transparent border border-secondary/20 rounded-2xl px-8 py-5 focus:border-primary/40 outline-none transition-all text-secondary placeholder:text-black/50 text-sm font-medium",
                                        errors.email && "border-red-500/50"
                                    )}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-widest">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <input
                                    {...register("phone")}
                                    placeholder="Phone Number"
                                    className={cn(
                                        "w-full bg-transparent border border-secondary/20 rounded-2xl px-8 py-5 focus:border-primary/40 outline-none transition-all text-secondary placeholder:text-black/50 text-sm font-medium",
                                        errors.phone && "border-red-500/50"
                                    )}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-widest">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <input
                                {...register("subject")}
                                placeholder="Project Subject"
                                className={cn(
                                    "w-full bg-transparent border border-secondary/20 rounded-2xl px-8 py-5 focus:border-primary/40 outline-none transition-all text-secondary placeholder:text-black/50 text-sm font-medium",
                                    errors.subject && "border-red-500/50"
                                )}
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-widest">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <textarea
                                {...register("message")}
                                rows={5}
                                placeholder="Tell us about your project goals..."
                                className={cn(
                                    "w-full bg-transparent border border-secondary/20 rounded-2xl px-8 py-5 focus:border-primary/40 outline-none transition-all text-secondary placeholder:text-black/50 text-sm font-medium resize-none",
                                    errors.message && "border-red-500/50"
                                )}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-[10px] ml-4 font-bold uppercase tracking-widest">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-secondary text-white py-6 rounded-2xl font-bold uppercase tracking-[0.4em] text-[12px] transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 mt-4 shadow-xl shadow-primary/20 active:scale-[0.98]"
                        >
                            {isSubmitting ? "Processing..." : "Submit Inquiry"} <Send size={18} />
                        </button>

                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 bg-green-500/10 border border-green-500/20 text-green-600 text-center rounded-2xl mt-8 text-[10px] font-bold uppercase tracking-widest"
                            >
                                Success! We'll reach out to you shortly.
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
