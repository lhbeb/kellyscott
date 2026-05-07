/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                'primary-dark': '#2563eb',
                secondary: '#dbeafe',
                'secondary-dark': '#bfdbfe',
                accent: '#60a5fa',
                'bg-dark': '#0f172a',
                'bg-light': '#f8fafc',
                'text-dark': '#1e293b',
                'text-light': '#f8fafc',
            },
        },
    },
    plugins: [],
}
