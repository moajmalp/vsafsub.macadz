"use client";

const SERVICES = [
    "Premium Podium",
    "Events & Booth",
    "Vehicle Branding",
    "Signages",
    "Display Stand",
    "Indoor & Outdoor Branding",
];

export default function Marquee() {
    return (
        <section className="bg-black py-12 border-y border-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="flex items-center mx-12">
                                <span className="text-white/20 text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors cursor-default">
                                    {service}
                                </span>
                                <div className="w-4 h-4 rounded-full bg-primary ml-12" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
