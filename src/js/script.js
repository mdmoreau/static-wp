// customized modernizr build
require('./util/_modernizr');

// fastclick eliminates click delay in certain browsers
var fastclick = require('fastclick');
fastclick(document.body);

// raf polyfill
var requestAnimationFrame = require('raf');

// svg polyfill for better xlink support
var svg4everybody = require('svg4everybody');
svg4everybody();

// global jquery
global.jQuery = require('jquery');

// flickity with imagesloaded
var Flickity = require('flickity');
require('flickity-imagesloaded');

// bridget turns flickity into a jquery plugin
require('jquery-bridget');
jQuery.bridget('flickity', Flickity);

// placeholder attribute polyfill
require('jquery-placeholder');
jQuery('input, textarea').placeholder();
