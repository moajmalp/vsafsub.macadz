"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-16 md:pt-24 pb-12 font-sans">
            <div className="container mx-auto px-6">
                {/* All sections in one row */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 text-left">
                        {/* First Column: Logo, Description, and Social Media */}
                        <div>
                            <Link href="/" className="block h-10 w-32 mb-6 relative group transition-transform hover:scale-105">
                                <Image
                                    src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                                    alt="Vsaf Adz Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                            <p className="text-white/50 leading-relaxed mb-6 text-sm font-medium max-w-xs">
                                Engineering future-proof advertising solutions that elevate brands through creative excellence and strategic innovation.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white group">
                                        <Icon size={18} className="group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Second Column: Discover */}
                        <div>
                            <h4 className="text-lg font-bold uppercase mb-10 tracking-[0.2em] text-primary">Discover</h4>
                            <ul className="space-y-5 text-sm font-medium text-white/50">
                                <li><Link href="/about" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">About Our Agency</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Expert Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Strategic Work</Link></li>
                                <li><Link href="/career" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Career</Link></li>
                                <li><Link href="/blogs" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Insights & News</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300">Start Project</Link></li>
                            </ul>
                        </div>

                        {/* Third Column: Capabilities */}
                        <div>
                            <h4 className="text-lg font-bold uppercase mb-10 tracking-[0.2em] text-primary">Capabilities</h4>
                            <ul className="space-y-5 text-sm font-medium text-white/50 text-left">
                                <li className="hover:text-white transition-colors cursor-pointer">Events & Booth Design</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Premium Retail Podiums</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Dynamic Vehicle Branding</li>
                                <li className="hover:text-white transition-colors cursor-pointer">3D Indoor Branding</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Large Scale Signages</li>
                            </ul>
                        </div>

                        {/* Fourth Column: Get In Touch */}
                        <div>
                            <h4 className="text-lg font-bold uppercase mb-10 tracking-[0.2em] text-primary">Get In Touch</h4>
                            <div className="space-y-8 text-sm font-medium text-white/50">
                                <div className="flex gap-5">
                                    <MapPin className="text-primary shrink-0" size={20} />
                                    <p className="leading-relaxed">8127 Abdullah Ibn Badr, Al-Sharafeyah, Jeddah 23218 Saudi Arabia</p>
                                </div>
                                <div className="flex items-center gap-5">
                                    <Phone className="text-primary shrink-0" size={18} />
                                    <p>+966 549 900 322</p>
                                </div>
                                <div className="flex items-center gap-5">
                                    <Mail className="text-primary shrink-0" size={18} />
                                    <p>info@safprinters.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
                        © 2026 Vsaf Adz Agency. Engineered by Mac Adz
                    </p>
                    <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-white/20">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

