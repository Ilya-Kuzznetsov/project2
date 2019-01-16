'use strict'
var gulp = require("gulp");
var less = require("gulp-less");
var prefixer = require("gulp-autoprefixer");
gulp.task("less", function () {
  return gulp.src("less/style.less")
.pipe(less())
.pipe(gulp.dest("css"));
});
