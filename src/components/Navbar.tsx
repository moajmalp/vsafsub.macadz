"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6 lg:px-12",
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg border-b border-primary/10 py-4 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="block h-10 w-32 relative transition-transform hover:scale-105">
                    <Image
                        src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                        alt="Vsaf Adz Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative group text-secondary/70 hover:text-primary text-[13px] font-bold transition-all uppercase tracking-[0.15em]"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-[12px] font-bold uppercase tracking-[0.2em] transition-all rounded-full shadow-lg shadow-primary/20"
                    >
                        Inquire Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-secondary p-2 transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl border border-primary/5 rounded-3xl p-8 mt-4 shadow-2xl flex flex-col space-y-6 animate-in fade-in zoom-in-95 duration-300">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-secondary/80 hover:text-primary text-xl font-bold uppercase tracking-wider border-b border-secondary/5 pb-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-primary text-white px-6 py-4 text-center text-sm font-bold uppercase tracking-widest rounded-2xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
}

