var browserify = require('browserify');
var gulp = require('gulp');
var util = require('gulp-util');
var moment = require('moment');
var watchify = require('watchify');
var config = require('../config');
var bundle = require('../util/bundle');

// setup browserify and wrap with watchify
var b = watchify(browserify(config.browserify.src, config.browserify.opts));

// update bundle when a source file changes
b.on('update', function() {
  return bundle(b);
});

// display the compile time after updating
b.on('time', function(time) {
  var duration = moment.duration(time);
  util.log('Updated', util.colors.cyan('\'browserify\''), 'in', util.colors.magenta(duration + ' ms'));
});

// create watchify bundle
gulp.task('watchify', function() {
  return bundle(b);
});
