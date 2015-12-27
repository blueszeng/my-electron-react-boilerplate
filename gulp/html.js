var gulp = require('gulp');
var config = require('./config');

gulp.task('html:dev', function () {
  return gulp.src(config.index.src)
    .pipe(gulp.dest(config.workDirs.dev));
});
