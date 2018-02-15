# 3-sample-webpack-react-project

webpackを使用してReactを使用したプロジェクトをビルドするサンプルプロジェクト


## 必要なライブラリのインストール

```
$ npm install
```


## 確認用サーバーの実行

```
$ npm run server
```

 * ブラウザから http://localhost:3003 にアクセス。

 * 合計金額の税込みを算出する計算機が実行されます。

## 本番環境向けビルド

```
$ npm run build
```

distディレクトリに、EcmaScript5にトランスパイル, 依存関係を解決してまとめらたファイルが出力されます。

