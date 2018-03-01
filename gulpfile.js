var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

/* Task to watch and compile scss to css */
gulp.task('sass', function(){
	gulp.src('./project/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest ('./project'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./project/**/*.scss', ['sass']);
});

/* Task to add vendor prefixes */
gulp.task('prefixer', () =>
    gulp.src('./project/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./project'))
);