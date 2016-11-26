const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

gulp.task("build-css", () => gulp
  .src("_styles/**/*.scss")
  .pipe(sass())
  .pipe(autoprefixer({browsers: ["last 2 version"], }))
  .pipe(cssmin())
  .pipe(gulp.dest("_includes/css")));

gulp.task("build-js", () => gulp
  .src("_scripts/**/*.js")
  .pipe(babel({ presets: ["es2015"] }))
  .pipe(uglify())
  .pipe(gulp.dest("assets/scripts")));

gulp.task("default", ["build-css", "build-js"], () => {});