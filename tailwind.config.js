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
          950: '#050a08',
          900: '#091410',
          800: '#0f2018',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.10)',
        },
        accent: {
          emerald: '#34d399',
          amber: '#fbbf24',
          cream: '#fde68a',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(1200px 600px at 50% -10%, rgba(52,211,153,0.32), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(251,191,36,0.20), transparent 60%), radial-gradient(900px 500px at 10% 80%, rgba(253,230,138,0.16), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(5, 12, 8, 0.5)',
        glow: '0 0 40px rgba(52,211,153,0.35)',
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
