import webpack from 'webpack';
import path from 'path';

const join = (...joinpath) => path.join.apply(undefined, [__dirname, ...joinpath]);

const config = {
	entry: {
		app: './index.js'
	},
	output: {
		path: join('./assets'),
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash:5].chunk.js',
		publicPath: '/assets/'
	},
	resolve: {
		root: [
			join('../node_modules')
		],
	  extensions: ['', '.js', '.jsx', '.css', '.scss'],
	  alias: {
	    root: join('..'),
	    utils: join('../utils'),
	    common: join('../common'),
	    fw: join('../modules/framework'),
	    cases: join('../modules/cases'),
	    admin: join('../modules/admin'),
	  }
	},
	module: {
		noParse: [join('../node_modules/lodash/lodash.js')],
		loaders: [
			{
			  test: /\.(js|jsx)$/,
			  loader: 'babel',
			  include: [join('..')]
			}, {
			  test: /\.json$/,
			  loader: 'json'
			}, {
			  test: /\.css$/,
			  loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]'
			}, {
			  test: /\.(sass|scss)$/,
			  loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!postcss-loader',
			  exclude: [join('../common/style'), /\.global\.(sass|scss)$/]
			}, {
			  test: /\.less$/,
			  loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!less-loader'
			}, {
			  test: /\.(sass|scss)$/,
			  loader: 'style-loader!css-loader!postcss-loader',
			  include: [join('../common/style'), /\.global\.(sass|scss)$/]
			}, {
			  test: /\.(png|jpg|jpeg|gif)$/,
			  loader: 'url-loader?limit=8192&name=resource/img/[hash].[ext]'
			}, {
			  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			  loader: 'url-loader?limit=10000&name=resource/font/[hash].[ext]&minetype=application/font-woff'
			}, {
			  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			  loader: 'file-loader?name=resource/font/[hash].[ext]'
			}
		]
	},
	postcss: () => [
	  // require('postcss-inline-comment'),
	  require('precss')
	],
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
		})
	]
}

if(process.env.NODE_ENV == 'production'){
	config.plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
		  compress: {
		    warnings: false
		  },
		  comments: false
		})
	])
} else {
	config.entry.app = [
		`webpack-dev-server/client?http://localhost:3000`,
		'webpack/hot/only-dev-server',
		config.entry.app
	]
	config.devtool = 'eval'
	config.plugins.unshift(
		new webpack.HotModuleReplacementPlugin()
	)
}

export default config