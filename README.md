# gulp-starter

gulp で FLOCSS × Dart Sass のコーディングをするためのスターターキット。

## 使い方

Git のリポジトリをコピー後、ターミナルで以下のコマンドを実行。

`npm install`

`npx gulp`

## gulp の機能

- Dart Sass のコンパイル
- CSS の縮小化
- JavaScript の縮小化
- ローカルサーバーの立ち上げ
- 作業ファイルの監視（自動更新）

## 構成

```
docs
src
```

### gulpfile.js

上述した gulp の機能を記載しているファイル。

### docs

コンパイル後の HTML や CSS（納品・デプロイするフォルダ）

github pages の公開ディレクトリで docs を選択すると通常通り公開することも可能。

### src

コーディング用の HTML や SCSS ファイル

### src/asset/sass

Sass のコーディングファイル。CSS 設計は FLOCSS を採用。
