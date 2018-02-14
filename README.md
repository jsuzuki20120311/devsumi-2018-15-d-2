# Developers Summit 2018 1日目 【15-D-2】補足用リポジトリ

## 概要

Developers Summit 2018 1日目【15-D-2】の補足用リポジトリです。


## 各ディレクトリ説明

### [1-sample-babel-project](./tree/work/1-sample-babel-project)

 * 単純なBabelを使用したプロジェクトです。

 * Babelを使用して、EcmaScript2015からEcmaScript5で書いたソースへのトランスパイル、トランスパイル後のコードをNode.jsでの実行を確認するプロジェクトです。


### [2-sample-webpack-project](./tree/work/2-sample-webpack-project)

 * webpackを使用したサンプルプロジェクト

 * import/export 構文を使用するためにBabelも使用しています。Reactは使用していません。


### [3-sample-webpack-react-project](./tree/work/3-sample-webpack-react-project)

 * webpackとReactを使用したサンプルプロジェクト

 * import/export 構文を使用するためにBabelも使用しています。


### [4-sample-react-jquery-project](./tree/work/4-sample-react-jquery-project)

 * React.Component で jQueryを使用したUIをラップしたコンポーネントを作成したサンプルプロジェクト。

 * 例では <a href="https://select2.org/" target="_blank">Select2</a> をラップしてReact.Component化しています。


### [5-sample-react-jquery-project-type-check](./tree/work/5-sample-react-jquery-project-type-check)

 * 3-sample-webpack-react-project に TypeScriptの型チェックを組み合わせたプロジェクトです。

 * TypeScriptのバージョン2.3で追加されたJavaScriptファイルのJsDocをもとに型チェックを行う機能のみを組み合わせたサンプルです。
