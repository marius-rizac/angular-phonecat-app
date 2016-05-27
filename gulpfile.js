'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

var sources = {
    js: {
        external: [
            'bower/jquery/dist/jquery.js',
            'bower/angular/angular.js',
            'bower/angular-route/angular-route.js',
            'bower/angular-resource/angular-resource.js',
            'bower/angular-animate/angular-animate.js',
            'bower/sweetalert/dist/sweetalert.min.js'
        ],
        internal: [
            'src/js/app.module.js',
            'src/js/app.config.js',
            'src/js/core/core.module.js',
            'src/js/core/checkmark/checkmark.filter.js',
            'src/js/core/phone/phone.module.js',
            'src/js/core/phone/phone.service.js',
            'src/js/phone-list/phone-list.module.js',
            'src/js/phone-list/phone-list.component.js',
            'src/js/phone-detail/phone-detail.module.js',
            'src/js/phone-detail/phone-detail.component.js',
            'src/js/animation.js'
        ]
    },
    css: [
        'bower/bootstrap/dist/css/bootstrap.css',
        'bower/sweetalert/dist/sweetalert.css',
        'src/css/animate.css',
        'src/css/index.css'
    ]
};

gulp.task('js-external', function(){
    gulp.src(sources.js.external)
        .pipe(concat('external.js'))
        .pipe(gulp.dest('public/dist/js'))
    ;
});

gulp.task('js', function(){
    gulp.src(sources.js.internal)
        .pipe(plumber())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/dist/js'))
    ;
});

gulp.task('css', function(){
    gulp.src(sources.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('public/dist/css'))
    ;
});

gulp.task('watch', ['js', 'css'], function(){
    gulp.watch(['src/js/**/**.js'], ['js']);
    gulp.watch(['src/css/**/**.css'], ['css']);
});

gulp.task('default', ['js', 'css', 'js-external']);
