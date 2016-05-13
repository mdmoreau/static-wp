var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var clone = require('gulp-clone');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var config = require('../config');
var error = require('../util/error');

// function to bundle browserify files
module.exports = function(b) {
  var cloneSink = clone.sink();
  return b.bundle()
    .on('error', error)
    .pipe(source(config.browserify.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(cloneSink)
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(cloneSink.tap())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.browserify.dist))
    .pipe(browserSync.stream({once: true}));
};
