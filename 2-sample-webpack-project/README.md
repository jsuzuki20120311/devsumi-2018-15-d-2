# 2-sample-babel-project

## 概要

 * webpackを使用したサンプルプロジェクト

 * import/export 構文を使用するためにBabelも使用しています。Reactは使用していません。


## 必要なライブラリのインストール

```
$ npm install
```


## 確認用サーバーの実行

```
$ npm run server
```

 * ブラウザから http://localhost:3002 にアクセス。

 * 画面上のボタンをクリックする。

 * 画面上に HELLO WORLD が出力されます。


## 本番環境向けビルド

```
$ npm run build
```

distディレクトリに、EcmaScript5にトランスパイル, 依存関係を解決してまとめらたファイルが出力されます。

