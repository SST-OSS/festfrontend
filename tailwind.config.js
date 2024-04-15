import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

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
		fontSize: {
			'5xl': '3rem',
		},
		colors: {
			primary: '#FFFFFF',
			secondary: '#EBCBFF',
			background: '#000000',
			contrast: '',
			grey: '#969696',
			secondaryBackground: '#1C1C1C',
			bluebg: '#CBE3FF',
			neon: '#D3F941',
		},
		fontFamily: {
			sans: ['Lexend', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [addVariablesForColors],
};

/**
 * @param {{ addBase: Function, theme: Function }} param0
 */
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
