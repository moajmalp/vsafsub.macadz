"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";

const BRANCHES = [
    { name: "Riyadh", location: "Saudi Arabia" },
    { name: "Jeddah", location: "Saudi Arabia" },
    { name: "Khobar", location: "Saudi Arabia" },
];

const CONTACT_INFO = {
    web: "www.vsafad.com",
    phone: "+966 549 900 322",
    email: "info@safprinters.com",
};

export default function Locations() {
    return (
        <section id="locations" className="py-12 md:py-16 bg-surface">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] premium-shadow border border-primary/5">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Global Presence</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase text-secondary leading-[1.1] font-bold">
                            Our <span className="text-primary italic">Branches</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {BRANCHES.map((branch) => (
                            <div key={branch.name} className="group p-6 md:p-8 bg-secondary rounded-[2rem] hover:bg-secondary/90 transition-all duration-500 text-left border border-transparent hover:border-primary/10 hover:shadow-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                                        <MapPin size={22} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-display uppercase text-white font-bold">{branch.name}</h3>
                                </div>

                                <div className="space-y-4 text-white/90">
                                    <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Globe size={14} className="text-white/70 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[12px] font-bold tracking-wide uppercase">{CONTACT_INFO.web}</span>
                                    </div>
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Phone size={14} className="text-white/70 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[12px] font-bold tracking-wide uppercase">{CONTACT_INFO.phone}</span>
                                    </a>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Mail size={14} className="text-white/70 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[12px] font-bold tracking-wide uppercase">{CONTACT_INFO.email}</span>
                                    </a>
                                </div>

                                <div className="mt-6 w-8 h-1 bg-white/20 group-hover:w-full group-hover:bg-primary transition-all duration-700 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

