"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
// Temporarily using CSS version until GSAP is installed
import PillNav from "./PillNavCSS";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Career", href: "/career" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
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
        <>
            {/* Desktop Pill Navigation */}
            <div className="hidden lg:block fixed top-5 left-0 right-0 z-50 px-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
                    {/* Logo with Blue Background */}
                    <Link 
                        href="/" 
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full shadow-lg shadow-primary/20 transition-all flex-shrink-0 flex items-center justify-center"
                    >
                        <div className="h-8 w-28 relative">
                            <img
                                src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                                alt="Vsaf Adz Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* Navigation Pills - Centered */}
                    <div className="flex-1 flex justify-center">
                        <PillNav
                            navItems={NAV_ITEMS}
                            baseColor={isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.95)"}
                            pillColor="#0066CC"
                            textColor={isScrolled ? "#1a1a1a" : "#1a1a1a"}
                            activeTextColor="#1a1a1a"
                        />
                    </div>

                    {/* Inquire Now Button */}
                    <Link
                        href="/contact"
                        className="bg-primary hover:bg-secondary text-white px-8 py-3 text-[12px] font-bold uppercase tracking-[0.2em] transition-all rounded-full shadow-lg shadow-primary/20 whitespace-nowrap flex-shrink-0"
                    >
                        Inquire Now
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={cn(
                    "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-lg border-b border-primary/10 py-4 shadow-sm"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center"
                    >
                        <div className="h-8 w-28 relative">
                            <img
                                src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                                alt="Vsaf Adz Logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "p-2 transition-colors hover:text-primary",
                            isScrolled ? "text-secondary" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl border border-primary/5 rounded-3xl p-8 mt-4 shadow-2xl flex flex-col space-y-6 animate-in fade-in zoom-in-95 duration-300">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-secondary/80 hover:text-primary text-xl font-bold uppercase tracking-wider border-b border-secondary/5 pb-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
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
        </>
    );
}

