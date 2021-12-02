# gulp-starter

gulp で FLOCSS × Dart Sass のコーディングをするためのスターターキット。

## 使い方

Git のリポジトリをコピー後、ターミナルで以下のコマンドを実行。

`npm install`

`npx gulp`

http://localhost:3000/

大体こちらの URL にてローカルサーバーが立ち上がる。  
HTML の編集や Sass のコンパイルに対して自動でリロードするようにも設定済み。

## gulp の機能

- Dart Sass のコンパイル
- CSS の縮小化
- JavaScript の縮小化
- ローカルサーバーの立ち上げ
- 作業ファイルの監視（自動更新）

## 構成

`src`内でコーディングして`docs`に出力させる構成。

```
docs
 │ index.html
 │
 └─asset
    ├─css
    ├─img
    └─js
src
 │ index.html
 │
 └─asset
    ├─img
    ├─js
    └─sass
       │ style.scss
       │
       ├─foundation
       │   _base.scss
       │   _reset.scss
       │   _system.scss
       │
       ├─layout
       │   _footer.scss
       │   _header.scss
       │
       └─object
          ├─component
          │   _loading.scss
          │   _section.scss
          │
          ├─project
          │   _contact.scss
          │
          └─utility
              _display.scss
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

Sass 自体は Dart Sass でコーディングしており、sass フォルダ直下の style.scss ですべての Sass ファイルを`@use`している。

```
sass
│ style.scss
│
├─foundation
│   _base.scss
│   _reset.scss
│   _system.scss
│
├─layout
│   _footer.scss
│   _header.scss
│
└─object
    ├─component
    │   _loading.scss
    │   _section.scss
    │
    ├─project
    │   _contact.scss
    │
    └─utility
        _display.scss
```
