/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lucida: ['"Lucida Console"', 'monospace'],
        segoe: ['"Segoe UI Variable Display"', 'sans-serif'],
      },

      hyphens: {
        auto: 'auto',
        none: 'none',
      },
      
      keyframes: {
        bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-10px)' },
            '60%': { transform: 'translateY(-5px)' },
          },  
        movereact: {
            '0%': { transform: 'translate(-80%,0%)', opacity: '1' },
            '100%': { transform: 'translate(0%)', opacity: '1' },
          },
          movetailwind: {
            '0%': { transform: 'translate(-80%,0%)', opacity: '1' },
            '100%': { transform: 'translate(-220%)', opacity: '1' },
          },
          movejavascript: {
            '0%': { transform: 'translate(-80%,0%)', opacity: '1' },
            '100%': { transform: 'translate(-220%,100%)', opacity: '1' },
          },
          movemongodb: {
            '0%': { transform: 'translate(-80%,90%)', opacity: '1' },
            '100%': { transform: 'translate(-200%, -50%)', opacity: '1' },
          },
          movehtml: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(-170%, -40%)', opacity: '1' },
          },
          movegithub: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(-40%, -40%)', opacity: '1' },
          },
          moveazure: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(10%, 115%)', opacity: '1' },
          },
          movecosmosdb: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(80%, 250%)', opacity: '1' },
          },
          movenodejs: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(-220%, 50%)', opacity: '1' },
          },
          movepython: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(10%, 40%)', opacity: '1' },
          },
          movevscode: {
            '0%': { transform: 'translate(-80%,70%)', opacity: '1' },
            '100%': { transform: 'translate(-500%, 60%)', opacity: '1' },
          },

        },
        animation: {
          movereact: 'movereact 1s ease-in-out forwards',
          movetailwind: 'movetailwind 1s ease-in-out forwards',
          movejavascript: 'movejavascript 1s ease-in-out forwards',
          movemongodb: 'movemongodb 1s ease-in-out forwards',
          movehtml: 'movehtml 1s ease-in-out forwards',
          movegithub:'movegithub 1s ease-in-out forwards',
          moveazure:'moveazure 1s ease-in-out forwards',
          movecosmosdb:'movecosmosdb 1s ease-in-out forwards',
          movenodejs:'movenodejs 1s ease-in-out forwards',
          movepython:'movepython 1s ease-in-out forwards',
          movevscode:'movevscode 1s ease-in-out forwards',
          bounce: 'bounce 1s ease-in-out',
        }
    },
  },
  plugins: [ function ({ addUtilities }) {
      const newUtilities = {
        '.hyphens-auto': {
          hyphens: 'auto',
        },
        '.hyphens-none': {
          hyphens: 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

