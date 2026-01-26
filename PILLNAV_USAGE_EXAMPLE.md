# PillNav Component Usage Example

## Installation

First, install GSAP (if not already installed):
```bash
npm install gsap
```

## Basic Usage

```tsx
import PillNav from "@/components/PillNav";

export default function Page() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <PillNav 
        navItems={navItems}
        logo="/path/to/logo.png"
        logoAlt="Company Logo"
        baseColor="#ffffff"
        pillColor="#ff4d00"
        textColor="#000000"
        activeTextColor="#ffffff"
      />
      {/* Your page content */}
    </div>
  );
}
```

## With Custom Colors

```tsx
<PillNav 
  navItems={navItems}
  baseColor="#1a1a1a"      // Dark background
  pillColor="#00ff88"      // Green pill
  textColor="#ffffff"      // White text
  activeTextColor="#000000" // Black text when active
/>
```

## Without Logo

```tsx
<PillNav 
  navItems={navItems}
  // logo prop omitted
/>
```

## Features

- ✅ Animated pill that follows the active link
- ✅ Smooth hover animations with elastic easing
- ✅ Automatically detects active route using Next.js `usePathname`
- ✅ Supports nested routes (e.g., `/services/web-design` matches `/services`)
- ✅ Fully customizable colors
- ✅ Responsive and accessible

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navItems` | `NavItem[]` | Required | Array of navigation items with `label` and `href` |
| `logo` | `string?` | - | Optional logo image URL |
| `logoAlt` | `string` | `"Company Logo"` | Alt text for logo |
| `baseColor` | `string` | `"#ffffff"` | Background color of the nav container |
| `pillColor` | `string` | `"#ff4d00"` | Color of the animated pill |
| `textColor` | `string` | `"#000000"` | Default text color |
| `activeTextColor` | `string` | `"#ffffff"` | Text color when link is active |
