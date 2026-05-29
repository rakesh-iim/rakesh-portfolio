/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: {
          950: '#070b14',
          900: '#0b1020',
          800: '#101736',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.10)',
        },
        accent: {
          violet: '#a78bfa',
          cyan: '#67e8f9',
          rose: '#fda4af',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(1200px 600px at 50% -10%, rgba(167,139,250,0.35), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(103,232,249,0.18), transparent 60%), radial-gradient(900px 500px at 10% 80%, rgba(253,164,175,0.18), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 12, 28, 0.45)',
        glow: '0 0 40px rgba(167,139,250,0.35)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
