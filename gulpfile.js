// loading in dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// for angular route rewrites and static serving in development
var fs = require("fs");
var path = require("path");
var url = require("url");
var defaultFile = "index.html"
var folder = path.resolve(__dirname, "./app");

gulp.task('serve', () => {

  browserSync.init({
    port: 8080,
    server: {
      baseDir: "./app",
      middleware: (req, res, next) => {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join("");
        var fileExists = fs.existsSync(folder + fileName);
        if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
          req.url = "/" + defaultFile;
        }
        return next();
      }
    }
  });

  // to reload on file changes
  gulp.watch('./app/*.html').on('change', reload);
  gulp.watch('./app/directive_templates/*.html').on('change', reload);
  gulp.watch('./app/js/module/*.js').on('change', reload);
  gulp.watch('./app/js/controllers/*.js').on('change', reload);
  gulp.watch('./app/js/directives/*.js').on('change', reload);
  gulp.watch('./app/js/routes/*.js').on('change', reload);
  gulp.watch('./app/js/services/*.js').on('change', reload);

})

// sass task
gulp.task('sass', () => {

  gulp.src('./app/style/sass/style.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  })).on('error', sass.logError)
  .pipe(gulp.dest('./app/style/css'))
  .pipe(reload({stream: true}));

});

// sass watch task
gulp.task('watch', () => {
  gulp.watch('./app/style/sass/**/*.scss', ['sass']);
});

// default task to run all tasks when typing gulp into the terminal
gulp.task('default', ['serve', 'sass', 'watch']);
