/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			display: ['Open Sans', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
		extend: {
			fontSize: {
				14: '14px',
			},
			backgroundColor: {
				'very-light-gray': '#FAFBFB',
				'main-bg': '#F7F7F7',
				'main-dark-bg': '#20232A',
				'secondary-dark-bg': '#33373E',
				'light-gray': '#F7F7F7',
				'half-transparent': 'rgba(0, 0, 0, 0.5)',
			},
			borderWidth: {
				1: '1px',
			},
			borderColor: {
				color: 'rgba(0, 0, 0, 0.1)',
			},
			width: {
				400: '400px',
				760: '760px',
				780: '780px',
				800: '800px',
				1000: '1000px',
				1200: '1200px',
				1400: '1400px',
			},
			height: {
				80: '80px',
			},
			minHeight: {
				590: '590px',
			},
			backgroundImage: {
				'hero-pattern': "url('/Coins_Two Color.svg')",
			},
			colors: {
				metal: '#565584',
				tahiti: '#3ab7bf',
				silver: '#ecebff',
				brownLight: '#6f4518',
				brownDefault: '#583101',
				headerDefault: '#293847',
				headerLight: '#293847',
				basketBtn: '#2bb04a',
			},
			zIndex: {
				100: '1000',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
