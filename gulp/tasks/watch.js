const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	gulp.task('html', () => {
	browserSync.reload();
	})

	watch('./app/index.html', () => {
		gulp.start('html');
	})

	watch('./app/assets/styles/**/*.css', () => {
		gulp.start('cssInject');
	})
})

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

