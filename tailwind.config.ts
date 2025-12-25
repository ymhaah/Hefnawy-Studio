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
                gray: {
                    DEFAULT: "hsl(var(--clr-gray))",
                    light400: "hsl(var(--clr-light-gray-400))",
                    light500: "hsl(var(--clr-light-gray-500))",
                    light700: "hsl(var(--clr-light-gray-700))",
                    light800: "hsl(var(--clr-light-gray-800))",
                },
                charcoal: {
                    500: "hsl(var(--clr-dark-charcoal-500))",
                    700: "hsl(var(--clr-dark-charcoal-700))",
                },
                blue: {
                    DEFAULT: "hsl(var(--clr-blue))",
                    dark: "hsl(var(--clr-dark-blue))",
                },
                red: "hsl(var(--clr-red))",
                green: "hsl(var(--clr-green) )",

                bg: "var(--bg-clr-light)",
                txt: "var(--txt-clr-dark)",
                primary: "var(--primary-clr-dark)",
                mono: "var(--mono-clr-dark)",
                border: "var(--border-clr-solid-dark)",
                error: "var(--error-clr-light)",
                success: "var(--success-clr-light)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
};
export default config;
