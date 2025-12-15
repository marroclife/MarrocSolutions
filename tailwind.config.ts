import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: "class",
    content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./rituais/**/*.{ts,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
            // --- NOVA IDENTIDADE (MATRIX / NEON) ---
            'neon-green': '#00FF94', // O Verde do seu Instagram
            'deep-emerald': '#064e3b', // Fundo verde escuro
            
            // HACK DE MIGRAÇÃO: 
            // Redefinimos 'tech-cyan' para ser Verde Neon.
            // Assim, componentes antigos ficam verdes automaticamente.
            'tech-cyan': '#00FF94', 

            // --- CORES BASE DO SITE ---
  			forest: '#0E3B2E',
  			ritual: '#050505', // Preto Absoluto
  			gold: '#C7A94B',
  			paper: '#E0E0E0',  // Texto Prata/Branco

            // --- TEMAS ESPECÍFICOS (SERENA / TAMIRES) ---
            cosmic: {
                900: '#0f0e13', 
                800: '#15121e', 
                700: '#1e1a2b',
            },
            earth: {
                gold: '#c6a87c', 
                copper: '#e27d60', 
                wood: '#8b5a2b', 
                cream: '#f0e6d2', 
            },
            moss: {
                900: '#151e1c', 
                800: '#1c2624',
            },
            silk: '#e8e4dc',
            'gold-rose': '#e6b8a2',
            'refined-gold': '#d4af37',

            // --- SHADCN UI (OVERRIDE DARK) ---
  			background: '#050505', 
  			foreground: '#E0E0E0', 
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
        backgroundImage: {
            'void-gradient': 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
            'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
        },
        dropShadow: {
            'glow': '0 0 10px rgba(199, 169, 75, 0.5)',
            'tech-glow': '0 0 10px rgba(0, 255, 148, 0.5)', // Atualizado para Verde
        },
  		boxShadow: {
  			ritual: '0 10px 30px rgba(199,169,75,0.15)'
  		},
  		fontFamily: {
  			display: ['var(--font-display)'],
  			body: ['var(--font-body)'],
            mono: ['var(--font-mono)'], // Adicionado Mono
            serif: ['var(--font-serif)'], 
            playfair: ['"Playfair Display"', 'serif'], 
            montserrat: ['Montserrat', 'sans-serif'], 
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
            'slow-float': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
            },
            'fade-in-up': {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
            'slow-float': 'slow-float 6s ease-in-out infinite',
            'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
  		}
  	}
  },
  plugins: [tailwindAnimate],
}
export default config