var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    jasmine = require('gulp-jasmine');


gulp.task('test', function () {
    gulp.src('test/api/**/*.a.js')
        .pipe(jasmine({
            verbose: true
        }));
});

gulp.task('styles', function() {
  return sass('public/styles/scss/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/styles/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/styles/css'));

});

gulp.task('clean', function(cb) {
    del(['public/styles/css'], cb);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('public/styles/scss/*.scss', ['styles']);

});
