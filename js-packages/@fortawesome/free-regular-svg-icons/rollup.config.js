const banner = require('rollup-plugin-banner2');


const licenseText = `/*!
 * Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
`;

module.exports = [
  
  {
    input: 'index.js',
    output: {
      file: 'index.mjs',
      format: 'cjs',
    },
    plugins: [
      banner(() => licenseText),
      
    ],
  },
];
