'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var deploy = require('gulp-gh-pages');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});


/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./.tmp/serve/**/*")
    .pipe(deploy())
});