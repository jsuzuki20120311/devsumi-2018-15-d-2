# sample-react-jquery-project

## 概要

 * React.Component で jQueryを使用したUIをラップしたコンポーネントを作成したサンプルプロジェクト。

 * 例では [Select2](https://select2.org/) をラップしてReact.Component化しています。


## 必要なライブラリのインストール

```
$ npm install
```


## 確認用サーバーの実行

```
$ npm run server
```

 * ブラウザから http://localhost:3004 にアクセス。

 * Select2 (検索できるselectbox)が表示されます。


## 本番環境向けビルド

```
$ npm run build
```

distディレクトリに、EcmaScript5にトランスパイル, 依存関係を解決してまとめらたファイルが出力されます。

