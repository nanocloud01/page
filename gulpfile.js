var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', ['sass', 'min_js', 'concatcss'], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch("js/*.js", ['min_js']).on('change', browserSync.reload);
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('min_js', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/dist'));
});

// gulp.task('default', function() {
//     console.log('Hola mundo!!!');
// });

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('concatcss', function() {
    return gulp.src(['./css/normalize.css', './css/main.css', './css/colores.css'])
      .pipe(concat('all.css'))
      .pipe(gulp.dest('css'));
  });

gulp.task('observar', function () {
    //gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('scss/**/*.scss', ['sass']);
});
