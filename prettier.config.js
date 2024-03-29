module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',

  endOfLine: 'auto',
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  jsxBracketSameLine: false,
  bracketSpacing: true,
}
