"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const POSTS = [
    {
        title: "Why Branding & Identity Design Business Matter More Ever",
        date: "12 April 2025",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2026/01/37.jpg",
    },
    {
        title: "Dream Big, Design Bigger",
        date: "24 April 2025",
        image: "https://vsafsub.macadz.com/wp-content/uploads/2025/04/4-scaled.jpg",
    },
];

export default function BlogPreview() {
    return (
        <section id="blogs" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left">
                        <span className="text-primary font-display font-medium uppercase tracking-[0.2em] mb-4 block">STAY INFORMED WITH VSAF</span>
                        <h2 className="text-4xl md:text-5xl font-display uppercase">LATEST NEWS & BLOGS</h2>
                    </div>
                    <button className="flex items-center gap-3 font-display uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-primary pb-2">
                        View All Posts <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {POSTS.map((post) => (
                        <div key={post.title} className="group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden mb-8">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 text-xs font-display uppercase tracking-widest">
                                    {post.date}
                                </div>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-display uppercase leading-tight hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
