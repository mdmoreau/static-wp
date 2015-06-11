var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var minifyHtml = require('gulp-minify-html');
var plumber = require('gulp-plumber');
var swig = require('gulp-swig');
var config = require('../config');
var error = require('../util/error');

// process and optimize swig templates using inline yaml
gulp.task('swig', function() {
  return gulp.src(config.swig.src)
    .pipe(plumber())
    .pipe(frontMatter({property: 'data'}))
    .pipe(swig(config.swig.opts))
    .on('error', error)
    .pipe(minifyHtml())
    .pipe(gulp.dest(config.swig.dist))
    .pipe(browserSync.stream());
});