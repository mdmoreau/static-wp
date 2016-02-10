var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var nunjucksHtml = require('gulp-nunjucks-html');
var config = require('../config');
var error = require('../util/error');

// render and optimize nunjucks templates to html
gulp.task('nunjucks', function() {
  return gulp.src(config.nunjucks.src)
    .pipe(nunjucksHtml(config.nunjucks.opts))
    .on('error', error)
    .pipe(minifyHtml())
    .pipe(gulp.dest(config.nunjucks.dist))
    .on('end', browserSync.reload);
});
