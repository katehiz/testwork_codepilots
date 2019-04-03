'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const concat = require('gulp-concat');

gulp.task('concatScripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sassToCss', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(cssprefixer(['last 15 versions', '> 2%', 'ie 9'], { cascade: true }))
        .pipe(gulp.dest('./dist/'));
});

// dev - do all tasks and start watcher
gulp.task('dev',
    gulp.series(gulp.parallel('sassToCss', 'concatScripts'))
);

