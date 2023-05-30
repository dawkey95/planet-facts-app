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

				planets: {
					mercury: 'var(--mercury)',
					venus: 'var(--venus)',
					earth: 'var(--earth)',
					mars: 'var(--mars)',
					jupiter: 'var(--jupiter)',
					saturn: 'var(--saturn)',
					uranus: 'var(--uranus)',
					neptune: 'var(--neptune)',
				},
			},

			fontFamily: {
				antonio: ['var(--font-antonio)'],
				spartan: ['var(--font-spartan)'],
			},

			fontSize: {
				h1: [
					'5rem',
					{
						lineHeight: '6.5rem',
						fontWeight: '400',
					},
				],

				h2: [
					'5rem',
					{
						lineHeight: '3.25rem',
						letterSpacing: '-1.5px',
						fontWeight: '400',
					},
				],

				h3: [
					'0.75rem',
					{
						lineHeight: '1.5625rem',
						letterSpacing: '2.5712px',
						fontWeight: '700',
					},
				],

				h4: [
					'0.6875rem',
					{
						lineHeight: '1.5625rem',
						letterSpacing: '1px',
						fontWeight: '400',
					},
				],

				body: [
					'0.875rem',
					{
						lineHeight: '1.5625rem',
						fontWeight: '400',
					},
				],

				logo: [
					'1.75rem',
					{
						lineHeight: '2.25rem',
						letterSpacing: '-1.05px',
						fontWeight: '400',
					},
				],
			},
		},
	},
	plugins: [require('daisyui')],
};
