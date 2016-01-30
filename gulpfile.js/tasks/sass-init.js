var gulp = require('gulp');
var runSequence = require('run-sequence');

// initial sass task to create dependent source files in the correct order
gulp.task('sass-init', function(cb) {
  runSequence('svgstore-sass', 'sass', cb);
});