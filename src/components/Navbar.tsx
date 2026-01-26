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
    const [isOverLightBackground, setIsOverLightBackground] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Detect if navbar is over a light background
            const checkBackgroundColor = () => {
                // Check multiple points to get better accuracy
                const checkPoints = [
                    { x: window.innerWidth / 2, y: 80 },
                    { x: window.innerWidth / 4, y: 80 },
                    { x: (window.innerWidth * 3) / 4, y: 80 },
                ];
                
                let totalBrightness = 0;
                let validChecks = 0;
                
                checkPoints.forEach(point => {
                    const element = document.elementFromPoint(point.x, point.y);
                    
                    if (element) {
                        const styles = window.getComputedStyle(element);
                        let bgColor = styles.backgroundColor;
                        
                        // Handle rgba/rgb colors
                        const rgbMatch = bgColor.match(/(\d+\.?\d*)/g);
                        if (rgbMatch && rgbMatch.length >= 3) {
                            const r = parseFloat(rgbMatch[0]);
                            const g = parseFloat(rgbMatch[1]);
                            const b = parseFloat(rgbMatch[2]);
                            const a = rgbMatch[3] ? parseFloat(rgbMatch[3]) : 1;
                            
                            // If alpha is very low, check parent element
                            if (a < 0.1 && element.parentElement) {
                                const parentStyles = window.getComputedStyle(element.parentElement);
                                bgColor = parentStyles.backgroundColor;
                                const parentRgb = bgColor.match(/(\d+\.?\d*)/g);
                                if (parentRgb && parentRgb.length >= 3) {
                                    totalBrightness += (parseFloat(parentRgb[0]) + parseFloat(parentRgb[1]) + parseFloat(parentRgb[2])) / 3;
                                    validChecks++;
                                }
                            } else {
                                totalBrightness += (r + g + b) / 3;
                                validChecks++;
                            }
                        }
                    }
                });
                
                if (validChecks > 0) {
                    const avgBrightness = totalBrightness / validChecks;
                    // If average brightness > 180, consider it a light background
                    setIsOverLightBackground(avgBrightness > 180);
                }
            };
            
            // Use requestAnimationFrame for smoother updates
            requestAnimationFrame(() => {
                checkBackgroundColor();
            });
        };
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll(); // Initial check
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Desktop Pill Navigation */}
            <div className="hidden lg:block fixed top-5 left-0 right-0 z-50 px-6">
                <div className={cn(
                    "flex items-center justify-between max-w-7xl mx-auto gap-4 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg transition-all duration-300",
                    isOverLightBackground 
                        ? "bg-white/90 border border-gray-200/50 shadow-black/5" 
                        : "bg-white/10 border border-white/20 shadow-black/10"
                )}>
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
                            baseColor={isOverLightBackground ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.15)"}
                            pillColor="#6a0eac"
                            textColor={isOverLightBackground ? "#0f172a" : "#ffffff"}
                            activeTextColor={isOverLightBackground ? "#0f172a" : "#ffffff"}
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
                        ? isOverLightBackground
                            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 py-4 shadow-lg shadow-black/5"
                            : "bg-white/10 backdrop-blur-xl border-b border-white/20 py-4 shadow-lg shadow-black/10"
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
                            isScrolled 
                                ? isOverLightBackground ? "text-secondary" : "text-white"
                                : "text-white"
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

