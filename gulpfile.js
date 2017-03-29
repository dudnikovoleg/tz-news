'use strict'


const gulp 			= require('gulp');
const sass 			= require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const concat 		= require('gulp-concat');
const uglify 		= require('gulp-uglifyjs');
const sourcemaps 	= require('gulp-sourcemaps');
const cssmin 		= require('gulp-cssmin');
const rename 		= require('gulp-rename');
const del 			= require('del');
const browserSync 	= require('browser-sync').create();
const imagemin 		= require('gulp-imagemin');



gulp.task('sass', function () {

  return gulp.src('src/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 8'],
            cascade: true
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
     .pipe(browserSync.stream());

});

gulp.task('scripts', function (){
	return gulp.src('src/libs/*.js')
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
});

gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets'));
});

gulp.task('imgmin', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
});


gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: 'src'
		},
			tunnel:  true
	});
});

gulp.task('clean', function(){
	return del.sync('assets')
});

gulp.task('watch',['browser-sync', 'sass'],function(){
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
	gulp.watch('src/css/**/*.css', browserSync.reload);

});

gulp.task('build',['clean','imgmin','css','scripts'], function(){
	var buildJs = gulp.src('src/js/*.js')
		.pipe(gulp.dest('assets/js'));
	var buildHtml = gulp.src('src/index.html')
		.pipe(gulp.dest('assets'));
	var builFonts = gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('assets/fonts'))

});

