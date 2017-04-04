// svg polyfill for better use element support
require('svgxuse');

// automatically require all modules
require('./modules/**/*.js', {mode: 'expand'});
