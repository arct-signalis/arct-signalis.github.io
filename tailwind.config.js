/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,md}'],
  theme: {
    extend: {
      colors: {
        text: '#e5e7eb', // Soft white for text (like SpaceX's clean UI)
        background: '#0a0c10', // Deep black for a futuristic space feel
        primary: '#2563eb', // Bold blue for key elements (SpaceX logo blue)
        secondary: '#94a3b8', // Metallic silver-gray for subtle elements
        accent: '#38bdf8', // Light blue for highlights (like stars or futuristic accents)
        highlight: '#f43f5e', // Bold red for interactive elements (like rockets)
        danger: '#ef4444', // Red for warnings or errors
      },
    }
  },
  plugins: []
};