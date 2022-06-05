module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        letterSpacing: {
            small: "3px",
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
            small: "10px",
            heading: "60px",
        },
        extend: {
            colors: {
                blue: "#001689",
                brown: "#CF9430",
                red: "#E11C23",
            },
        },
    },
    plugins: [],
};
