"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const POSTS = [
    {
        title: "Why Branding & Identity Design Business Matter More Than Ever",
        date: "12 Apr",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2026/01/37.jpg",
        category: "Branding"
    },
    {
        title: "Dream Big, Design Bigger: Navigating The Digital Landscape",
        date: "24 Apr",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-scaled.jpg",
        category: "Strategy"
    },
];

export default function BlogPreview() {
    return (
        <section id="blogs" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="bg-white p-12 md:p-24 rounded-[3.5rem] premium-shadow border border-primary/5">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="text-left">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-3 block">Editorial Insights</span>
                            <h4 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase text-secondary leading-[1.1] font-bold">
                                Latest <br /> <span className="text-primary italic">News</span>
                            </h4>
                        </div>
                        <button className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-all duration-300">
                            View All Stories
                            <div className="w-14 h-14 rounded-full border border-secondary/10 flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                                <ArrowRight size={20} />
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {POSTS.map((post) => (
                            <div key={post.title} className="group cursor-pointer">
                                <div className="relative w-full aspect-video overflow-hidden rounded-[2.5rem] mb-10 premium-shadow">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-secondary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                                        {post.date}
                                    </div>
                                    <div className="absolute top-8 right-8 bg-primary text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {post.category}
                                    </div>
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-display uppercase leading-[1.2] text-secondary group-hover:text-primary transition-all duration-300 font-bold">
                                    {post.title}
                                </h3>
                                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                    Read More <ArrowRight size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

