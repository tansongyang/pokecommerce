import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pokeballred: 'var(--color-pokeballred)',
        pokemonblue: 'var(--color-pokemonblue)',
        pokemonyellow: 'var(--color-pokemonyellow)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        error: 'var(--color-pokeballred)',
      },
    },
  },
  plugins: [],
}
export default config
