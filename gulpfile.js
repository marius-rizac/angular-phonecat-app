'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('js-external', function(){
    gulp.src([
        'bower/jquery/dist/jquery.js',
        'bower/angular/angular.js',
        'bower/angular-route/angular-route.js',
        'bower/angular-resource/angular-resource.js',
        'bower/angular-animate/angular-animate.js',
        'bower/sweetalert/dist/sweetalert.min.js'
    ])
        .pipe(concat('external.js'))
        .pipe(gulp.dest('app/dist/js'))
    ;
});

gulp.task('js', function(){
    gulp.src([
        'app/src/js/app.module.js',
        'app/src/js/app.config.js',
        'app/src/js/core/core.module.js',
        'app/src/js/core/checkmark/checkmark.filter.js',
        'app/src/js/core/phone/phone.module.js',
        'app/src/js/core/phone/phone.service.js',
        'app/src/js/phone-list/phone-list.module.js',
        'app/src/js/phone-list/phone-list.component.js',
        'app/src/js/phone-detail/phone-detail.module.js',
        'app/src/js/phone-detail/phone-detail.component.js',
        'app/src/js/animation.js'
    ])
        .pipe(plumber())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('app/dist/js'))
    ;
});

gulp.task('css', function(){
    gulp.src([
        'bower/bootstrap/dist/css/bootstrap.css',
        'bower/sweetalert/dist/sweetalert.css',
        'app/src/css/animate.css',
        'app/src/css/index.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('app/dist/css'))
    ;
});

gulp.task('watch', ['js', 'css'], function(){
    gulp.watch(['app/src/js/**/**.js'], ['js']);
    gulp.watch(['app/src/css/**/**.css'], ['css']);
});

gulp.task('default', ['js', 'css', 'js-external']);