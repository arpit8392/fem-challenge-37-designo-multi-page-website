/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				peach: '#E7816B',
				offBlack: '#1D1C1E',
				lightPeach: '#FFAD9B',
				darkGrey: '#333136',
				lightGrey: '#F1F3F5',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
