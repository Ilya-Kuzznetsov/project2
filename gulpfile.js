'use strict'
var gulp = require("gulp");
var less = require("gulp-less");
var prefixer = require("gulp-autoprefixer");
gulp.task("less", function () {
  return gulp.src("less/main.less")
.pipe(less())
.pipe(gulp.dest("css"));
});
