import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OmniERP — Next-Gen Enterprise Operating Platform",
  description: "Accelerate your enterprise with integrated HR & biometric attendance, auto car dealership management, intelligent POS, inventory tracking, and multi-branch operations in one unified system.",
  keywords: [
    "ERP System",
    "Car Dealership Management",
    "Biometric Attendance",
    "POS System",
    "Cambodia ERP",
    "Enterprise Software",
    "SaaS ERP"
  ],
  authors: [{ name: "OmniERP Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Kantumruy+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-base-100 text-base-content min-h-screen selection:bg-primary selection:text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Kantumruy Pro', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
