import type { Config } from 'tailwindcss'
import tailwindForms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [tailwindForms],
}
export default config
