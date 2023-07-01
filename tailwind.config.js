const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
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
      padding: px0_10,
      fontSize: px0_100,
      borderRadius: px0_10,
      border: px0_10,
      height: px0_100,

      textColor: ['active'],
      bgColor: ['active'],
      

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
