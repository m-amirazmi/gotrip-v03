/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					1: '#13357B',
					2: '#163C8C',
					3: '#3554D1',
					4: '#0D2857',
				},
				secondary: {
					1: '#F8D448',
				},
				'text-color': {
					1: '#051036',
					2: '#697488',
				},
				'bg-color': {
					1: '#F5F5F5',
					2: '#E5F0FD',
					3: '#EBFCEA',
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
