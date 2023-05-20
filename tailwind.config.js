/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// GRAYSCALE
				black: 'var(--black)',
				white: 'var(--white)',
				lightGray: 'var(--light-gray)',
				darkGray: 'var(--dark-gray)',

				// COLORS
				teal: 'var(--teal)',
				lightBlue: 'var(--light-blue)',
				darkblue: 'var(--dark-blue)',
				purple: 'var(--purple)',
				orange: 'var(--orange)',
				redOrange: 'var(--red-orange)',
				red: 'var(--red)',
				flameRed: 'var(--flame-red)',
			},

			fontFamily: {
				antonio: ['var(--font-antonio)'],
				spartan: ['var(--font-spartan)'],
			},

			fontSize: {
				h1: [
					'12.5rem',
					{
						lineHeight: '12.5rem',
						letterSpacing: '-0.3125rem',
						fontWeight: '700',
					},
				],

				h2: [
					'3.5rem',
					{
						lineHeight: '4.25rem',
						fontWeight: '700',
					},
				],

				h3: [
					'1.5rem',
					{
						lineHeight: '1.75rem',
						letterSpacing: '0.3rem',
						fontWeight: '700',
					},
				],

				h4: [
					'1.25rem',
					{
						lineHeight: '1.75rem',
						letterSpacing: '0.25rem',
						fontWeight: '400',
					},
				],

				h5: [
					'1.125rem',
					{
						lineHeight: '1.75rem',
						fontWeight: '700',
					},
				],

				h6: [
					'0.9375rem',
					{
						lineHeight: '1.75rem',
						letterSpacing: '0.1875rem',
						fontWeight: '400',
					},
				],

				body: [
					'1.125rem',
					{
						lineHeight: '1.75rem',
						fontWeight: '400',
					},
				],
			},
		},
	},
	plugins: [require('daisyui')],
};
