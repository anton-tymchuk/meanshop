var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
  return sass('public/styles/scss/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/styles/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/styles/css'))
    .pipe(livereload());
});

gulp.task('clean', function(cb) {
    del(['public/styles/css'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('public/styles/scss/*.scss', ['styles']);

  // Watch .js files
  // gulp.watch('public/scripts/**/*.js', ['scripts']);

  livereload.listen();

});
