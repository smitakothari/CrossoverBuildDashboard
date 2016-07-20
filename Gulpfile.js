var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
var path = require('path');
var src = 'src/js';
//var jshint = require('gulp-jshint');
//var changed = require('gulp-changed');
//var imagemin = require('gulp-imagemin');
var jest = require('jest');
var runSequence = require('run-sequence').use(gulp);

var jest = require('jest-cli');
var jestConfig = {
    rootDir: 'src'
};
gulp.task('test', function(done) {
    jest.runCLI({ config : jestConfig }, ".", function() {
        done();
    });
});
gulp.task('tdd', function(done) {
    gulp.watch([ jestConfig.rootDir + "*.js" ], [ 'test' ]);
});


//gulp.task('test', function () {
//    runSequence('jest');
//    gulp.watch(['src/js/*.js','__tests__/*.js'], ['jest'])
//});

gulp.task('jshint', function () {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('webpack', function () {

    return gulp.src(path.join(src, './*.js'), {base: path.resolve(src)})

        .pipe(webpack(require('./webpack.config.js')
        ))
        .pipe(gulp.dest('src/dist/'));

});

gulp.task('default', ['webpack'], function () {

    gulp.watch('js/*/*.*', function () {

        gulp.run('webpack');
        // gulp.run('jest');

    });
});