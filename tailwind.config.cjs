/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-dark': '#ABC4AA',
        'accent-light': '#7E6C6C',
        dark: '#171614',
        light: '#F8F4E3',
      },
      fontSize: {
        '2xl': '3.125rem', // 50px, for the hero
        xl: '2.5rem', // 40px, for the smaller titles, and smaller hero
        lg: '1.75rem', // 28px, for the content titles
        base: '1.5rem', // 24px for some content, to rem = 1.5rem
        sm: '1.25rem', // 20px, for the hero content
        xs: '1rem', // 16px, for the content
        tiny: '0.875rem', // 14px, for some content
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        nunito: ['Nunito Variable', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography'),
  ],
};
