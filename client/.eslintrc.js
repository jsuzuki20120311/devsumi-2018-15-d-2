/**
 * ESLintの設定ファイル
 *
 * ESLint は JavaScript のための静的検証ツールで、 コードを実行する前に明らかなバグを見つけたり、コードのスタイルを統一したりするツールです。
 *
 * MyReferのJavaScriptソースファイル全てにチェックを行いたい場合、npm scriptsを通してチェックを行います。
 * チェックから除外するファイルやディレクトリは ./eslintignore で管理しています。
 * devディレクトリ以下で npm run eslint コマンドを実行します。
 * このコマンドの内容は package.json の scripts欄に書かれています。
 * また、ESLintの設定については以下のURLを参照してください。
 *
 * {@link https://eslint.org/}
 */

module.exports = {
	// JavaScriptがどこで動くことを前提にしているかを設定します。
	"env": {
		// 動作環境をブラウザとする。
		"browser": true,
		// WEB版のプッシュ通知にServiceWorkerを使用しているのでそれ用の設定です。
		"serviceworker": true,
		// dev/src/app.js にあるような require を解析する場合 true にします。
		"commonjs": true,
		// ES6(ES2015)を有効とするフラグ
		"es6": true 
	},

	 // ESLintデフォルトで用意してくれているおすすめ設定を拡張するように設定
	 // eslint:recommended のチェック内容は以下のURLの一覧で、チェックが入っている項目です。
	 // {@link https://eslint.org/docs/rules/}
	"extends": "eslint:recommended",

	// ES2015とReactを組み合わせて使用する場合のオプション
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},

	// React用のプラグインを使用するための設定 package.jsonで管理している eslint-plugin-react を使用します。
	// 今後もし eslint-plugin-hogehoge のようなプラグインを追加する場合、ここにhogehoge部分の文字列を追加します。
	"plugins": [
		"react"
	],

	// グローバル変数を設定します。
	// ここで設定した変数名は、各JavaScriptファイル内で宣言しないで使用し始めてもエラーとなりません。
	// また、trueを設定した場合、その変数に再代入を行おうとした場合エラーとなります。falseを設定した場合再代入してもエラーとなりません。
	// false の場合: MyRefer = { hoge: 'fuga' }; // Error
	"globals": {
		// 外部ライブラリ系
		"Chart": false,
		"Clipboard": false,
		"CodeMirror":false,
		"$": false,
		"jQuery": false,
		"Taggle": false,
		"Twn": false,

		// GoogleTagManagerで提供されている変数
		"dataLayer": false,

		// Smarty経由でサーバー空JavaScript側に値を渡している変数
		"server_param": true,
		"login_user_info": true,
		"badge_param": true,

		// MyRefer側のソースコードで作成している名前空間
		"MyRefer": false,
		"Common": false,
		"csvUpload": false,
		"dashboard": false,
		"detail": false,
		"excelUpload": false,
		"Library": false,
		"Message": false,
		"News": false,
		"newCreate": false,
		"Notice": false,
		"noticeCommon": false,
		"Page": false,
		"Recruit": false,
		"recruitCommon": false,
		"Setup": false,
		"SmartPhone": false,
		"staffList": false,
		"Util": false,
		"Incentive": false,
		"Index": false
	},

	// ルールを設定します。
	// 上の方で、"extends": "eslint:recommended を指定しているので、おすすめ設定にここで指定したルールが追加(上書き)されていきます。
	"rules": {
		// 標準ではESLintがReactの構文に対応しておらず、以下のようなコードで、
		// import HogeComponent from './hoge-component.jsx';
		// <HogeComponent>fuga</HogeComponent>
		// HogeComponent が宣言されているが使用されていない変数として扱われていしまうため、それを防ぐための設定
		"react/jsx-uses-vars": 1,

		// 半角スペースとTabが混ざったインデントはおすすめ設定だとエラーとなるが、実害は無いので一旦無視するよう設定します。
		// それ以外の優先度の高いエラーを掃除し終えたらこの設定を外す。
		"no-mixed-spaces-and-tabs": [
			"off"
		],

		// おすすめ設定では使用されていない変数が存在する場合エラーとなるが、実害はないので一旦警告レベルとします。
		// 優先度の高い事項が解消されたらこの設定を外す。
		"no-unused-vars": [
			"off"
		],

		// おすすめ設定では不必要な文字のエスケープについてエラーとするが、実害はないので一旦無視する。
		"no-useless-escape": [
			"off"
		],

		// evalを使用した場合エラーとします。
		// evalは多くの場合JSON.parseで代用できるし、脆弱性の元となる可能性があるためエラーとします。
		"no-eval": [
			"error"
		],

		// 文末にセミコロンが無い場合、以下のように文末にセミコロンがなく続く行が ( で始まっていた場合、
		// 'fuga'が function と扱われバグの素となりかねないので、エラーとする。
		// var hoge = 'fuga'
		// (function() {  })
		"semi": [
			"error",
			"always"
		]
	}
};
