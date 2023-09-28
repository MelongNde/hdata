import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-50': '#fffff',
        'dark-100': '#efefef',
        'dark-200': '#dcdcdc',
        'dark-300': '#bdbdbd',
        'dark-400': '#989898',
        'dark-500': '#7c7c7c',
        'dark-600': '#656565',
        'dark-700': '#525252',
        'dark-800': '#464646',
        'dark-900': '#3d3d3d',
        'dark-950': '#292929',
        'primary-50': '#EEF8FF',
        'primary-100': '#D9EDFF',
        'primary-200': '#BBE1FF',
        'primary-300': '#8DCFFF',
        'primary-400': '#57B3FF',
        'primary-500': '#3092FF',
        'primary-600': '#1A73F6',
        'primary-700': '#125CE3',
        'primary-800': '#164BB7',
        'primary-900': '#163D85',
        'primary-950': '#142957',

      }
    },
  },
  plugins: [],
}
export default config
