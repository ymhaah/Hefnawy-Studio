import { error } from "console";
import { s } from "framer-motion/client";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        extend: {
            colors: {
                error: "var(--error-clr-light)",
                success: "var(--success-clr-light)",
                border: "var(--border-clr-light)",
                background: {
                    light: "var(--bg-clr-light)",
                    dark: "var(--bg-clr-dark)",
                },
                foreground: "var(--bg-clr-dark)",
                primary: {
                    DEFAULT: "var(--accent-clr-light)",
                    foreground: "var(--accent-clr-dark)",
                },
                secondary: {
                    DEFAULT: "var(--accent-clr-light)",
                    foreground: "var(--accent-clr-dark)",
                },
                destructive: {
                    DEFAULT: "var(--error-clr-light)",
                    foreground: "var(--accent-clr-dark)",
                },
                muted: {
                    DEFAULT: "var(--mono-clr-dark)",
                    foreground: "var(--mono-clr-light)",
                },
                accent: {
                    DEFAULT: "var(--accent-clr-light)",
                    foreground: "var(--accent-clr-dark)",
                },
                popover: {
                    DEFAULT: "var(--bg-clr-light)",
                    foreground: "var(--bg-clr-dark)",
                },
                card: {
                    DEFAULT: "var(--bg-clr-light)",
                    foreground: "var(--bg-clr-dark)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
