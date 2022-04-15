module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['League Spartan'],
		},
		extend: {
			boxShadow: {
				'3xl': '0 75px 100px -50px rgba(56, 66, 85, 50.32%)',
			},
		},
	},
	plugins: [],
};
