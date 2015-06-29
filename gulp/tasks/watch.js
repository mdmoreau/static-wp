var gulp = require('gulp');
var config = require('../config');

// complete browser-sync before watching any files
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.modernizr.src, ['modernizr']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.svgstore.src, ['svgstore', 'svgstore-sass']);
  gulp.watch(config.svgstore.template, ['svgstore-sass']);
  gulp.watch(config.nunjucks.watch, ['nunjucks']);
});