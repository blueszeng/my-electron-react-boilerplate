var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./config');

gulp.task('compile:dev', function() {
  return gulp.src(config.js.src)
    .pipe($.babel({
      presets: ["es2015", "react"]
    }))
    .pipe(gulp.dest(config.workDirs.dev));
});

gulp.task('compile:dev:watch', function(done) {
  gulp.src(config.js.src)
    .pipe($.watch(config.js.src), {verbose: true})
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ["es2015", "react"]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.workDirs.dev));
  done();
});
