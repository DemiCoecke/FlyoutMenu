const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  --> Define tasks
    gulp.src   --> Point to files to use
    gulp.dest  --> Points to folder to output
    gulp.watch --> Watch files and folders for changes
*/

//Compile scss into css
function style(){
    return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

exports.style = style;

//copy html
async function copyHTML(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
}

exports.copyHTML = copyHTML;

//concatenate files into one file named main.js
async function scripts(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

exports.scripts = scripts;

function watch(){
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        tunnel: "demi-flyout",
        logLevel: "debug"
    })
    gulp.watch('src/js/*.js', scripts);
    gulp.watch('src/sass/*.scss', style);
    gulp.watch('src/*.html', copyHTML).on('change', browserSync.reload);
}

exports.watch = watch
