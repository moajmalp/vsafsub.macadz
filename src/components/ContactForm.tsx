"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

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
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[4rem] premium-shadow border border-primary/5 p-10 md:p-20 overflow-hidden relative"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2" />

                        <div className="mb-12 text-center">
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-4 block">
                                Direct Message
                            </span>
                            <h4 className="text-4xl md:text-6xl font-display uppercase text-secondary font-black leading-[1.1] tracking-tighter">
                                Send Us A <span className="text-primary italic">Message</span>
                            </h4>
                        </div>

                        {/* Focused Form Card */}
                        <div className="bg-surface/40 rounded-[3rem] p-8 md:p-14 border border-secondary/5 backdrop-blur-sm">
                            <div className="mb-10 text-center">
                                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
                                    Contact Our Experts
                                </span>
                                <h4 className="text-2xl md:text-4xl font-display uppercase text-secondary font-bold leading-none">
                                    Let's Start a <span className="text-primary italic">New Project</span>
                                </h4>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <input
                                        {...register("name")}
                                        placeholder="Your Full Name"
                                        className={cn(
                                            "w-full bg-white border border-transparent rounded-[1.5rem] px-8 py-5 focus:border-primary/50 outline-none transition-all text-secondary placeholder:text-secondary/30 text-sm font-medium shadow-sm hover:shadow-md",
                                            errors.name && "border-red-500/50"
                                        )}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-[10px] mt-2 ml-4 font-bold uppercase tracking-widest">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <input
                                            {...register("email")}
                                            placeholder="Email Address"
                                            className={cn(
                                                "w-full bg-white border border-transparent rounded-[1.5rem] px-8 py-5 focus:border-primary/50 outline-none transition-all text-secondary placeholder:text-secondary/30 text-sm font-medium shadow-sm hover:shadow-md",
                                                errors.email && "border-red-500/50"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-[10px] mt-2 ml-4 font-bold uppercase tracking-widest">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            {...register("phone")}
                                            placeholder="Phone Number"
                                            className={cn(
                                                "w-full bg-white border border-transparent rounded-[1.5rem] px-8 py-5 focus:border-primary/50 outline-none transition-all text-secondary placeholder:text-secondary/30 text-sm font-medium shadow-sm hover:shadow-md",
                                                errors.phone && "border-red-500/50"
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-[10px] mt-2 ml-4 font-bold uppercase tracking-widest">{errors.phone.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <input
                                        {...register("subject")}
                                        placeholder="Project Subject"
                                        className={cn(
                                            "w-full bg-white border border-transparent rounded-[1.5rem] px-8 py-5 focus:border-primary/50 outline-none transition-all text-secondary placeholder:text-secondary/30 text-sm font-medium shadow-sm hover:shadow-md",
                                            errors.subject && "border-red-500/50"
                                        )}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-[10px] mt-2 ml-4 font-bold uppercase tracking-widest">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        placeholder="Tell us about your project goals..."
                                        className={cn(
                                            "w-full bg-white border border-transparent rounded-[1.5rem] px-8 py-5 focus:border-primary/50 outline-none transition-all text-secondary placeholder:text-secondary/30 text-sm font-medium resize-none shadow-sm hover:shadow-md",
                                            errors.message && "border-red-500/50"
                                        )}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-[10px] mt-2 ml-4 font-bold uppercase tracking-widest">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-secondary text-white py-6 rounded-[1.5rem] font-bold uppercase tracking-[0.4em] text-[12px] transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed mt-10 shadow-2xl shadow-primary/30 active:scale-[0.98]"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Inquiry"} <Send size={18} />
                                </button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-6 bg-green-500/10 border border-green-500/20 text-green-600 text-center rounded-[1.5rem] mt-8 text-[11px] font-bold uppercase tracking-widest"
                                    >
                                        Success! We'll reach out to you shortly.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

