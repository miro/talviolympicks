var gulp         = require('gulp');
var sass         = require('gulp-sass');
var webserver    = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var del          = require('del');

gulp.task('clean', function (cb) {
    del(['dist/**'], cb);
});

gulp.task('sass', function() {
    gulp.src('./app/styles/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
    gulp.watch('./app/styles/*.scss', ['sass']);
});

gulp.task('server', function() {
    gulp.src('./app')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('build', ['clean'], function() {
    gulp.src(['index.html', './js/**', './css/**', './fonts/**', './img/**'], { base: './app' })
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'watch', 'server'], function() {});
