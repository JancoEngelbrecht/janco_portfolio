/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        olivegreen: '#728488',
        black: colors.black,
        white: colors.white,
      },

      fontFamily: {
        lucida: ['"Lucida Console"', 'monospace'],
        segoe: ['"Segoe UI Variable Display"', 'sans-serif'],
        porter: ['"Porter Sans Block"', ...defaultTheme.fontFamily.sans],
      },

      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },

      hyphens: {
        auto: 'auto',
        none: 'none',
      },
    },
  },

  plugins: [
    // Text Shadow Plugin
    plugin(function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow');
      const utilities = Object.entries(textShadow).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [`.text-shadow-${key}`]: { textShadow: value },
        }),
        {}
      );

      addUtilities(utilities, ['responsive']);
    }),

    // Additional Utilities
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.hyphens-auto': {
          hyphens: 'auto',
        },
        '.hyphens-none': {
          hyphens: 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};