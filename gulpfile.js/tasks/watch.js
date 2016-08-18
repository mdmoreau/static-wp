var gulp = require('gulp');
var config = require('../config');

// complete browser-sync before watching any files
gulp.task('watch', function() {
  gulp.watch(config.sass.src, gulp.task('sass'));
  gulp.watch(config.fonts.src, gulp.task('fonts'));
  gulp.watch(config.images.src, gulp.task('images'));
  gulp.watch(config.svgstore.src, gulp.series('svgstore-sass', 'svgstore'));
  gulp.watch(config.svgstore.template, gulp.task('svgstore-sass'));
  gulp.watch(config.theme.src, gulp.task('theme'));
});
