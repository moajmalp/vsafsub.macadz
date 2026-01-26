"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/lib/blog-data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function BlogPreview() {
    const POSTS = getAllBlogs().slice(0, 3); // Show only first 3 posts

    return (
        <section id="blogs" className="py-16 md:py-24 bg-surface relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white/98 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[3rem] premium-shadow border border-primary/10 relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl" />

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8"
                    >
                        <div className="text-center md:text-left space-y-3">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-primary font-bold uppercase tracking-[0.4em] text-[11px] mb-3 block"
                            >
                                Editorial Insights
                            </motion.span>
                            <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display uppercase text-secondary leading-[1.05] font-bold"
                            >
                                Latest{" "}
                                <span className="text-primary italic relative inline-block">
                                    News
                                    <motion.span
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    />
                                </span>
                            </motion.h4>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link
                                href="/blogs"
                                className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.25em] text-secondary hover:text-primary transition-all duration-500"
                            >
                                <span className="relative overflow-hidden">
                                    <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                                        View All Stories
                                    </span>
                                    <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                        View All Stories
                                    </span>
                                </span>
                                <motion.div
                                    className="w-12 h-12 rounded-full border-2 border-secondary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-[-5deg]"
                                    whileHover={{ rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Blog Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                    >
                        {POSTS.map((post, idx) => (
                            <motion.div key={post.id} variants={itemVariants}>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="group block h-full"
                                >
                                    <div className="relative h-full flex flex-col">
                                        {/* Image Container */}
                                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] mb-6 premium-shadow group-hover:shadow-2xl transition-all duration-700">
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                            
                                            {/* Image */}
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={idx === 0}
                                                quality={90}
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            />
                                            
                                            {/* Date Badge */}
                                            <motion.div
                                                className="absolute top-5 left-5 z-20"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 }}
                                            >
                                                <div className="bg-white/95 backdrop-blur-md text-secondary px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-full shadow-lg border border-white/50 flex items-center gap-2 group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                                                    <Calendar size={12} className="text-primary" />
                                                    <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
                                                </div>
                                            </motion.div>

                                            {/* Category Badge */}
                                            <motion.div
                                                className="absolute top-5 right-5 z-20"
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 + 0.6 }}
                                            >
                                                <div className="bg-primary text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-full shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                                                    {post.category}
                                                </div>
                                            </motion.div>

                                            {/* Read Time Badge */}
                                            <motion.div
                                                className="absolute bottom-5 left-5 z-20"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 + 0.7 }}
                                            >
                                                <div className="bg-black/70 backdrop-blur-md text-white px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                                                    <Clock size={10} />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="text-xl lg:text-2xl xl:text-3xl font-display uppercase leading-[1.2] text-secondary group-hover:text-primary transition-all duration-500 font-bold mb-4 line-clamp-3">
                                                {post.title}
                                            </h3>
                                            
                                            {/* Excerpt */}
                                            <p className="text-secondary/70 text-sm leading-relaxed mb-5 line-clamp-2 group-hover:text-secondary/90 transition-colors duration-300">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="mt-auto flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-15px] group-hover:translate-x-0">
                                                <span>Read Article</span>
                                                <motion.div
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <ArrowRight size={14} className="inline-block" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Hover Accent Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

