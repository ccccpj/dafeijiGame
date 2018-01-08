var gulp =require("gulp");
var uglify=require("gulp-uglify");
var babel = require('gulp-babel');
var minifyCss = require('gulp-minify-css');


gulp.task("bullet",function(){
	gulp.src("dafeiji_1/js/bullet.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe( uglify() ) //使用插件uglify
		.pipe(gulp.dest("dafeiji_2/js") );	
})
gulp.task("common",function(){
	gulp.src("dafeiji_1/js/common.js")
		.pipe( uglify() ) //使用插件uglify
		.pipe(gulp.dest("dafeiji_2/js") );	
})
gulp.task("enemy",function(){
	gulp.src("dafeiji_1/js/enemy.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe( uglify() ) //使用插件uglify		
		.pipe(gulp.dest("dafeiji_2/js") );	
})
gulp.task("gameEngine",function(){
	gulp.src("dafeiji_1/js/gameEngine.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe( uglify() ) //使用插件uglify		
		.pipe(gulp.dest("dafeiji_2/js") );	
})
gulp.task("myPlane",function(){
	gulp.src("dafeiji_1/js/myPlane.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe( uglify() ) //使用插件uglify
		.pipe(gulp.dest("dafeiji_2/js") );	
})

gulp.task("css",function(){
	gulp.src("dafeiji_1/css/dafeiji.css")
		.pipe( minifyCss() ) //使用插件uglify
		.pipe(gulp.dest("dafeiji_2/css") );	
})


//gulp.task("default",["bullet","common","enemy","gameEngine","myPlane"]);
gulp.task("default",["css"]);