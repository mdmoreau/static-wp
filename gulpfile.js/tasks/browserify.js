var browserSync = require('browser-sync').get('server');
var browserify = require('browserify');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var moment = require('moment');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var config = require('../config');
var error = require('../util/error');

// create browserify bundler and wrap with watchify for faster compiling
var b = watchify(browserify(config.browserify.src, config.browserify.opts));

// function to bundle the files
function bundle() {
  return b.bundle()
    .on('error', error)
    .pipe(source(config.browserify.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.browserify.dist))
    .pipe(browserSync.stream({once: true}));
}

// update bundle when a source file changes
b.on('update', bundle);

// display the compile time after updating
b.on('time', function(time) {
  var duration = moment.duration(time);
  util.log('Updated', util.colors.cyan('\'browserify\''), 'in', util.colors.magenta(duration + ' ms'));
});

// create browserify bundle
gulp.task('browserify', bundle);
