"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogs } from "@/lib/blog-data";

export default function BlogPreview() {
    const POSTS = getAllBlogs().slice(0, 3); // Show only first 3 posts

    return (
        <section id="blogs" className="py-12 md:py-16 bg-surface">
            <div className="container mx-auto px-6">
                <div className="bg-white p-6 md:p-10 rounded-[2rem] premium-shadow border border-primary/5">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div className="text-left">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Editorial Insights</span>
                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase text-secondary leading-[1.1] font-bold">
                                Latest<span className="text-primary italic">News</span>
                            </h4>
                        </div>
                        <Link href="/blogs" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-all duration-300">
                            View All Stories
                            <div className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {POSTS.map((post) => (
                            <Link key={post.id} href={`/blogs/${post.slug}`} className="group">
                                <div className="relative w-full aspect-video overflow-hidden rounded-[1.5rem] mb-6 premium-shadow">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-secondary px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">
                                        {post.date.split(' ').slice(0, 2).join(' ')}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {post.category}
                                    </div>
                                </div>
                                <h3 className="text-lg lg:text-2xl font-display uppercase leading-[1.2] text-secondary group-hover:text-primary transition-all duration-300 font-bold">
                                    {post.title}
                                </h3>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                    Read More <ArrowRight size={12} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

