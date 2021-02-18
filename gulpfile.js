'use strict'

let gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create();

gulp.task('hello', gulp.series(function(){
    console.log('приветос');
 }));

//less
  let to_less = done =>{
      return gulp.src('app/less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('app/css'))+
      console.log('main.less сконвертированы и объеденены и успешно сконвертированы с файлом css и помещены в папку app')+
      done();
  }
//less
  
//  Browser Sync
  
  let browser_sync = done =>{
      browserSync.init({
      server:{
      baseDir: "./app"
    },
  });
  console.log('Сервер запущен');
done();
}
  
//  Browser Sync
  


//Watch
 let watch = () =>{
     gulp.watch('./app/less/**/*.less', to_less);
     console.log('Отслеживание файлов активировано')
 };
//Watch

  gulp.task('browser-sync', browser_sync);
  gulp.task('less', to_less);
  gulp.task('watch', gulp.parallel(browser_sync, to_less, watch));
