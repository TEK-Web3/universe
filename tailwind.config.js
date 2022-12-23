/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: ['class', '[data-theme="business"]'],
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
};