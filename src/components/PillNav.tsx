"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  navItems: NavItem[];
  logo?: string;
  logoAlt?: string;
  baseColor?: string;     // Default: #fff
  pillColor?: string;     // Default: #000
  textColor?: string;     // Default: #000
  activeTextColor?: string; // Default: #fff
}

export default function PillNav({
  navItems,
  logo,
  logoAlt = "Company Logo",
  baseColor = "#ffffff",
  pillColor = "#0066CC", // Blue color for hover
  textColor = "#000000",
  activeTextColor = "#000000", // Black text for active state
}: PillNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<HTMLLIElement[]>([]);

  // 1. Setup Refs for list items
  useEffect(() => {
    if (navRef.current) {
      setItems(Array.from(navRef.current.querySelectorAll("li")) as HTMLLIElement[]);
    }
  }, [navItems]);

  // 2. Handle Hover State Animation (not active state)
  useEffect(() => {
    if (items.length === 0 || !pillRef.current) return;

    const ctx = gsap.context(() => {
      // Function to move the pill
      const movePillTo = (target: HTMLElement) => {
        if (!pillRef.current) return;
        
        gsap.to(pillRef.current, {
          x: target.offsetLeft,
          width: target.offsetWidth,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)", // Snappy effect
        });
      };

      // Function to hide the pill
      const hidePill = () => {
        if (!pillRef.current) return;
        gsap.to(pillRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      };

      // Set initial pill state - hidden
      gsap.set(pillRef.current, {
        x: 0,
        width: 0,
        opacity: 0,
      });

      // Add Event Listeners - only show pill on hover
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => movePillTo(item));
        
        // On mouse leave, hide the pill
        item.addEventListener("mouseleave", () => {
          hidePill();
        });
      });
    }, navRef);

    return () => ctx.revert();
  }, [items, pathname]);

  return (
    <nav 
      className="flex items-center px-4 py-2 rounded-full shadow-md backdrop-blur-md" 
      style={{ backgroundColor: baseColor }}
    >
      {/* Navigation List */}
      <div className="relative" ref={navRef}>
        {/* The Moving Pill with Blur Effect - Only visible on hover */}
        <div
          ref={pillRef}
          className="absolute top-0 left-0 h-full rounded-full -z-10 pointer-events-none backdrop-blur-sm shadow-lg"
          style={{ 
            backgroundColor: pillColor, 
            borderRadius: '9999px',
            boxShadow: `0 4px 15px rgba(0, 102, 204, 0.3)`,
            opacity: 0,
          }}
        />

        <ul className="flex gap-1 relative z-10">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <li 
                key={index} 
                className="relative px-4 py-2 cursor-pointer text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-full"
              >
                <Link 
                  href={item.href} 
                  style={{ 
                    color: textColor, // Always black text
                    textDecoration: 'none',
                    borderBottom: isActive ? `2px solid ${pillColor}` : 'none',
                    paddingBottom: isActive ? '2px' : '0',
                  }}
                  className="block transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
