/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  arrowParens: 'avoid',
  singleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/app/(.*)$',
    '^@/assets/(.*)$',
    '^@/components/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/config/(.*)$',
    '^@/hooks/(.*)$',
    '^@/lib/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
};

module.exports = config;
