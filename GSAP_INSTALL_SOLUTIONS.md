# GSAP Installation Solutions

Your npm appears to be having network/configuration issues. Here are several solutions to install GSAP:

## Current Status
- ✅ GSAP is listed in `package.json` (^3.12.5)
- ❌ npm commands are hanging/unresponsive
- ❌ GSAP not installed in node_modules

## Solution 1: Fix npm Configuration (Try First)

1. **Reset npm configuration:**
   ```bash
   npm config delete registry
   npm config delete offline
   npm cache clean --force
   ```

2. **Then try installing:**
   ```bash
   npm install gsap
   ```

## Solution 2: Remove Lock File and Retry

1. **Delete package-lock.json:**
   ```bash
   del package-lock.json
   # or on Linux/Mac: rm package-lock.json
   ```

2. **Try installing again:**
   ```bash
   npm install
   ```

## Solution 3: Use Different Package Manager

1. **Install pnpm:**
   ```bash
   npm install -g pnpm
   pnpm add gsap
   ```

2. **Or install yarn:**
   ```bash
   npm install -g yarn
   yarn add gsap
   ```

## Solution 4: Manual Download (Last Resort)

1. **Download GSAP manually:**
   - Go to: https://www.npmjs.com/package/gsap
   - Download the latest version
   - Extract to `node_modules/gsap/`

2. **Or use CDN temporarily (for testing):**
   ```tsx
   // In your PillNav component, replace the import with:
   // import gsap from "gsap";
   
   // Add this to your public/index.html or layout:
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
   
   // Then in your component, use:
   // declare global {
   //   interface Window {
   //     gsap: any;
   //   }
   // }
   // const gsap = window.gsap;
   ```

## Solution 5: Network Troubleshooting

Your npm might be configured with a proxy or offline mode:

1. **Check npm configuration:**
   ```bash
   npm config list
   ```

2. **Reset to defaults:**
   ```bash
   npm config delete proxy
   npm config delete https-proxy
   npm config set registry https://registry.npmjs.org/
   npm config set offline false
   ```

3. **Clear cache and reinstall:**
   ```bash
   npm cache clean --force
   npm install
   ```

## Quick Test

After trying any solution, test if GSAP is installed:
```bash
npm list gsap
```

You should see: `gsap@3.12.5`

## Alternative: Temporary CSS Animation

If GSAP installation continues to fail, I can help you create a CSS-only version of the pill navigation as a temporary solution while you fix the npm issues.

---

**Recommended order:** Try Solution 1 → Solution 2 → Solution 3 → Contact your system administrator if in a corporate environment.