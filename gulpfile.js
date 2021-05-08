/**
 * @file gulpfile.js
 *
 * @version 4.0.0
 *
 * Get and load required plugins
 */

const { task, series, parallel, src, dest, watch } = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const srcmaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const webpack = require("webpack");

/**
 * Set paths, config files to be watched
 */

// scss/css
const cssConfig = {
  sourceFile: "src/scss/theme.scss",
  watchFiles: "src/scss/**/*.scss",
  destDir: "assets/css",
  mapsDir: "./maps",
};

// js
const jsConfig = {
  webpackConfigFile: "./webpack.config.js",
  watchFiles: "src/js/**/*.js",
};

// php
const phpConfig = {
  watchFiles: "**/*.php",
};

// images
const imageConfig = {
  sourceFiles: "src/img/*",
  destDir: "assets/img",
  // Specify configuration for optipng and jpegtran plugins. For options for specific image format start from https://github.com/sindresorhus/gulp-imagemin#usage.
  jpegtranConfig: {
    progressive: true,
  },
  optipngConfig: {
    optimizationLevel: 5,
  },
};

// icons
const iconConfig = {
  sourceFiles: "src/icons/*",
  destDir: "assets/icons",
};

// browserSync settings
const browserSyncConfig = {
  proxy: "", // Add your local web page address.
  injectChanges: true,
  open: false,
  browser: "firefox", // Specify web browser you want to use for development.
};

/**
 * Declare GULP params and functions
 */

// BrowserSync initialization.
function bs() {
  browserSync.init(browserSyncConfig);
}

// Handle BrowserSync reload.
function bsReload(done) {
  browserSync.reload();
  done();
}

// Handle style (scss/css) files.
function processCss(done) {
  var plugins = [autoprefixer(), cssnano()];
  src(cssConfig.sourceFile)
    .pipe(srcmaps.init())
    .pipe(
      sass({
        includePaths: ["node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(postcss(plugins))
    .pipe(srcmaps.write(cssConfig.mapsDir))
    .pipe(dest(cssConfig.destDir))
    .pipe(browserSync.stream());
  done();
}

// Handle scripts (javascript) files.
function processJs(done) {
  webpack(require(jsConfig.webpackConfigFile), function (err, stats) {
    if (err) {
      console.error(err.toString());
    }
    console.error(stats.toString());
  });
  done();
}

// Handle image (jpg, png) files.
function processImg(done) {
  src(imageConfig.sourceFiles)
    .pipe(
      imagemin([
        imagemin.jpegtran(imageConfig.jpegtranConfig),
        imagemin.optipng(imageConfig.optipngConfig),
      ])
    )
    .pipe(dest(imageConfig.destDir));
  done();
}

// Handle icons (jpg, png) files.
function processIcons(done) {
  src(iconConfig.sourceFiles).pipe(imagemin()).pipe(dest(iconConfig.destDir));
  done();
}

// Set files watching function.
function watchFiles() {
  watch([phpConfig.watchFiles], { ignoreInitial: false });
  watch([cssConfig.watchFiles], { ignoreInitial: false }, processCss);
  watch(
    [jsConfig.watchFiles],
    { ignoreInitial: false },
    series(processJs, bsReload)
  );
}

// Create various tasks.
task("css", processCss);
task("js", processJs);
task("imagemin", parallel(processImg, processIcons));
task("default", parallel(processCss, processJs));
task("watch", parallel(watchFiles, bs));
