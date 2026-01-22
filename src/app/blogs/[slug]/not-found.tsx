import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-surface flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-6xl md:text-8xl font-display uppercase font-bold text-secondary mb-6">
                    404
                </h1>
                <h2 className="text-2xl md:text-4xl font-display uppercase text-secondary mb-4 font-bold">
                    Blog Post Not Found
                </h2>
                <p className="text-secondary/60 mb-8 text-lg">
                    The blog post you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all"
                >
                    <ArrowLeft size={16} />
                    Back to Blogs
                </Link>
            </div>
        </div>
    );
}
