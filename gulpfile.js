var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var minify = require('gulp-minify');

var paths = {
  sass: 'sass/style.scss',
  jsdata: [
    'javascript/jquery-1.9.1.min.js',
    'javascript/lodash.min.js',
    'javascript/select2.min.js',
    'javascript/data/pokedex.js',
    'javascript/data/setdex_xy.js',
    'javascript/data/setdex_bw.js',
    'javascript/data/setdex_dpp.js',
    'javascript/data/setdex_rse.js',
    'javascript/data/setdex_gsc.js',
    'javascript/data/setdex_rby.js',
    'javascript/data/stat_data.js',
    'javascript/data/type_data.js',
    'javascript/data/nature_data.js',
    'javascript/data/ability_data.js',
    'javascript/data/item_data.js',
    'javascript/data/move_data.js',
  ],
  jsscript: [
    'javascript/ap_calc.js',
    'javascript/calc_ab.js',
    'javascript/damage.js',
    'javascript/damage_dpp.js',
    'javascript/damage_rse.js',
    'javascript/damage_gsc.js',
    'javascript/damage_rby.js',
    'javascript/ko_chance.js',
    'javascript/moveset_import.js',
  ],
  html: 'app/*.html',
};

gulp.task('html', function(){
  gulp.src(paths.html)
    .pipe(connect.reload())
});


/*Java Script tasks*/
gulp.task('js', ['js:data','js:script']);

gulp.task('js:script', function(){
  gulp.src(paths.jsscript)
    .pipe(concat('script.js'))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('app/js'))
    .pipe(connect.reload())
});
gulp.task('js:data', function(){
  gulp.src(paths.jsdata)
    .pipe(concat('data.js'))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('app/js'))
    .pipe(connect.reload())
});


/*Sass & Css tasks*/
gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});

/*Building the app*/
gulp.task('build', ['html','sass','js']);

/*Server connect*/
gulp.task('connect', function(){
  connect.server({
    root: "app",
    livereload: true,
    port: 1234,
  });
});

/*Watching for changes*/
gulp.task('watch', function() {
  gulp.watch(paths.html, ['html']);
  gulp.watch('/sass/**/*.scss', ['sass']);
  gulp.watch(paths.jsscript, ['js']);
  gulp.watch(paths.jsdata, ['js']);
});

/*Default Gulp action*/
gulp.task('default', ['build','connect','watch']);
