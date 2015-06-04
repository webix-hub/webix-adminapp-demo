var gulp = require('gulp');
var glob = require('glob');

var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var clean = require('gulp-clean');
var zip = require("gulp-zip");

var replace = require("gulp-replace");
var jshint = require("gulp-jshint");

gulp.task("css", function(){
	gulp.src('./assets/theme.*.less')
		.pipe(sourcemaps.init())
		.pipe(less({ compress:true }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest('./deploy/assets'));
});

gulp.task('js', function(){
	var views = glob.sync("views/**/*.js").map(function(value){
		return value.replace(".js", "");
	});

	var locales = glob.sync("locales/**/*.js").map(function(value){
		return value.replace(".js", "");
	});

	rjs({
		baseUrl: './',
		out: 'app.js',
		insertRequire:["app"],
		paths:{
			"locale" : "empty:",
			"text": 'libs/text'
		}, 
		deps:["app"],
		include: ["libs/almond.js"].concat(views).concat(locales)
	})
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write("./"))
	.pipe(gulp.dest('./deploy/'));
});

gulp.task("clean", function(){
	return gulp.src("deploy/*", {read: false}).pipe(clean());
});

gulp.task('build', ["js", "css"], function(){
	var build = (new Date())*1;

	return require('event-stream').merge(
		//assets
			  gulp.src("./assets/imgs/**/*.*")
		.pipe(gulp.dest("./deploy/assets/imgs/")),
		//libs
			  gulp.src("./libs/webix/**/*.*")
		.pipe(gulp.dest("./deploy/libs/webix/")),
		//index
			  gulp.src("./index.html")
		.pipe(replace('data-main="app" src="libs/require.js"', 'src="app.js"'))
		.pipe(replace('<script type="text/javascript" src="libs/less.min.js"></script>', ''))
		.pipe(replace(/rel\=\"stylesheet\/less\" href=\"(.*?)\.less\"/g, 'rel="stylesheet" href="$1.css"'))
		.pipe(replace(/\.css\"/g, '.css?'+build+'"'))
		.pipe(replace(/\.js\"/g, '.js?'+build+'"'))
		.pipe(replace("require.config", "webix.production = true; require.config"))
		.pipe(replace(/\.\.\/webix\/codebase\//g, '//cdn.webix.com/site/'))
		.pipe(replace(/cdn\.webix\.com\/edge/g, 'cdn.webix.com/site'))

		.pipe(gulp.dest("./deploy/")),
		//server
			  gulp.src("./server/**/*.*")
		.pipe(gulp.dest("./deploy/server/"))
	);
	
});

gulp.task("sources", function(){
	gulp.src(["assets/**/*", "helpers/**/*", "libs/**/*", "models/**/*", "server/**/*", "views/**/*","index.html", "app.js", "package.json"], 
		{base: './'})
	.pipe( zip("webix-admin-app.sources.zip") )
	.pipe( gulp.dest('./') );
});

gulp.task('lint', function() {
  return gulp.src('./views/**/*.js', './helpers/**/*.js', './models/**/*.js', './configs/**/*.js', './*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});