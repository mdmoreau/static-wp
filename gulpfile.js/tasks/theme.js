var browserSync = require('browser-sync').get('server');
var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config');

// copy only changed theme files to dist folder
gulp.task('theme', function() {
  return gulp.src(config.theme.src)
    .pipe(changed(config.theme.dist))
    .pipe(gulp.dest(config.theme.dist))
    .on('end', browserSync.reload);
});
