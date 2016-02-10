var gulp = require('gulp');
var requireDir = require('require-dir');

// automatically require all individual task files
requireDir('tasks', {recurse: true});

// build the project from individual tasks
gulp.task('build', gulp.parallel(gulp.series('svgstore-sass', 'sass'), 'browserify', 'fonts', 'images', 'svgstore', 'nunjucks'));

// default task to launch the project
gulp.task('default', gulp.series('build', gulp.parallel('browser-sync', 'watch')));
