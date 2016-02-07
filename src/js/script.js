// customized modernizr build
// require('./util/_modernizr');

// fastclick eliminates click delay in certain browsers
var fastclick = require('fastclick');
fastclick(document.body);

// svg polyfill for better xlink support
var svg4everybody = require('svg4everybody');
svg4everybody();
