module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  variants: {
    gridTemplateColumns: ['responsive'],
  },

  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      colors: {

      },

      gridTemplateColumns: {
        'repeat-fit': 'repeat(6, minmax(0, 1fr))',
        'md:repeat-fit': 'repeat(5, minmax(0, 1fr))',
        'lg:repeat-fit': 'repeat(6, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gap: {
        defaultX: '2%',
        defaultY: '10px',
      },
    },
    screens: {
      sm: '320px',
      ssm: '350px',
      md: '768px',
      lg: '1024px',
    },
  },

  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  corePlugins: { preflight: true }, // tailwind reset css 활성/비활성 옵션
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-image-rendering')(), // image-rendering plugin
  ],
};
