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
				cream: '#FDF3F0',
				darkGrey: '#333136',
				lightGrey: '#F1F3F5',
			},
			backgroundImage: {
				'hero-home': 'url("/assets/home/desktop/bg-pattern-hero-home.svg")',
				'call-to-action':
					'url("/assets/shared/desktop/bg-pattern-call-to-action.svg")',
				'small-circle':
					'url("/assets/shared/desktop/bg-pattern-small-circle.svg")',
				'two-circles':
					'url("/assets/shared/desktop/bg-pattern-two-circles.svg")',
				'three-circles':
					'url("/assets/shared/desktop/bg-pattern-three-circles.svg")',
				leaf: 'url("/assets/shared/desktop/bg-pattern-leaf.svg")',
				'contact-mobile':
					'url("/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg")',
				'contact-desktop':
					'url("/assets/contact/desktop/bg-pattern-hero-desktop.svg")',
				'design-intro-mobile':
					'url("/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg")',
				'design-intro-tablet':
					'url("/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg")',
				'web-design-intro-desktop':
					'url("/assets/web-design/desktop/bg-pattern-intro-web.svg")',
				'graphic-design-intro-desktop':
					'url("/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg")',
				'app-design-intro-desktop':
					'url("/assets/app-design/desktop/bg-pattern-intro-app.svg")',
				'about-desktop':
					'url("/assets/about/desktop/bg-pattern-hero-about-desktop.svg")',
				'about-mobile':
					'url("/assets/about/mobile/bg-pattern-hero-about-mobile.svg")',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
