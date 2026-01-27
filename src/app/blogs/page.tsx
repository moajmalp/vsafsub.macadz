"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/lib/blog-data";

export default function BlogsPage() {
    const BLOG_POSTS = getAllBlogs();

    return (
        <main className="min-h-screen bg-brand-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 bg-brand-black overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-deep/10 blur-[200px] rounded-full pointer-events-none" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20"
                        >
                            <Tag size={24} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-purple font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Journal</span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white mb-6 leading-[1.1] font-black">
                                INSIGHTS & <span className="text-gradient italic">INNOVATION</span>
                            </h1>
                            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                Stay updated with the latest trends in branding, advertising, and creative design through our curated articles and industry insights.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Background Glow Blobs for Content */}
            <div className="relative overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-deep/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Blog Grid */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {BLOG_POSTS.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="group"
                                >
                                    <Link href={`/blogs/${post.slug}`}>
                                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 border border-white/5 shadow-2xl">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                priority={idx === 0}
                                                quality={85}
                                            />
                                            <div className="absolute top-8 left-8 glass-card border-white/20 backdrop-blur-md text-white px-6 py-2 text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                                                {post.date}
                                            </div>
                                            <div className="absolute top-8 right-8 bg-brand-purple text-white px-6 py-2 text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-brand-purple/20">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 mb-4 text-[10px] font-black uppercase tracking-widest text-brand-purple">
                                            <div className="flex items-center gap-2">
                                                <User size={14} />
                                                <span>By {post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-xl lg:text-2xl font-display uppercase leading-[1.3] text-white group-hover:text-brand-purple transition-all duration-300 font-bold mb-4 line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-muted leading-relaxed mb-8 line-clamp-2 text-sm">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.2em] group/btn group-hover:text-brand-purple transition-colors">
                                            Read Full Story
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover/btn:bg-brand-purple group-hover/btn:text-white group-hover/btn:border-brand-purple">
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-24 relative z-10 px-6">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden border border-white/10"
                        >
                            <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-purple/10 blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[30%] h-full bg-brand-deep/10 blur-[100px] pointer-events-none" />

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-8 leading-[1.1] font-black tracking-tight">
                                    STAY AHEAD OF <br className="hidden md:block" />
                                    <span className="text-gradient italic">THE CURVE</span>
                                </h2>
                                <p className="text-muted text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                    Get the latest creative news and case studies delivered straight to your inbox monthly.
                                </p>

                                <div className="max-w-md mx-auto relative group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 outline-none text-white focus:border-brand-purple/50 transition-all font-medium backdrop-blur-md"
                                    />
                                    <button className="absolute right-2 top-2 bottom-2 btn-primary px-8 rounded-full text-[10px]">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
