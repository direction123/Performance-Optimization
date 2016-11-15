var gulp = require('gulp');
var responsive = require('gulp-responsive-images');
 
gulp.task('default', function () {
  gulp.src('src/*')
    .pipe(responsive({
      'pizzeria.jpg': [{
        width: 400,
        quality: 40
      }]
    }))
    .pipe(gulp.dest('views/images'));
});