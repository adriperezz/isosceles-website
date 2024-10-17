/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        128: '40rem',
      },
      textColor: {
        DEFAULT: '#1f2937',
      },
    },
  },
  plugins: [],
};
