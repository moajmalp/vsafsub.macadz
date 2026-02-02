"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Send, Mail, Phone, Briefcase, Link as LinkIcon, MessageSquare, User, FileUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    position: z.string().min(2, "Position must be specified"),
    link: z.string().url("Please enter a valid URL (Portfolio or LinkedIn)").or(z.string().length(0)),
    cv: z.any().optional(),
    message: z.string().min(10, "Please provide a brief message about yourself"),
});

type FormData = z.infer<typeof formSchema>;

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialPosition: string;
}

export default function JobApplicationModal({ isOpen, onClose, initialPosition }: JobApplicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            position: initialPosition,
        }
    });

    // Update position when initialPosition changes
    useEffect(() => {
        if (isOpen) {
            setValue("position", initialPosition);
        }
    }, [initialPosition, setValue, isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Construct WhatsApp Message
        const phoneNumber = "966549900322";
        const message = `*Job Application*%0A%0A` +
            `*Position:* ${data.position}%0A` +
            `*Name:* ${data.name}%0A` +
            `*Email:* ${data.email}%0A` +
            `*Phone:* ${data.phone}%0A` +
            `*Portfolio/LinkedIn:* ${data.link || "N/A"}%0A` +
            `*CV status:* ${fileName ? `Attached (${fileName}) - Sending separately` : "Not provided"}%0A` +
            `*Message:* ${data.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Simulate submission delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.open(whatsappUrl, "_blank");

        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            reset();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-2xl glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <span className="text-brand-purple uppercase tracking-[0.3em] text-[10px] md:text-[11px] mb-3 block">Application Form</span>
                                <h3 className="text-3xl md:text-4xl font-display uppercase font-black text-white leading-tight">
                                    Join Our <span className="text-gradient italic pe-2">Team</span>
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                                {/* Position Field (Auto-filled but editable) */}
                                <div className="space-y-1.5">
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                            <Briefcase size={18} />
                                        </div>
                                        <input
                                            {...register("position")}
                                            placeholder="Applied Position"
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm",
                                                errors.position && "border-red-500/50"
                                            )}
                                        />
                                    </div>
                                    {errors.position && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.position.message}</p>}
                                </div>

                                {/* Name Field */}
                                <div className="space-y-1.5">
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                            <User size={18} />
                                        </div>
                                        <input
                                            {...register("name")}
                                            placeholder="Your Full Name"
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm",
                                                errors.name && "border-red-500/50"
                                            )}
                                        />
                                    </div>
                                    {errors.name && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.name.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    {/* Email Field */}
                                    <div className="space-y-1.5">
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                placeholder="Email Address"
                                                className={cn(
                                                    "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm",
                                                    errors.email && "border-red-500/50"
                                                )}
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.email.message}</p>}
                                    </div>

                                    {/* Phone Field */}
                                    <div className="space-y-1.5">
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                                <Phone size={18} />
                                            </div>
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                placeholder="Phone Number"
                                                className={cn(
                                                    "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm",
                                                    errors.phone && "border-red-500/50"
                                                )}
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                {/* Portfolio/LinkedIn Field */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                                <LinkIcon size={18} />
                                            </div>
                                            <input
                                                {...register("link")}
                                                placeholder="Portfolio URL (Optional)"
                                                className={cn(
                                                    "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm",
                                                    errors.link && "border-red-500/50"
                                                )}
                                            />
                                        </div>
                                        {errors.link && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.link.message}</p>}
                                    </div>

                                    {/* CV Upload Field */}
                                    <div className="space-y-1.5">
                                        <div className="relative group">
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) setFileName(file.name);
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                className={cn(
                                                    "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 outline-none transition-all duration-300 text-sm text-left flex items-center gap-3",
                                                    fileName ? "text-white" : "text-white/30",
                                                    "hover:bg-white/10 hover:border-brand-purple/30"
                                                )}
                                            >
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 z-10">
                                                    <FileUp size={18} />
                                                </div>
                                                <span className="truncate pr-8">
                                                    {fileName || "Attach CV (PDF/DOC)"}
                                                </span>
                                            </button>
                                            {fileName && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setFileName(null);
                                                        if (fileInputRef.current) fileInputRef.current.value = "";
                                                    }}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 text-white/50 hover:text-red-500 transition-all z-20"
                                                    title="Remove file"
                                                >
                                                    <X size={14} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-1.5">
                                    <div className="relative group">
                                        <div className="absolute left-5 top-5 text-white/30 group-focus-within:text-brand-purple transition-colors duration-300 z-10">
                                            <MessageSquare size={18} />
                                        </div>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            placeholder="Tell us about yourself and your experience..."
                                            className={cn(
                                                "w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:border-brand-purple/50 focus:ring-2 focus:ring-brand-purple/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-sm resize-none",
                                                errors.message && "border-red-500/50"
                                            )}
                                        />
                                    </div>
                                    {errors.message && <p className="text-red-500 text-[10px] ml-5 uppercase tracking-widest">{errors.message.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-primary py-5 rounded-2xl text-[12px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed uppercase transition-all active:scale-95"
                                    >
                                        {isSubmitting ? "Processing..." : (
                                            <>
                                                Send Application
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Success Alert */}
                                <AnimatePresence>
                                    {isSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 bg-brand-purple/20 border border-brand-purple/30 text-white text-center rounded-2xl text-[10px] uppercase tracking-widest"
                                        >
                                            ✓ Application submitted successfully!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
