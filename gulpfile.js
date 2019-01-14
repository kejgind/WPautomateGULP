/**
 * @file gulpfile.js
 *
 * @version 1.0.0
 *
 * Get and load required plugins
 */

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglycss = require("gulp-uglifycss");
const concatJS = require("gulp-concat");
const babel = require("gulp-babel");
const jsmin = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const bsReload = browserSync.reload;

/**
 * Get all files that need to be watched
 *
 * Import file paths from gulpfile-config.js
 */
const gulpFilePaths = require("./gulpfile-config");

// scss/css
const sassSource = Object.keys(gulpFilePaths.css.sassSource).map(
  key => gulpFilePaths.css.sassSource[key]
);
const cssAutoprefixerConfig = gulpFilePaths.css.autoprefixerConfig;
const cssUglycssConfig = gulpFilePaths.css.uglycssConfig;
const cssAssets = gulpFilePaths.css.cssAssets;

// js
const jsSource = Object.keys(gulpFilePaths.js.jsSource).map(
  key => gulpFilePaths.js.jsSource[key]
);
const jsBabelConfiguration = gulpFilePaths.js.jsBabelConfiguration;
const jsConcatName = gulpFilePaths.js.jsConcatName;
const jsAssets = gulpFilePaths.js.jsAssets;

// php
const phpWatch = gulpFilePaths.phpWatch;

//images
const imgSource = Object.keys(gulpFilePaths.image.imgSource).map(
  key => gulpFilePaths.image.imgSource[key]
);
const jpegtranConfig = gulpFilePaths.image.jpegtranConfig;
const optipngConfig = gulpFilePaths.image.optipngConfig;
const imgAssets = gulpFilePaths.image.imgAssets;

// source maps folders
const mapsDir = gulpFilePaths.mapsDir;

// browserSync settings
const browserSyncConfig = gulpFilePaths.browserSyncConfig;

/**
 * Run tasks
 */

function browserSyncNew(done) {
  browserSync.init(browserSyncConfig);

  done();
}

function images(done) {
  gulp
    .src(imgSource)
    .pipe(
      imagemin([
        imagemin.jpegtran(jpegtranConfig),
        imagemin.optipng(optipngConfig),
      ])
    )
    .pipe(gulp.dest(imgAssets));

  done();
}

function css(done) {
  gulp
    .src(sassSource)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(cssAutoprefixerConfig))
    .pipe(uglycss(cssUglycssConfig))
    .pipe(sourcemaps.write(mapsDir))
    .pipe(gulp.dest(cssAssets))
    .pipe(browserSync.stream());

  done();
}

function js(done) {
  gulp
    .src(jsSource)
    .pipe(sourcemaps.init())
    .pipe(concatJS(jsConcatName))
    .pipe(babel(jsBabelConfiguration))
    .pipe(jsmin())
    .pipe(sourcemaps.write(mapsDir))
    .pipe(gulp.dest(jsAssets));

  done();
}

function watchFiles() {
  gulp.watch(phpWatch, bsReload);
  gulp.watch(sassSource, css);
  gulp.watch(jsSource, gulp.series(js, bsReload));
}

gulp.task("css", css);

gulp.task("js", js);

gulp.task("images", images);

gulp.task("default", gulp.parallel(css, js));

gulp.task("watch", gulp.series(watchFiles, browserSyncNew));

// gulp.task("watch", ["default", "browser-sync"], () => {
//   gulp.watch(phpWatch, bsReload);
//   gulp.watch(sassSource, ["sass"]);
//   gulp.watch(jsSource, ["js", bsReload]);
// });
