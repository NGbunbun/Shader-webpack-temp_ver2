const gulp = require('gulp');
const sass = require('gulp-dart-sass');

gulp.task('sass',() => {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch',() => {
    gulp.watch('./sass/**/*.scss',gulp.task('sass'));
});