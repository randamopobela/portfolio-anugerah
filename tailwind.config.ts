import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "normal-hover": "#0076E4",
            },
        },
    },
    plugins: [],
} satisfies Config;
