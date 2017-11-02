module.exports = {
  config: {
    description: 'Path to config file',
    type: 'string',
    default: 'aw.config.js',
  },
  url: {
    description: 'Url to html file',
    type: 'string',
    demandOption: true,
  },
  glob: {
    description: 'Glob pattern',
    default: ['test/**/*.spec.js'],
    type: 'array',
  },
  coverage: {
    description: 'Generate coverage?',
    default: false,
    type: 'boolean',
  },
  'mocha.ui': {
    description: 'Test interface',
    default: 'bdd',
    type: 'string',
  },
  'mocha.timeout': {
    description: 'Timeout',
    default: 2000,
    type: 'number',
  },
  'mocha.useColors': {
    description: 'Use colors',
    default: true,
    type: 'boolean',
  },
  'mocha.reporter': {
    description: 'Reporter',
    default: 'min',
    type: 'string',
  },
  'client.port': {
    description: 'Chrome port',
    default: 9222,
    type: 'number',
  },
  'chrome.launch': {
    description: 'Launch Chrome?',
    default: true,
    type: 'boolean',
  },
  'chrome.devtools': {
    description: 'Open Chrome with dev tools?',
    default: false,
    type: 'boolean',
  },
  'chrome.port': {
    description: 'Chrome port',
    default: 9222,
    type: 'number',
  },
  'chrome.chromeFlags': {
    description: 'Chrome flags',
    default: ['--headless', '--disable-gpu', '--allow-file-access-from-files'],
    type: 'array',
  },
  'http.port': {
    description: 'Listen on this http port',
    default: 9676,
    type: 'number',
  },
  'http.root': {
    description: 'Root folders to serve',
    default: ['./'],
    type: 'array',
  },
  'nyc.require': {
    description: 'Require path',
    default: [],
    type: 'array',
  },
  'nyc.cwd': {
    description: 'Current working directory',
    default: './',
    type: 'string',
  },
  'nyc.include': {
    description: 'Include glob',
    default: ['**/*.(js|ts)'],
    type: 'array',
  },
  'nyc.defaultExclude': {
    description: 'Default exclude glob',
    default: ['**/coverage/**', '**/external/**', '**/autogenerated/**', '**/*.(html|css|json|txt|ttf|woff|svg)', '**/*.spec.(js|ts)', '*require*.js', '*sinon*.js', '*chai*.js'],
    type: 'array',
  },
  'nyc.exclude': {
    description: 'exclude glob',
    default: [],
    type: 'array',
  },
  'nyc.sourceMap': {
    description: 'Should nyc detect and handle source maps?',
    default: true,
    type: 'boolean',
  },
  'nyc.babel': {
    description: 'Sets up a preferred babel test environment e.g add `babel-register` to `nyc.require` `nyc.sourceMap=false` and `nyc.instrument=./lib/instrumenters/noop`',
    default: true,
    type: 'boolean',
  },
  'nyc.tempDirectory': {
    description: 'Directory to output raw coverage information to',
    default: './coverage/.nyc_output',
    type: 'string',
  },
  'nyc.reporter': {
    description: 'Coverage reporter(s) to use',
    default: ['lcov', 'text-summary'],
    type: 'array',
  },
  'nyc.reporterDir': {
    description: 'Directory to output coverage reports in',
    default: 'coverage',
    type: 'string',
  },
};
