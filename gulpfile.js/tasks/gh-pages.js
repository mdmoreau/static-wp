var gulp = require('gulp');
var file = require('gulp-file');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

// deploy dist folder to github pages with cname support
gulp.task('gh-pages', function() {
  return gulp.src(config.ghPages.src)
    .pipe(file('CNAME', config.ghPages.cname))
    .pipe(ghPages(config.ghPages.opts));
});
