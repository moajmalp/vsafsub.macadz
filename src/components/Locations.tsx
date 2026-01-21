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
        <section id="locations" className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="bg-white p-12 md:p-24 rounded-[3.5rem] premium-shadow border border-primary/5">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">Global Presence</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display uppercase text-secondary leading-[1.1] font-bold">
                            Our <span className="text-primary italic">Branches</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {BRANCHES.map((branch) => (
                            <div key={branch.name} className="group p-10 bg-surface rounded-[2.5rem] hover:bg-white transition-all duration-500 text-left border border-transparent hover:border-primary/10 hover:shadow-2xl">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                                        <MapPin size={28} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display uppercase text-secondary font-bold">{branch.name}</h3>
                                </div>

                                <div className="space-y-5 text-secondary/60">
                                    <div className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Globe size={16} className="text-primary/50 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[13px] font-bold tracking-wide uppercase">{CONTACT_INFO.web}</span>
                                    </div>
                                    <div className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Phone size={16} className="text-primary/50 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[13px] font-bold tracking-wide uppercase">{CONTACT_INFO.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-4 hover:text-primary transition-colors cursor-pointer group/item">
                                        <Mail size={16} className="text-primary/50 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[13px] font-bold tracking-wide uppercase">{CONTACT_INFO.email}</span>
                                    </div>
                                </div>

                                <div className="mt-10 w-10 h-1.5 bg-primary/10 group-hover:w-full group-hover:bg-primary transition-all duration-700 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

