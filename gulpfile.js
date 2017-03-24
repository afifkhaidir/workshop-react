var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('browser-sync', function() {
  var files = [
    'static/css/*.css',
    './index.html'
  ]

  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('index.html').on('change', browserSync.reload)
  gulp.watch('./static/**/*.css').on('change', browserSync.reload)
})

gulp.task('default', ['browser-sync'])