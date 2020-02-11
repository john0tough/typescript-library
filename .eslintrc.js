module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  ignorePatterns: ['node_modules/', 'build/'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    curly: [2],
    'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignore: [1] }],    
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off"
  },
  // Use for enable require sorting
  // "overrides": [
  //   {
  //     "files": "server/**/*.js",
  //     "rules": {
  //       "simple-import-sort/sort": "off",
  //       "import/order": ["error", { "newlines-between": "always" }]
  //     }
  //   }
  // ]
};
