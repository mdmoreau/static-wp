var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var error = require('../util/error');

// process, prefix, and optimize sass files with sourcemaps
gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', error)
    .pipe(postcss(config.sass.postcss))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
