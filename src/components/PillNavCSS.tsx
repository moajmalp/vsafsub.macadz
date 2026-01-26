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

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
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
            className="absolute top-0 left-0 h-full rounded-full -z-10 pointer-events-none transition-all duration-500 ease-out backdrop-blur-sm shadow-lg"
            style={{ 
              backgroundColor: pillColor, 
              borderRadius: '9999px',
              transform: `translateX(${hoveredItemData.x}px)`,
              width: `${hoveredItemData.width}px`,
              boxShadow: `0 4px 15px rgba(106, 14, 172, 0.3)`,
            }}
          />
        )}

        <ul className="flex gap-1 relative z-10">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            
            return (
              <li 
                key={index} 
                className="relative px-4 py-2 cursor-pointer text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.href} 
                  style={{ 
                    color: isActive ? activeTextColor : textColor,
                    textDecoration: 'none',
                    borderBottom: isActive ? `2px solid ${pillColor}` : 'none',
                    paddingBottom: isActive ? '2px' : '0',
                  }}
                  className="block transition-all duration-300 !text-inherit"
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