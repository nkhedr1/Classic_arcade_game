const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('autoprefixer', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
);

const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
);