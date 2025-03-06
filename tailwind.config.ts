import { blackA, violet, mauve } from '@radix-ui/colors';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet,
        ...mauve,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customColour: '#c39b60'
      },
    },
  },
  plugins: [],
} satisfies Config;
