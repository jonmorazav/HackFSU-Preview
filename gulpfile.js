const fs = require('fs');
const gulp = require('gulp');
const flatten = require('gulp-flatten')

var build = 'html';
var json = './src/json/'


// Main Build tasks

gulp.task('pug', function() {
    const pug    = require('gulp-pug');
    const data   = require('gulp-data');
    const locals = require('./src/locals.js');

    gulp.src(['src/views/*/*.pug', '!src/views/_includes/**'])
        .pipe(pug({locals: locals}))
        .on('error', console.log)
        .pipe(flatten())
        .pipe(gulp.dest(build));
});

gulp.task('sass', function() {
    const sass = require('gulp-sass');
    const paths = ['src/public/'];
    gulp.src(['src/views/*/*.sass', 'src/public/*.sass'])
        .pipe(sass({includePaths: paths})
            .on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest(build + '/css'));
});

// Resource tasks

gulp.task('js', function() {
    gulp.src('src/views/**/*.js')
        .pipe(flatten())
        .pipe(gulp.dest(build + '/js'));
});

gulp.task('assets', function() {
    gulp.src('src/public/assets/**/*')
        .pipe(gulp.dest(build + '/public/'));
    gulp.src('src/public/favicon/*')
        .pipe(gulp.dest(build));

});


// Utility tasks

gulp.task('clean', function() {
    var clean = require('gulp-clean');
    gulp.src('html/**/*', {read:false})
        .pipe(clean());
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/views/**/*.pug', ['pug']);
    gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/views/**/*.js', ['js']);
    gulp.watch('src/public/**', ['assets']);
    gulp.watch('src/locals.js', ['pug'])
});

gulp.task('views', ['pug', 'sass']);
gulp.task('build', ['views', 'assets', 'js']);
gulp.task('default', ['build']);
