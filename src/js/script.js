// svg polyfill for better use element support
require('svgxuse');

// remove outlines while maintaining accessibility
require('./util/_outline.js');

// automatically require all modules
require('./modules/**/*.js', {mode: 'expand'});
