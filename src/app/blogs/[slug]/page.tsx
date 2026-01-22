"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/blog-data";
import { Calendar, User, Tag, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

interface BlogPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function BlogDetailPage({ params }: BlogPageProps) {
    const { slug } = use(params);
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get related posts (excluding current post)
    const relatedPosts = getAllBlogs()
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    // Get recent posts (excluding current post)
    const recentPosts = getAllBlogs()
        .filter(p => p.id !== post.id)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-surface">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#0A0F1A]" />
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0066CC] blur-[150px] opacity-10 rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#004D99] blur-[200px] opacity-8 rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
                        >
                            <ArrowLeft size={16} />
                            Back to Blogs
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-[10px] font-bold uppercase tracking-widest text-white/60">
                            <div className="flex items-center gap-2">
                                <Calendar size={12} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={12} />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={12} />
                                <span>By {post.author}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <span className="inline-block bg-primary text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase text-white leading-[1.1] font-bold mb-6">
                            {post.title}
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
                            {post.excerpt}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2.5rem] premium-shadow">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-[2.5rem] p-8 md:p-12 premium-shadow border border-primary/5 text-[#333333]"
                            >
                                <div
                                    className="prose prose-lg max-w-none
                                        prose-headings:!text-[#1a1a1a] prose-headings:font-display prose-headings:uppercase prose-headings:font-bold
                                        prose-h2:!text-2xl prose-h2:mt-12 prose-h2:mb-6
                                        prose-p:!text-[#333333] prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:font-normal
                                        prose-strong:!text-[#1a1a1a] prose-strong:font-bold
                                        prose-a:!text-primary prose-a:no-underline hover:prose-a:underline
                                        prose-li:!text-[#333333] prose-ul:!text-[#333333] prose-ol:!text-[#333333]
                                        prose-blockquote:!text-[#333333] prose-code:!text-[#333333]
                                        [&>*]:!text-[#333333] [&>p]:!text-[#333333] [&>h2]:!text-[#1a1a1a] [&>h3]:!text-[#1a1a1a]"
                                    style={{ color: '#333333' }}
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Tags */}
                                <div className="mt-12 pt-8 border-t border-secondary/10">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Tags:</span>
                                        {post.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-surface text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Share Buttons */}
                                <div className="mt-8 pt-8 border-t border-secondary/10">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Share:</span>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition-all text-white"
                                            >
                                                <Facebook size={16} />
                                            </a>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition-all text-white"
                                            >
                                                <Twitter size={16} />
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition-all text-white"
                                            >
                                                <Linkedin size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Author Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-8 premium-shadow border border-primary/5"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-display uppercase font-bold text-secondary mb-1">
                                            {post.author}
                                        </h3>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
                                            Author
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-secondary/70 leading-relaxed">
                                    Expert insights and industry knowledge from our creative team.
                                </p>
                            </motion.div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[2.5rem] p-8 premium-shadow border border-primary/5"
                                >
                                    <h3 className="text-xl font-display uppercase tracking-wider text-secondary mb-6 font-bold">
                                        Related Posts
                                    </h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.id}
                                                href={`/blogs/${relatedPost.slug}`}
                                                className="block group"
                                            >
                                                <div className="relative w-full aspect-video overflow-hidden rounded-2xl mb-4 premium-shadow">
                                                    <Image
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                                        quality={85}
                                                    />
                                                </div>
                                                <h4 className="text-sm font-display uppercase font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mt-2">
                                                    {relatedPost.date}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Category Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] p-8 premium-shadow border border-primary/5"
                            >
                                <h3 className="text-xl font-display uppercase tracking-wider text-secondary mb-6 font-bold">
                                    Category
                                </h3>
                                <Link
                                    href={`/blogs?category=${post.category}`}
                                    className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-secondary transition-colors"
                                >
                                    {post.category}
                                </Link>
                            </motion.div>

                            {/* Recent Posts */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-[2.5rem] p-8 premium-shadow border border-primary/5"
                            >
                                <h3 className="text-xl font-display uppercase tracking-wider text-secondary mb-6 font-bold">
                                    Recent Posts
                                </h3>
                                <div className="space-y-6">
                                    {recentPosts.map((recentPost) => (
                                        <Link
                                            key={recentPost.id}
                                            href={`/blogs/${recentPost.slug}`}
                                            className="block group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl premium-shadow">
                                                    <Image
                                                        src={recentPost.image}
                                                        alt={recentPost.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="80px"
                                                        quality={85}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-display uppercase font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                                        {recentPost.title}
                                                    </h4>
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
                                                        {recentPost.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/blogs"
                                    className="mt-6 inline-flex items-center gap-2 text-primary hover:text-secondary text-sm font-bold uppercase tracking-widest transition-colors"
                                >
                                    View All Posts
                                    <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
                    >
                        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-white/20 blur-[100px] rounded-full" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display uppercase text-white mb-8 leading-tight font-bold">
                                Ready to Start Your <br /> Next Project?
                            </h2>
                            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
                                Let's discuss how we can bring your vision to life with creative design and strategic branding.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-primary px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary hover:text-white transition-all shadow-xl"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
