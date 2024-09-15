import type { Metadata } from "next";

import { Toaster } from "sonner";

import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
// import "./globals.css";

// sans
const inter = Inter({
    subsets: ["latin"],
    variable: "--ff-inter",
    display: "swap",
});

const Geist = localFont({
    src: [
        {
            path: "/Fonts/Geist/",
            weight: "400",
            style: "normal",
        },
        {
            path: "/Fonts/Geist/",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--ff-geist",
    display: "swap",
});
const ModernSociety = localFont({
    src: "/Fonts/modern_society/ModernSociety-Regular.otf",
    variable: "--ff-modern_society",
    display: "swap",
});

// serif
const playfair_display = Playfair_Display({
    subsets: ["latin"],
    variable: "--ff-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${playfair_display.className} ${ModernSociety.className} ${Geist.className}`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
