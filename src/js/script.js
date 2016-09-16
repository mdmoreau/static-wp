// svg polyfill for better use element support
require('svgxuse');

// track input methods for styling
require('what-input');
document.body.setAttribute('data-whatinput-formswitching', '');

// automatically require all modules
require('./modules/**/*.js', {mode: 'expand'});
