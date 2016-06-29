// svg polyfill for better xlink support
var svg4everybody = require('svg4everybody');
svg4everybody();

// automatically require all modules
require('./modules/**/*.js', {mode: 'expand'});
