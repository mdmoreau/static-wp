var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

// complete browser-sync before watching any files
gulp.task('watch', ['browser-sync'], function() {
  watch(config.sass.src, function() {
    gulp.start('sass');
  });
  watch(config.modernizr.src, function() {
    gulp.start('modernizr');
  });
  watch(config.images.src, function() {
    gulp.start('images');
  });
  watch(config.svgstore.src, function() {
    gulp.start('svgstore', 'svgstore-sass');
  });
  watch(config.svgstore.template, function() {
    gulp.start('svgstore-sass');
  });
  watch(config.nunjucks.watch, function() {
    gulp.start('nunjucks');
  });
});