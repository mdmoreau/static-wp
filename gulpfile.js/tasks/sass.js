var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var clone = require('gulp-clone');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var error = require('../util/error');

// process, prefix, and optimize sass files with sourcemaps
gulp.task('sass', function() {
  var cloneSink = clone.sink();
  return gulp.src(config.sass.src)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', error)
    .pipe(postcss(config.sass.postcss))
    .pipe(cloneSink)
      .pipe(rename({suffix: '.min'}))
      .pipe(cleanCss())
    .pipe(cloneSink.tap())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
