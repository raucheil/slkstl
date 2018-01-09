
//gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var refresh = require('gulp-refresh')

//style paths
var sassFiles = 'styles/sass/**/*.scss',
    cssDest = 'styles/css/',
    publicDest = 'W:/public_html/skin/frontend/rwd/silikomart/css/';

// gulp.task('js-watch', function (done) {
//     browserSync.reload();
//     done();
// });

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        // .pipe(browserSync.reload);
        .pipe(gulp.dest(publicDest))
        // .pipe(reload())
        // browserSync.reload();
});

gulp.task('watch',function() {
    // refresh.listen()
    gulp.watch(sassFiles,['styles']);
});

gulp.task('default',['watch']);