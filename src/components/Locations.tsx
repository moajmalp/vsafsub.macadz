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
        <section id="locations" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <span className="text-primary font-display font-medium uppercase tracking-[0.2em] mb-4 block">WE ARE LOCATED AT</span>
                <h2 className="text-4xl md:text-5xl font-display uppercase mb-16">OUR BRANCHES</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BRANCHES.map((branch) => (
                        <div key={branch.name} className="group p-12 border border-gray-100 bg-gray-50 hover:bg-black transition-colors duration-500 text-left">
                            <div className="flex items-center gap-4 mb-8">
                                <MapPin className="text-primary group-hover:text-white transition-colors" size={32} />
                                <h3 className="text-3xl font-display uppercase group-hover:text-white transition-colors">{branch.name}</h3>
                            </div>

                            <div className="space-y-6 text-gray-500 group-hover:text-gray-400 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Globe size={18} className="text-primary" />
                                    <span>{CONTACT_INFO.web}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone size={18} className="text-primary" />
                                    <span>{CONTACT_INFO.phone}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail size={18} className="text-primary" />
                                    <span>{CONTACT_INFO.email}</span>
                                </div>
                            </div>

                            <div className="mt-12 w-12 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
