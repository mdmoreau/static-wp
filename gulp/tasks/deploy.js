var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

// deploy dist folder to github pages
gulp.task('deploy', function() {
  return gulp.src(config.deploy.src)
    .pipe(ghPages());
});
