const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("build-css", () => gulp
  .src("_styles/**/*.scss")
  .pipe(sass({outputStyle: "compressed"}))
  .pipe(gulp.dest("_includes/css")));