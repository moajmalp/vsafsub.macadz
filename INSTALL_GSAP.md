# Installing GSAP

Your npm is currently configured in offline mode, which is preventing GSAP from being installed. Here are the steps to install it:

## Option 1: Install via Terminal (Recommended)

1. Open your terminal in the project directory
2. Run one of these commands:

```bash
# If you have network access, temporarily disable offline mode:
npm install gsap --offline=false

# Or if that doesn't work, try:
npm install gsap --registry https://registry.npmjs.org/

# Or simply:
npm install
```

## Option 2: Manual Installation

If npm install continues to fail:

1. Download GSAP manually from: https://www.npmjs.com/package/gsap
2. Or use yarn instead:
   ```bash
   yarn add gsap
   ```

## Option 3: Fix npm Configuration

If you need to change npm's offline setting:

```bash
# Check current offline setting
npm config get offline

# Disable offline mode (if needed)
npm config set offline false

# Then install
npm install gsap
```

## Verify Installation

After installation, verify GSAP is installed:

```bash
npm list gsap
```

You should see:
```
vsafsub.macadz.com@0.1.0
`-- gsap@3.12.5
```

## Current Status

✅ GSAP is already listed in `package.json` (version ^3.12.5)
❌ GSAP package is not installed in `node_modules`
✅ PillNav component is ready and waiting for GSAP

Once GSAP is installed, your PillNav component will work perfectly!
