import gulp from 'gulp';
import webpack from 'webpack';
import {exec} from 'child_process';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import config from './config';

const {client: clientConfig} = config

gulp.task('dev', ['dev:client'])

gulp.task('dev:client', () => {
  const compiler = webpack(clientConfig.webpack);
  
  compiler.plugin('done', (stats) => {
    // run('lint');
  });
  
  new WebpackDevServer(compiler, {
    contentBase: './client',
    publicPath: clientConfig.webpack.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(clientConfig.port, config.host, (err, stats) => {
    if (err) console.log(err);
    console.log(`webpack was listenning: http://${config.host}:${clientConfig.port}`);
  });
});



gulp.task('build', () => {
	// build client
	webpack(clientConfig.webpack).run((err, stats) => {
		console.log(stats.toString({
			chunks: false,
			colors: true
		}))
    deploy(path.join(__dirname, '../cases/'))
	})
})

function deploy(path){
  exec(`cp *.php ${path}`, () => {
    console.log('php success')
    exec(`cp style.css ${path}`, () => {
      console.log('style.css success!')
      exec(`cp assets ${path}`, () => {
        console.log('assets success!')
      })
    })
  })
}
