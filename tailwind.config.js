/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'paper': '#faf9f7',
        'paper-dark': '#f0eeeb',
        'ink': '#1a1a1a',
        'ink-light': '#4a4a4a',
        'accent': '#952327',
        'accent-dark': '#7a1c1f',
        'accent-light': '#b83a3e',
        'border-paper': '#d4d0cb',
        'border-light': '#e8e5e1',
      },
      fontFamily: {
        'headline': ['Merriweather', 'Georgia', 'serif'],
        'body': ['Source Sans 3', 'Arial', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
