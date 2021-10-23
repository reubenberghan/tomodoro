module.exports = {
  '*.{js,jsx,ts,tsx,css,md}': 'prettier --write',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
