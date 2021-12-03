const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const sourcemaps = require("gulp-sourcemaps");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
