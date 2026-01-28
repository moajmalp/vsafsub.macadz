"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

export default function PillNavCSS({
  navItems,
  logo,
  logoAlt = "Company Logo",
  baseColor = "#ffffff",
  pillColor = "#6a0eac", // Purple color for hover
  textColor = "#ffffff",
  activeTextColor = "#ffffff", // White text for active state
}: PillNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [hoveredItemData, setHoveredItemData] = useState<{ x: number; width: number } | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    setHoveredItemData({
      x: target.offsetLeft,
      width: target.offsetWidth,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItemData(null);
  };

  return (
    <nav
      className="flex items-center px-4 py-2 rounded-full shadow-md backdrop-blur-md"
      style={{ backgroundColor: baseColor }}
    >
      {/* Navigation List */}
      <div className="relative" ref={navRef}>
        {/* The Moving Pill - Only show on hover (not on active) */}
        {hoveredItemData && (
          <div
            ref={pillRef}
            className="absolute top-0 left-0 h-full rounded-full -z-10 pointer-events-none transition-all duration-500 ease-out backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${pillColor} 0%, #3a0b9f 100%)`,
              borderRadius: '9999px',
              transform: `translateX(${hoveredItemData.x}px)`,
              width: `${hoveredItemData.width}px`,
              boxShadow: `0 10px 25px -5px rgba(106, 14, 172, 0.5), 0 8px 10px -6px rgba(106, 14, 172, 0.5)`,
            }}
          />
        )}

        <ul className="flex gap-1 relative z-10">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li
                key={index}
                className="flex items-center"
              >
                <Link
                  href={item.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    color: isActive ? activeTextColor : textColor,
                  }}
                  className="relative px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full z-20 flex items-center justify-center whitespace-nowrap"
                >
                  {item.label}
                  {isActive && !hoveredItemData && (
                    <div
                      className="absolute inset-0 rounded-full -z-10 opacity-20"
                      style={{ backgroundColor: pillColor }}
                    />
                  )}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: pillColor }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}