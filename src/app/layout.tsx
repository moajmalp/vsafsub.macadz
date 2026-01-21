import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Vsaf Adz | Better Ideas for Your Better Growth",
  description: "Innovative advertising solutions that get your brand seen, remembered and delivered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
