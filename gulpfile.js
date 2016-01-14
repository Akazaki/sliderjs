var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// task
gulp.task('less', function() {
  return gulp.src('./css/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, './css', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./css/style.less', ['less'])
});

gulp.task('default', ['less','watch']);
