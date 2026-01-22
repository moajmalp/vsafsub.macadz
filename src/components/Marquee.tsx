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
        <section className="bg-primary py-4 md:py-6 border-y border-white/10 relative overflow-hidden">
            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" 
                 style={{
                     backgroundSize: '200% 100%',
                     animation: 'shimmer 4s ease-in-out infinite'
                 }} />
            
            {/* Decorative top border accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            <div className="flex whitespace-nowrap animate-marquee relative z-10">
                {/* Generate two sets of content for seamless looping */}
                {[...Array(2)].map((_, groupIdx) => (
                    <div key={groupIdx} className="flex items-center min-w-full shrink-0">
                        {SERVICES.map((service, idx) => (
                            <div key={`${groupIdx}-${idx}`} className="flex items-center shrink-0 min-w-fit group">
                                {/* Text with subtle shadow effect */}
                                <span className="relative text-white text-3xl md:text-5xl font-display font-black uppercase cursor-default whitespace-nowrap px-8 md:px-12 transition-all duration-300 group-hover:scale-105">
                                    <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                        {service}
                                    </span>
                                    {/* Subtle glow effect on hover */}
                                    <span className="absolute inset-0 text-white/0 blur-md group-hover:text-white/20 transition-all duration-300">
                                        {service}
                                    </span>
                                </span>
                                
                                {/* Enhanced separator with animation */}
                                <div className="relative mx-8 md:mx-12 shrink-0 flex items-center">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300 group-hover:scale-125" />
                                    <div className="absolute w-6 h-px md:w-8 md:h-px bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/60 transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
            {/* Decorative bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>
    );
}
