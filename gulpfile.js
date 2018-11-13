const gulp = require('gulp');
const replace = require('gulp-replace');
const concat = require('gulp-concat');

gulp.task('vendor', function() {
  gulp
    .src([
      'node_modules/vuetify/dist/vuetify.min.css',
      'node_modules/toastr/build/toastr.css'
    ], {
      base: 'node_modules/'
    })
    .pipe(concat('vendorr.css'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('sass', ['vendor'], function() {
  const sass = require('gulp-sass');
  const postcss = require('gulp-postcss');
  const postcssImport = require('postcss-import');
  const cssnano = require('cssnano');
  const ap = require('gulp-autoprefixer');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp
    .src('./src/scss/all.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: 'node_modules',
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(postcss([
      postcssImport(),
      cssnano()
    ]))
    .pipe(ap({ browsers: ['last 2 versions', 'ie >= 9'] }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task("sass-watch", ["sass"], function () {
  gulp.watch(['./src/scss/all.scss'], ["sass"]);
});





// not currently in use, but feel free to use or change it for your needs
gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  const sass = require('gulp-sass');
  const ap = require('gulp-autoprefixer');

  return gulp
    .src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([postcssImport(), cssnano()]))
    .pipe(
      ap({
        browsers: ['last 2 versions', '> 5%']
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('sw', () => {
  const pkg = require('./package.json');

  return gulp
    .src('./src/js/sw.js')
    .pipe(replace('{%VERSION%}', pkg.version))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sw']);
