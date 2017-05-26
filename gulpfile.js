var gulp = require('gulp'),
    scss = require('gulp-scss'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    minifyCSS = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    runSequence(
        'style',
        'script',
        'core-script',
        'plugins-script'
    );
});


gulp.task('style', function() {
    gulp.src('public/css/**/*.css')
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./web/css/'));
});

gulp.task('script', function() {
    gulp.src('public/js/hans.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./web/js/'));
});

gulp.task('core-script', function() {
    gulp.src([
            'public/js/core/jquery.min.js',
            'public/js/core/bootstrap.min.js',
            'public/js/core/material.min.js',

        ])
        .pipe(concat('core.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./web/js/'));
});

gulp.task('plugins-script', function() {
    gulp.src('public/js/plugins/*.js')
        .pipe(concat('plugin.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./web/js/'));
})