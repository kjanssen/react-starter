//  gulpfile.js
'use strict';
 
// Load some modules which are installed through NPM.
var gulp        = require('gulp');
var browserify  = require('browserify');
var del         = require('del');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');
var stylus      = require('gulp-stylus');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');
var minifyCSS   = require('gulp-minify-css');
var gulpif      = require('gulp-if');
var concat      = require('gulp-concat');

var production = process.env.PRODUCTION || false;
 
// Define some paths.
var paths = {
  src: {
    index:  ['./src/index.html'],
    css:    ['./src/css/**/*.css', './src/css/**/*.styl'],
    app_js: ['./src/js/app.jsx'],
    js:     ['./src/js/**/*.js', './src/js/**/*.jsx']
  },
  dest: {
    index:  'public',
    js:     'public/js',
    css:    'public/css'
  }
};

gulp.task('clean', function(done) {
  del(['public'], done);
});

gulp.task('css', ['clean'], function() {
  return gulp.src(paths.src.css)
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(gulpif(production, minifyCSS()))
    .pipe(gulp.dest(paths.dest.css));
});
 
gulp.task('js', ['clean'], function() {
  browserify(paths.src.app_js, {extensions: ['.jsx']})
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulpif(production, streamify(uglify())))
    .pipe(gulp.dest(paths.dest.js));
});
 
gulp.task('html', ['clean'], function() {
  gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dest.index));
});
 
// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.src.index, ['build']);
  gulp.watch(paths.src.js, ['build']);
  gulp.watch(paths.src.css, ['build']);
});

gulp.task('build', ['html', 'js', 'css']);
 
gulp.task('default', ['watch', 'build']);
