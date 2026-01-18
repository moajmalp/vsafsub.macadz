"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="relative h-12 w-32 block mb-8">
                            <Image
                                src="https://vsafsub.macadz.com/wp-content/uploads/2026/01/logo-bg.png"
                                alt="Vsaf Adz Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Innovative advertising solutions that get your brand seen, remembered and delivered.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-display uppercase mb-8 tracking-wider">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-primary transition-colors">Work Gallery</Link></li>
                            <li><Link href="#blogs" className="hover:text-primary transition-colors">Latest News</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-display uppercase mb-8 tracking-wider">Our Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Events & Booth</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Premium Podium</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Vehicle Branding</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Indoor Branding</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Signages</span></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-xl font-display uppercase mb-8 tracking-wider">Contact Us</h4>
                        <div className="space-y-6 text-gray-400">
                            <div className="flex gap-4">
                                <MapPin className="text-primary shrink-0" size={24} />
                                <p>8127 Abdullah Ibn Badr, Al-Sharafeyah, Jeddah 23218 3197 Saudi Arabia</p>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <p>+966 549 900 322</p>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <p>info@safprinters.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © Copyright 2026 – mac adz. All Right Reserved
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
