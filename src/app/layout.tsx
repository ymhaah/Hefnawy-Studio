import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./index.scss";
// import icon from "@icon/arrow-small-right.svg";

import heroImage from "../../public/hero.jpeg";

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
    colorScheme: "light",
    keywords: [
        "Hefnawy Studio",
        "Hefnawy",
        "Youssef Hefnawy",
        "Web Design",
        "UI/UX",
        "Frontend Development",
        "Portfolio",
        "Creative Studio",
        "Digital Design",
        "Innovative Websites",
    ],
    robots: {
        index: true,
        follow: true,
    },
    twitter: {
        creator: "@hafanwy",
        card: "summary_large_image",
        description:
            "Hefnawy Studio is a design studio that focuses on creating innovative and visually stunning websites and applications manged by youssef hefnawy.",
        images: [
            {
                url: heroImage.src,
                alt: "Hefnawy Studio",
                width: 1200,
                height: 630,
            },
        ],
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hefnawy-studio.vercel.app/",
        title: "Hefnawy Studio",
        description:
            "Hefnawy Studio is a design studio that focuses on creating innovative and visually stunning websites and applications manged by youssef hefnawy.",
        images: [
            {
                url: heroImage.src,
                alt: "Hefnawy Studio",
                width: 1200,
                height: 630,
            },
        ],
    },
    description:
        "Hefnawy Studio is a design studio that focuses on creating innovative and visually stunning websites and applications manged by youssef hefnawy.",
    themeColor: "#eaebec",
    authors: [
        {
            name: "Hefnawy Studio",
            url: "https://www.linkedin.com/in/youssef-hefnawy/",
        },
    ],

    icons: {
        icon: [{ rel: "icon", type: "image/png", url: "/favicon.png" }],
        apple: "/apple-touch-icon.png",
    },
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
                <Header />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
