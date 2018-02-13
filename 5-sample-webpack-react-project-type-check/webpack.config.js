/**
 * webpack設定ファイル
 *
 * package.jsonのscripts経由でwebpackを実行しています。scriptsでは明示的に設定ファイルを指定していませんが、
 * webpackはデフォルトで「webpack.config.js」を参照するため、このファイルが設定として使用されます。
 *
 * 設定についての詳細は以下を参照してください。
 * {@link https://webpack.js.org/configuration/|webpack Configuration}
 */

// var path = require('path'); 出力先ディレクトリなどをプロジェクトディレクトリ以外に出力する場合、パスを解決する際に使用します。
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {

	devtool: 'source-map',

	// エントリポイントの設定
	// エントリポイントのファイルが増えた場合ここに出力後のパスと、エントリポイントのパスを追加すること
	entry: {

		'dist/js/app.js': './src/js/main.jsx',

		'dist/js/vendor.js': './src/js/vendor.js',

		'dist/css/style.css': './src/css/style.css'
	},

	// HTML側のscriptタグでグローバルで読み込まれているオブジェクトを以下のようなimport文で明示的に参照できるようにします。
	// import $ from 'jquery';
	externals: {
		// 今は指定しない。何か指定する必要がでた場合にはここに指定する。
	},

	// ファイルの出力設定
	output: {
		// 出力先ディレクトリのパスを指定 
		// __dirname はNode.js側のグローバル変数です。
		// 現在実行中のスクリプト(この場合webpack.config.js)が置かれているディレクトリのパスを保持しています。
		path: __dirname,
		// entry 項目のキー.js で出力されます
		filename: '[name]'
	},

	module: {
		rules: [
			// .jsファイルと.jsxファイルはBabelでトランスパイルするように設定します
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			// .cssファイルの @importを解決してビルドするための設定です。
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: "css-loader"
				})
			},
		]
	},

	plugins: [
		// 環境変数を、ビルド対象JavaScriptからも参照できるように設定しています。
		// console.log(process.env.NODE_ENV); // production か development が出力されます。
		// この変数はReactで参照されるほか、開発と本番とで、設定を変更する必要がある際も使用できます。
		// {@link https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build}
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),

		// 外部ライブラリを別ファイルとして出力するよう設定
		new webpack.optimize.CommonsChunkPlugin({
			// 共通アセット対象のentry
			name: 'vendor',
			// 共通アセットを参照する側のentry
			chunks: [
				'app'
			],
			// minChunksに数値を設定すると、chunksに設定したファイルから、設定した回数以上共通して参照されたモジュールを、
			// 自動的に共通アセット側に出力されるよう設定できます。
			// Infinityを設定することで、vendor.jsxに明示的にimportしたモジュールのみが共通アセットとして出力されます。
			minChunks: Infinity
		}),

		new ExtractTextPlugin('[name]')
	],

	resolve: {
		// 依存解決する拡張子を配列で指定します。
		// ここに登録した拡張子は import時に省略できます。
		extensions: ['.js', '.jsx']
	},

	// 開発用サーバー設定　本番用サーバーをそのまま使用するならこの設定は不要で webpack-dev-serverのインストールも不要
	devServer: {
		port: 3005
	}
};

// リリース用のビルド設定。
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}));
}

module.exports = config;
