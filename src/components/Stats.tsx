"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS_DATA = [
    { 
        value: 500, 
        label: "Clientele", 
        sublabel: "and Still Counting",
        progress: 75 
    },
    { 
        value: 400, 
        label: "Talented Employees", 
        sublabel: "",
        progress: 75 
    },
    { 
        value: 50, 
        label: "Fleets", 
        sublabel: "with Best in class Logistic Services",
        progress: 50 
    },
    { 
        value: 7, 
        label: "Locations", 
        sublabel: "served with Single Point Contact",
        progress: 25 
    },
];

interface StatCounterProps {
    stat: typeof STATS_DATA[0];
    index: number;
}

function StatCounter({ stat, index }: StatCounterProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const controls = animate(count, stat.value, {
                        duration: 2,
                        ease: "easeOut",
                    });
                    return () => controls.stop();
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`stat-${index}`);
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [count, stat.value, index]);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    return (
        <motion.div
            id={`stat-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-center justify-center"
        >
            {/* Circular Progress Ring */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="4"
                    />
                    {/* Progress Arc */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#FF5722"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: stat.progress / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                        strokeDasharray={`${circumference} ${circumference}`}
                    />
                </svg>
                {/* Number in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span className="text-3xl md:text-4xl font-display font-black text-white">
                        {rounded}
                    </motion.span>
                </div>
            </div>

            {/* Label */}
            <div className="text-center">
                <p className="text-white text-sm md:text-base font-bold mb-1">
                    {stat.label}
                </p>
                {stat.sublabel && (
                    <p className="text-white/70 text-xs md:text-sm leading-tight">
                        {stat.sublabel}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-12 max-w-4xl mx-auto"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-tight"
                    >
                        Investing in us adds to your bottom-line; we will help you grow your business
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-white/80 text-sm md:text-base leading-relaxed"
                    >
                        With over 500 clients, 6 workshops, and a team of 400 experienced and talented employees; we are a powerful and cohesive unit aiming to accelerate your growth and act as your advertising genie.
                    </motion.p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {STATS_DATA.map((stat, index) => (
                        <StatCounter key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

