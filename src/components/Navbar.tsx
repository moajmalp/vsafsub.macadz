"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 lg:px-12",
                isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="relative h-12 w-32">
                    <Image
                        src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                        alt="Vsaf Adz Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/80 hover:text-white text-sm font-medium transition-colors uppercase tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all"
                    >
                        Let's Build Together
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/80 hover:text-white text-lg font-medium uppercase tracking-wider"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-6 py-3 text-center text-sm font-bold uppercase tracking-widest"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Let's Build Together
                    </Link>
                </div>
            )}
        </nav>
    );
}
