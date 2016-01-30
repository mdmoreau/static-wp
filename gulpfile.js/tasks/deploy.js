var gulp = require('gulp');
var file = require('gulp-file');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

// deploy dist folder to github pages with cname support
gulp.task('deploy', function() {
  return gulp.src(config.deploy.src)
    .pipe(file('CNAME', config.deploy.cname))
    .pipe(ghPages(config.deploy.opts));
});
