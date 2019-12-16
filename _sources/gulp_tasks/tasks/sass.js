var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('./browserSync'),
    cssmin = require('gulp-clean-css'),
    config = require('../config');

var paths = config.paths;

gulp.task('sass', function () {
  gulp.src(['*.scss', ], {cwd: paths.scss})
    .pipe(sass({
    	outputStyle: 'expanded'
    }).on('error', sass.logError))
		.pipe(autoprefixer({
      browsers: config.browsers,
      cascade: true,
      remove: false
    }))
      // .pipe(cssmin({debug: true, rebase: false}))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});
