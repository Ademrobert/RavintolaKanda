import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fcf7ea',
          '100': '#f7eeca',
          '200': '#f1d997',
          '300': '#e9be5b',
          '400': '#e0a42f',
          '500': '#db9423',
          '600': '#b46c1a',
          '700': '#904e18',
          '800': '#783f1b',
          '900': '#66361d',
          '950': '#3b1a0d',
        },
        'secondary': {
          '50': '#fbfbeb',
          '100': '#f3f5cc',
          '200': '#eded9b',
          '300': '#e3de61',
          '400': '#d9cd37',
          '500': '#c9b629',
          '600': '#ad9221',
          '700': '#8b6c1d',
          '800': '#74571f',
          '900': '#634820',
          '950': '#39260f',
        },
        'gray': {
          '50': '#f7f8f8',
          '100': '#edeef1',
          '200': '#d8dbdf',
          '300': '#b6bac3',
          '400': '#8e95a2',
          '500': '#6b7280',
          '600': '#5b616e',
          '700': '#4a4e5a',
          '800': '#40444c',
          '900': '#383a42',
          '950': '#25272c',
        },
        'facebook': {
          '50': '#4267B2',
          '100': '#4267B2',
          '200': '#4267B2',
          '300': '#4267B2',
          '400': '#4267B2',
          '500': '#4267B2',
          '600': '#4267B2',
          '700': '#4267B2',
          '800': '#4267B2',
          '900': '#4267B2',
          '950': '#4267B2',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
