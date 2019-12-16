var gulp = require('gulp'),
	watcher = require('gulp-watch'),
	log = require('fancy-log'),
	config = require('../config');

var paths =  config.paths;

gulp.task('watch', function() {
    watcher([paths.scss + '**/*.scss'], function () {
		gulp.start('sass');
	});
});
