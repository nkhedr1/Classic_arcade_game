const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

gulp.task('autoprefixer', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
);

gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('concat', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});