import type { Metadata } from "next";

import { Toaster } from "sonner";

import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./index.scss";

// ? Sans
const inter = Inter({
    subsets: ["latin"],
    variable: "--ff-inter",
});

const ModernSociety = localFont({
    src: "../../public/Fonts/modern_society/ModernSociety-Regular.otf",
    fallback: ["Inter"],
    weight: "400",
    variable: "--ff-modern_society",
});

// serif
const playfair_display = Playfair_Display({
    subsets: ["latin"],
    variable: "--ff-playfair",
});

export const metadata: Metadata = {
    title: "Hefnawy Studio",
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
                className={`${inter.variable} ${playfair_display.variable} ${ModernSociety.variable}`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
