var gulp = require('gulp'),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    config = require('../config');

var paths = config.paths;
//
// gulp.task('concat:otherJs', function() {
//   var targets = [paths.localjs + '**/*.js'];
//   if(isProduction) {
//     targets.push('!' + paths.localjs +'**/*.dummy.js');
//     targets.push('!' + paths.localjs +'**/tech.js');
//   }
//   return gulp.src(targets)
//       .pipe(uglify({
//           compress: true
//       }))
//     .pipe(gulp.dest(paths.js));
// });
//
// gulp.task('concat:other', function() {
//     var targets = [paths.localjs + '**/*.css'];
//     targets.push(paths.localjs + '**/*.png');
//     return gulp.src(targets)
//         .pipe(gulp.dest(paths.js));
// });
//
// gulp.task('concat:blockJsLib', function() {
// 	var targets = [paths.lib + '**/*.js', paths.helpers+'blockTrigger.js'];
// 	 targets.push('!' + paths.lib +'**/*.dummy.js');
//
//   if(!isProduction) gulp.start('concat:blockDummyJsLib');
//
//   return gulp.src(targets)
//     .pipe(concat('blocks-lib.js'))
//     .pipe(uglify({
//         compress: true
//     }))
//     .pipe(gulp.dest(paths.js));
// });
//
// gulp.task('concat:blockJs', function() {
// 	var targets = [paths.blocks + '**/*.js', paths.helpers+'blockTrigger.js'];
// 	 targets.push('!' + paths.blocks +'**/*.dummy.js');
//
//   if(!isProduction) gulp.start('concat:blockDummyJs');
//
//   return gulp.src(targets)
//     .pipe(concat('blocks.js'))
//     .pipe(uglify({
//         compress: true
//     }))
//     .pipe(gulp.dest(paths.js));
// });
//
// gulp.task('concat:blockDummyJsLib', function() {
//   var targets = [paths.lib +'**/*.dummy.js'];
//
//   return gulp.src(targets)
//       .pipe(concat('blocks-lib.dummy.js'))
//       .pipe(uglify({
//           compress: true
//       }))
//       .pipe(gulp.dest(config.localPaths.js));
// });
//
// gulp.task('concat:blockDummyJs', function() {
//   var targets = [paths.blocks +'**/*.dummy.js'];
//
//   return gulp.src(targets)
//       .pipe(concat('blocks.dummy.js'))
//       .pipe(uglify({
//           compress: true
//       }))
//       .pipe(gulp.dest(config.localPaths.js));
// });
//
// gulp.task('concat:fonts', function() {
//   return gulp.src([paths.fonts + '**/*.scss'])
//     .pipe(concat('fonts.scss'))
//     .pipe(gulp.dest(paths.tmp));
// });
//
// gulp.task('concat:scssLib', function() {
//   return gulp.src([paths + '**/*.scss'])
//     .pipe(concat('_blocks-lib.scss'))
//     .pipe(gulp.dest(paths.tmp));
// });

// gulp.task('concat:scss', function() {
//   return gulp.src([paths.scss + '*.scss'])
//     .pipe(concat('style.scss'))
//     .pipe(gulp.dest(paths.tmp));
// });

// gulp.task(
//     'concat',
//     [
//         'concat:scss',
//     ]
// );
