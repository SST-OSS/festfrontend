/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xsm: '320px',
			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1280px',

			'2xl': '1536px',
		},

		colors: {
			primary: '#FFFFFF',
			secondary: '',
			background: '',
			contrast: '',
		},

		extend: {},
	},
	plugins: [],
};
