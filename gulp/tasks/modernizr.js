var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var config = require('../config');

// generate a customized modernizr build by crawling source files
gulp.task('modernizr', function() {
  return gulp.src(config.modernizr.src)
    .pipe(modernizr('_modernizr.js'))
    .pipe(gulp.dest(config.modernizr.out));
});