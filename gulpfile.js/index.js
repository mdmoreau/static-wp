var gulp = require('gulp');
var requireDir = require('require-dir');

// automatically require all individual task files
requireDir('tasks', {recurse: true});

// single run tasks

// lint files for consistency
gulp.task('lint', gulp.series('lint-format', 'lint-js', 'lint-sass'));

// build the project from individual tasks
gulp.task('build', gulp.series('clean', gulp.parallel(gulp.series('svgstore-sass', 'sass'), 'browserify', 'fonts', 'images', 'svgstore', 'theme')));

// watched tasks

// initialize the project
gulp.task('init', gulp.series('clean', gulp.parallel(gulp.series('svgstore-sass', 'sass'), 'watchify', 'fonts', 'images', 'svgstore', 'theme')));

// default task to launch the project
gulp.task('default', gulp.series('init', gulp.parallel('browser-sync', 'watch')));
