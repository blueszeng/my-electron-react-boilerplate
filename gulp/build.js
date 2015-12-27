var gulp = require('gulp');

gulp.task('build', [
  'html:dev', 'compile:dev', 'styles:dev'
]);

gulp.task('rebuild', ['clean', 'build']);
