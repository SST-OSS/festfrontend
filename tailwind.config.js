/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xsm: '320px',
			sm: '640px',

			md: '1000px',

			lg: '1100px',

			xl: '1780px',

			'2xl': '1286px',
		},

		colors: {
			primary: '#FFFFFF',
			secondary: '#EBCBFF',
			background: '#000000',
			contrast: '',
			grey: '#969696',
			secondaryBackground: '#1C1C1C',
			bluebg: '#CBE3FF',
		},

		fontFamily: {
			sans: ['Lexend', 'sans-serif'],
		},

		extend: {},
	},
	plugins: [],
};
