var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var config = require('../config');
var error = require('../util/error');

// process, prefix, and optimize sass files
gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(sass())
    .on('error', error)
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest(config.sass.dist));
});