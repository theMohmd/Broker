export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: { primary: "#831843" },
            boxShadow: {
                "custom": "0 0 15px -5px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
