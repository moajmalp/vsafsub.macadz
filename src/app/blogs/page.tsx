"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Why Branding & Identity Design Business Matter More Than Ever",
        excerpt: "In a crowded marketplace, your brand is more than just a logo. It's the promise you make to your customers and the identity that sets you apart.",
        date: "12 Apr 2025",
        author: "Admin",
        category: "Branding",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2026/01/37.jpg",
    },
    {
        id: 2,
        title: "Dream Big, Design Bigger: Navigating The Digital Landscape",
        excerpt: "The digital world is evolving at a breakneck pace. Discover how to stay ahead of the curve with innovative design strategies that convert.",
        date: "24 Apr 2025",
        author: "Admin",
        category: "Strategy",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-scaled.jpg",
    },
    {
        id: 3,
        title: "The Power of Visual Communication in Modern Advertising",
        excerpt: "Visual storytelling is the most effective way to communicate complex ideas. Learn how to leverage visual assets for maximum impact.",
        date: "05 May 2025",
        author: "Admin",
        category: "Advertising",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/1-scaled.jpg",
    },
    {
        id: 4,
        title: "Maximizing ROI Through Strategic Vehicle Branding",
        excerpt: "Your fleet is a moving billboard. Discover how professionally designed vehicle wraps can generate thousands of daily impressions.",
        date: "15 May 2025",
        author: "Admin",
        category: "Marketing",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/2.jpg",
    },
];

export default function BlogsPage() {
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
                            <Tag size={20} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Our Journal</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase text-secondary mb-4 leading-[1.1] font-bold">
                                Insights & <span className="text-primary italic">Innovation</span>
                            </h1>
                            <p className="text-secondary/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                Stay updated with the latest trends in branding, advertising, and creative design through our curated articles and industry insights.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Blog Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 premium-shadow">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-secondary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                                        {post.date}
                                    </div>
                                    <div className="absolute top-8 right-8 bg-primary text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-widest text-secondary/40">
                                    <div className="flex items-center gap-2">
                                        <User size={14} className="text-primary" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Tag size={14} className="text-primary" />
                                        <span>{post.category}</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl lg:text-4xl font-display uppercase leading-[1.2] text-secondary group-hover:text-primary transition-all duration-300 font-bold mb-6">
                                    {post.title}
                                </h2>

                                <p className="text-secondary/60 leading-relaxed mb-8 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-[0.2em] group/btn">
                                    Read Full Story
                                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
                        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-white/20 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display uppercase text-secondary mb-8 leading-tight font-bold">
                                Subscribe to <br /> our newsletter
                            </h2>
                            <p className="text-secondary/70 text-lg mb-12 max-w-xl mx-auto">
                                Get the latest creative news and case studies delivered straight to your inbox monthly.
                            </p>

                            <div className="max-w-md mx-auto relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white rounded-full py-5 px-8 outline-none text-secondary font-medium shadow-2xl"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-8 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
