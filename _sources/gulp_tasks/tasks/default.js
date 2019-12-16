var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	config = require('../config');


gulp.task('default', function() {
	return runSequence(
		// 'concat',
		'sass',
		'watch'
	);
});
