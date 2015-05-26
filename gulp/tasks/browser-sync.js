var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');

// complete all initial tasks before starting browser-sync
gulp.task('browser-sync', ['sass-init', 'js-init', 'images', 'svgstore', 'swig'], function() {
  return browserSync(config.browserSync.opts);
});