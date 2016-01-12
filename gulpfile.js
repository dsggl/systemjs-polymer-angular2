var gulp = require('gulp');
var Builder = require('systemjs-builder');

var builder = new Builder('/', 'config.js');

gulp.task('default', function () {
    builder
        .buildStatic('app/main.js', '.dist/app.js', { runtime: true, format: 'cjs' })
        .then(function () {
            console.log('Build complete');
        })
        .catch(function (err) {
            console.log('Build error');
            console.log(err);
        });
});