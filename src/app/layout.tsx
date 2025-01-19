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

// ? serif
const playfair_display = Playfair_Display({
    subsets: ["latin"],
    variable: "--ff-playfair",
});

const Rakkas = localFont({
    src: "../../public/Fonts/Rakkas/Rakkas-Regular.ttf",
    fallback: ["Inter"],
    weight: "400",
    variable: "--ff-rakkas",
});
const Diwani = localFont({
    src: "../../public/Fonts/Diwani_bent/Diwani-Bent.ttf",
    fallback: ["Inter"],
    weight: "400",
    variable: "--ff-Diwani",
});

export const metadata: Metadata = {
    title: "Hefnawy | Studio",
    // colorScheme: "dark light",
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
                className={`${inter.variable} ${playfair_display.variable} ${ModernSociety.variable} ${Rakkas.variable} ${Diwani.variable}`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
