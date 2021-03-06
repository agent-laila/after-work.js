'use strict';

module.exports = {
  url: 'http://localhost:9676/examples/typescript/index.html',
  glob: ['examples/typescript/*.spec.ts'],
  watchGlob: ['examples/typescript/*.ts'],
  'instrument.exclude': [
    '**/main.js',
  ],
  'transform.typescript.config': 'examples/typescript/tsconfig.json',
};
