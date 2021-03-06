let projectFolder = "build";
let sourceFolder = "source";

let path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    img: projectFolder + "/img/",
    js: projectFolder + "/js/",
    fonts: projectFolder + "/fonts/"
  },
  src: {
    html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
    css: sourceFolder + "/scss/style.scss",
    img: sourceFolder + "/img/**/*.{png,svg,jpg}",
    js: sourceFolder + "/js/script.js",
    fonts: sourceFolder + "/fonts/*.{woff,woff2}"
  },
  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/scss/**/*.scss",
    img: sourceFolder + "/img/**/*.{png,svg,jpg}",
    js: sourceFolder + "/js/**/*.js"
  },
  clean: "./" + projectFolder + "/"
 }


let { src, dest } = require("gulp"),
  gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  jsmin = require("gulp-uglify-es").default,
  imagemin = require("gulp-imagemin");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder + "/"
    },
    port: 3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}
function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(dest(path.build.css))
    .pipe(cssmin())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.reload({stream: true}))
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(jsmin())
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
  }
function img() {
  return src(path.src.img)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 3,
    }))
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}
function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}
function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], img);
}
function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts)); 
let watch = gulp.parallel(build, watchFiles, browserSync); 

exports.fonts = fonts;
exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch; 