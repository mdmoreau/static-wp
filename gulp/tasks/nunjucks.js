var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var minifyHtml = require('gulp-minify-html');
var nunjucksHtml = require('gulp-nunjucks-html');
var plumber = require('gulp-plumber');
var config = require('../config');
var error = require('../util/error');

// render and optimize nunjucks templates to html using inline yaml
gulp.task('nunjucks', function() {
  return gulp.src(config.nunjucks.src)
    .pipe(plumber())
    .pipe(frontMatter({property: 'data'}))
    .on('error', error)
    .pipe(nunjucksHtml(config.nunjucks.opts))
    .on('error', error)
    .pipe(minifyHtml())
    .pipe(gulp.dest(config.nunjucks.dist))
    .on('end', browserSync.reload);
});