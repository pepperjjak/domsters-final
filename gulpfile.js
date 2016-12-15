var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function(){
  // **/*.scss - matches any file ending with .scss in the root folder and any child directories
  return gulp.src('scss/**/*.scss')
    // Converts Sass to CSS with gulp-sass using gulp-sass
    .pipe( sourcemaps.init() )
    .pipe(sass({
          // outputStyle: 'compressed',
          includePaths: ['node_modules/breakpoint-sass/stylesheets']
      }).on('error', sass.logError))
    .pipe( autoprefixer( {
      browsers: [ 'last 4 version' ]
    }))
    .pipe(sourcemaps.write() )
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    // server: {
    //   baseDir: '/'
    // },
    proxy: "localhost/domsters/",
    notify: false
  });
});

gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

// gulp.task('fonts', function() {
//   return gulp.src('fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// });

gulp.task('clean:dist', function() {
  return del.sync('dist');
});


gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('**/*.php', browserSync.reload);
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'images', 'fonts'],
    callback
  )
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});
