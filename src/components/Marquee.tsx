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
        <section className="bg-primary py-6 md:py-10 border-y border-white/10 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Generate two sets of content for seamless looping */}
                {[...Array(2)].map((_, groupIdx) => (
                    <div key={groupIdx} className="flex items-center min-w-full">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="flex items-center mx-10 md:mx-16">
                                <span className="text-secondary text-4xl md:text-6xl font-display font-black uppercase cursor-default">
                                    {service}
                                </span>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary/20 ml-20 md:ml-32" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Subtle Gradient Overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        </section>
    );
}
