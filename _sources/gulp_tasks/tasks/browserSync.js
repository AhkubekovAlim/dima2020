var	gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	config = require('../config');

gulp.task('browserSync', function() {
	browserSync.init({
		open: false,
		server: {
			baseDir:  config.paths.base,
			directory: false
		}
	});
});

module.exports = browserSync;
