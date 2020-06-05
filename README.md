# WPautomateGULP - Automate work in WordPress with GULP & Webpack

Simple GULP config file to automate your workflow when creating WordPress themes and plugins. It will handle changes in php, css, js and can also optimize your images.

---

## Changelog

---

version: 3.0.0

+ updated all plugins to newest versions
+ moved `js` processing from `gulp` to `webpack`
+ moved to `gulp-postcss` to handle `css` files
+ moved *gulp configuration* from `gulpfile-config.js` to `gulpfile.js`
+ restored `gulp-sourcemaps` package for creation of `sourcemaps` file for `css`
+ updated `README.md` file


version: 2.0.2

+ updated all plugins to newest versions
+ replaced `gulp-uglify-es` with `gulp-terser`
+ added `gulp-deporder` for managing concatination order
+ added `gulp-strip-comments` to remove comments after concatination of vendor and custom `js` files
+ added *"cssVendor"* and *"jsVendor"* objects in `gulpfile-config.js` for adding vendor `js` and `css` files to bundle them with custom `js` and `css` files
+ in `gulpfile.js` updated `js` and `css` functions for bundling vendor files with custom files
+ removed `gulp-sourcemaps` package and creation of sourcemaps files from `css` and `js` functions


version: 2.0.1

+ updated all plugins to newest versions


version: 2.0.0

+ switched to `gulp` v4
+ switched to `@babel/core` v7.2
+ updated all plugins to newest versions


version: 1.0.0

+ initial release
+ `php`, `css`, `js` files watch
+ optimize images
