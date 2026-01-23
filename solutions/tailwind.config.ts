import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
    darkMode: "class",
    content: [
    // Caminhos ajustados para garantir a varredura correta dentro da subpasta solutions
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}", // Adicionado por segurança caso use Pages router
    "./src/**/*.{ts,tsx}",   // Adicionado caso tenha arquivos em src
  ],
  theme: {
    extend: {
        colors: {
            'neon-green': '#00FF94',
            'deep-emerald': '#064e3b',
            'tech-cyan': '#00FF94', 
            forest: '#0E3B2E',
            ritual: '#050505',
            gold: '#C7A94B',
            paper: '#E0E0E0',
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
            'tech-glow': '0 0 10px rgba(0, 255, 148, 0.5)',
        },
        boxShadow: {
            ritual: '0 10px 30px rgba(199,169,75,0.15)'
        },
        fontFamily: {
            display: ['var(--font-display)', 'serif'],
            body: ['var(--font-body)', 'sans-serif'],
            mono: ['var(--font-mono)', 'monospace']
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        },
        keyframes: {
            slideDown: {
                from: {
                    height: '0'
                },
                to: {
                    height: 'var(--radix-accordion-content-height)'
                }
            },
            slideUp: {
                from: {
                    height: 'var(--radix-accordion-content-height)'
                },
                to: {
                    height: '0'
                }
            }
        },
        animation: {
            slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'bounce-slow': 'bounce 3s infinite',
        }
    }
  },
  plugins: [tailwindAnimate],
}
export default config