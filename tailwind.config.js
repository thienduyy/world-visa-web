/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./@/**/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./modules/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
				md: '3rem',
				lg: '4rem',
				xl: '8rem',
				'2xl': '8rem',
			},
			screens: {
				md: '640px',
				lg: '1024px',
				'2xl': '1400px',
			},
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#188AC1',
					foreground: 'hsl(var(--primary-foreground))',
					50: '#E2F6FC',
					100: '#D3EFFA',
					200: '#ACE0F4',
					300: '#75C8EB',
					400: '#35A7DB',
					500: '#188AC1',
					600: '#196EA2',
					700: '#195A83',
					800: '#1E4B6C',
					900: '#1D405C',
				},
				secondary: {
					DEFAULT: '#737373',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				dark: {
					DEFAULT: '#333333',
				},
				gray: {
					DEFAULT: '#737373',
				},
			},
			borderRadius: {
				lg: '20px',
				md: '8px',
				sm: '4px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
