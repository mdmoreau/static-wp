var browserSync = require('browser-sync').get('server');
var browserify = require('browserify');
var gulp = require('gulp');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var moment = require('moment');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var config = require('../config');
var error = require('../util/error');

// create browserify bundler and wrap with watchify for faster compiling
var bundler = watchify(browserify(config.browserify.src, watchify.args));

// function to bundle the files
function bundle() {
  var b = bundler.bundle()
    .on('error', error)
    .pipe(source(config.browserify.bundle))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.browserify.dist))
    .pipe(browserSync.stream({once: true}));
  return b;
}

// update bundle when a source file changes
bundler.on('update', bundle);

// display the compile time after updating
bundler.on('time', function(time) {
  var duration = moment.duration(time).asSeconds();
  util.log('Updated', util.colors.cyan('\'browserify\''), 'in', util.colors.magenta(duration + ' s'));
});

// create browserify bundle
gulp.task('browserify', bundle);
