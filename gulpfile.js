/**
 * @file gulpfile.js
 *
 * @version 2.0.2
 *
 * Get and load required plugins
 */

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglycss = require("gulp-uglifycss");
const concatJS = require("gulp-concat");
const concatCSS = require("gulp-concat-css");
const deporder = require("gulp-deporder");
const babel = require("gulp-babel");
const jsmin = require("gulp-terser");
const removeComments = require("gulp-strip-comments");
const browserSync = require("browser-sync").create();

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
const cssVendor = Object.keys(gulpFilePaths.css.cssVendor).map(
  key => gulpFilePaths.css.cssVendor[key]
);
const cssAutoprefixerConfig = gulpFilePaths.css.autoprefixerConfig;
const cssUglycssConfig = gulpFilePaths.css.uglycssConfig;
const cssConcatName = gulpFilePaths.css.cssConcatName;
const cssAssets = gulpFilePaths.css.cssAssets;

// js
const jsSource = Object.keys(gulpFilePaths.js.jsSource).map(
  key => gulpFilePaths.js.jsSource[key]
);
const jsVendor = Object.keys(gulpFilePaths.js.jsVendor).map(
  key => gulpFilePaths.js.jsVendor[key]
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
 * Create functions for each task
 */

function bs() {
  browserSync.init(browserSyncConfig);
}

function bsReload(done) {
  browserSync.reload();

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
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer(cssAutoprefixerConfig))
    .pipe(gulp.src(cssVendor))
    .pipe(deporder())
    .pipe(concatCSS(cssConcatName))
    .pipe(uglycss(cssUglycssConfig))
    .pipe(gulp.dest(cssAssets))
    .pipe(browserSync.stream());

  done();
}

function js(done) {
  gulp
    .src(jsSource)
    .pipe(concatJS(jsConcatName))
    .pipe(babel(jsBabelConfiguration))
    .pipe(
      jsmin({
        output: { comments: /requires:/ },
        compress: { keep_fnames: true, keep_classnames: true },
        mangle: { keep_fnames: true, keep_classnames: true },
      })
    )
    .pipe(gulp.src(jsVendor))
    .pipe(deporder())
    .pipe(concatJS(jsConcatName))
    .pipe(removeComments())
    .pipe(gulp.dest(jsAssets));

  done();
}

function watchFiles() {
  gulp.watch(phpWatch, bsReload);
  gulp.watch(sassSource, gulp.series(css, bsReload));
  gulp.watch(jsSource, gulp.series(js, bsReload));
}

/**
 * Run tasks
 */

gulp.task("css", css);

gulp.task("js", js);

gulp.task("images", images);

gulp.task("default", gulp.parallel(css, js));

gulp.task("watch", gulp.parallel(watchFiles, bs));
