var gulp = require('gulp');
var plumber = require('gulp-plumber');
var	runSequence = require('run-sequence');
var config = require('../config');
var ftpParams;
var ftp;

try {
	ftpParams = require('../server');
	ftp = require( 'vinyl-ftp' );
} catch (e) {
	ftpParams = false;
	// console.log('deploy server params unavailable');
}

gulp.task('deploy', function() {
	return runSequence(
		'concat',
		'sass',
	);
});

