/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-gray": "#303841",
				gray: "#3A4750",
				yellow: "#F6C90E",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			keyframes: {
				slideLeftToRight: {
					"0%": { transform: "translateX(-500px)" },
					"100%": { transform: "translateX(0px)" },
				},
			},
			animation: {
				slideLeftToRight1s:
					"slideLeftToRight 1s ease-in-out ",
				"slideLeftToRight1.5s":
					"slideLeftToRight 1.5s ease-in-out ",
			},
		},
	},
	plugins: [],
}
