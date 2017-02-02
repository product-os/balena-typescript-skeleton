const gulp = require('gulp');
const gutil = require('gulp-util');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsProject = typescript.createProject('tsconfig.json');

const OPTIONS = {
    header: true,
    files: {
        typescript: [ 'lib/**/*.ts' ],
        declarations: [ 'lib/**/*.d.ts' ]
    },
    base: 'lib'
}

// Compile the TS sources
gulp.task('typescript', () => {
    gulp.src(OPTIONS.files.typescript)
        .pipe(sourcemaps.init())
        .pipe(tsProject()).on('error', gutil.log)
        .pipe(sourcemaps.write('./', {
			includeContent: false,
            sourceRoot: '../lib'
        }))
        .pipe(gulp.dest('build/'));
});

// Copy any pre-defined declarations
gulp.task('copydecs', () => {
    gulp.src(OPTIONS.files.declarations)
        .pipe(gulp.dest('build/'));
});

gulp.task('build', [ 'typescript', 'copydecs' ]);

