var gulp = require('gulp');
var runSequence = require('run-sequence');

// initial javascript task to create dependent source files in the correct order
gulp.task('js-init', function(cb) {
  runSequence('modernizr', 'browserify', cb);
});