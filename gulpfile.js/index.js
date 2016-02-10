var gulp = require('gulp');
var requireDir = require('require-dir');

// automatically require all individual task files
requireDir('tasks', {recurse: true});

// build the project from individual tasks
gulp.task('build', gulp.series('clean', gulp.parallel(gulp.series('svgstore-sass', 'sass'), 'browserify', 'fonts', 'images', 'svgstore', 'nunjucks')));

// deploy a clean build to github pages
gulp.task('deploy', gulp.series('build', 'gh-pages'));

// default task to launch the project
gulp.task('default', gulp.series('build', gulp.parallel('browser-sync', 'watch')));
