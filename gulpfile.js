const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("build-css", () => gulp
  .src("_styles/**/*.scss")
  .pipe(sass({outputStyle: "compressed"}))
  .pipe(gulp.dest("_includes/css")));

gulp.task("build-js", () => gulp
  .src("_scripts/**/*.js")
  .pipe(babel({ presets: ["es2015"] }))
  .pipe(uglify())
  .pipe(gulp.dest("_includes/scripts")));

gulp.task("default", ["build-css", "build-js"], () => {});