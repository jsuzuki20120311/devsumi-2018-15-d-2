# 5-sample-webpack-react-project-type-check

webpackを使用してReactを使用したプロジェクトをビルドするサンプルプロジェクト

[3-sample-webpack-react-project](https://github.com/jsuzuki20120311/devsumi-2018-15-d-2/tree/work/3-sample-webpack-react-project)のプロジェクトに、TypeScriptの型チェックを組み合わせたプロジェクトです。


## 必要なライブラリのインストール

```
$ npm install
```


## 確認用サーバーの実行

```
$ npm run server
```

 * ブラウザから http://localhost:3005 にアクセス。

 * 合計金額の税込みを算出する計算機が実行されます。

## 本番環境向けビルド

```
$ npm run build
```

distディレクトリに、EcmaScript5にトランスパイル, 依存関係を解決してまとめらたファイルが出力されます。



## 型チェックの実行

以下のコマンドを実行してJsDocをもとに型チェックを実行できます。

また、エディタがTypeScriptに対応している場合、リアルタイムで型チェックによるエラーが分かります。

```
$ npm run type-check
```

