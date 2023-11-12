module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  // @trivago/prettier-plugin-sort-imports
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // prettier-plugin-tailwindcss
  tailwindFunctions: ['clsx'],
}
