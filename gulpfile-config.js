/**
 * @file gulpfile-config.js
 * 
 * @version 1.0.0
 * 
 * Edit this file to add/change location of your (php, sass/scss/css, js, image)files. Get all files that need to be watched by GULP.
 *
 */

const gulpFilePaths = {
  /**
   * @name CSS
   * Specify paths to SCSS/CSS files that you want to use in this project.
   */
  css: {
    // Specify source folder(s). Files from those folder will be processed by GULP.
    // Add folders inside "sassSource" object, with your name and path to required files.
    sassSource: {
      sassMain: "src/scss/template.scss",
      sassPartials: "src/scss/partials/*.scss",
    },
    // CSS autoprefixer configuration. To see what options are available go to https://github.com/postcss/autoprefixer#options.
    autoprefixerConfig: {
      browsers: ["last 2 versions"],
    },
    // Ugly css configuration. To see what options are available go to https://github.com/fmarcia/UglifyCSS#command-line.
    uglycssConfig: {
      maxLineLen: 80,
      uglyComments: true,
    },
    // Specify destination folder, in which processed by GULP file will be stored.
    cssAssets: "assets/css",
  },

  /**
   * @name JAVASCRIPT
   * Specify paths to JavaScript files that you want to use in this project.
   */
  js: {
    // Specify source folder(s). Files from those folder will be processed by GULP.
    // Add folders inside "jsSource" object, with your name and path to required file. Order of the files specified in jsSource will tell GULP the order of concat option. So best option is to specify vendor files at the beginning.
    jsSource: {
      jsMain: "src/js/scripts.js",
    },
    // Babel configuration.
    jsBabelConfiguration: {
      presets: ["@babel/preset-env"],
    },
    // Specify name of concatinated js file
    jsConcatName: "scripts.js",
    // Specify destination folder, in which processed by GULP file will be stored.
    jsAssets: "assets/js",
  },

  /**
   * @name PHP
   * This object don't need any changes. It takes all '.php' in your folder and subfolder and adds them to watch list for browser-sync for live reload your page on changes made in those files.
   */
  phpWatch: "**/*.php",

  /**
   * @name IMAGES
   * Specify paths to images that you want to GULP to optimize for you.
   */
  image: {
    // Specify source folder(s). Files from those folder will be processed by GULP.
    imgSource: {
      images: "src/img/**/*",
    },
    // Specify configuration for optipng and jpegtran plugins. For options for specific image format start from https://github.com/sindresorhus/gulp-imagemin#usage.
    jpegtranConfig: {
      progressive: true,
    },
    optipngConfig: {
      optimizationLevel: 5,
    },
    // Specify destination folder, in which processed by GULP files will be stored.
    imgAssets: "assets/img",
  },

  /**
   * @name SOURCEMAPS
   * Specify path for maps for your css and js files. Those files will be stored inside your destination css folder for css.maps and inside your destination js folder for js.maps.
   */
  mapsDir: "maps",

  /**
   * @name BROWSER-SYNC
   * Browser-sync configuration. Good place to start with options you can configure in browser-sync is https://www.browsersync.io/docs/gulp.
   */
  browserSyncConfig: {
    proxy: "", // Add your local web page address.
    injectChanges: true,
    open: true,
    browser: "firefox", // Specify web browser you want to use for development.
  },
};

module.exports = gulpFilePaths;
