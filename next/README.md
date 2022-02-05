## フロント src ディレクトリの構成

#### Atomic Desgin と Presentational,Container Component を用いて src ディレクトリの構成を作成。

```
src
|-components(Presentational)
| |-atoms
| |-molecules
| |-organisms
|
|-const(共通の定数)
|-hooks(カスタムフックス)
|-lib(カスタムフックス以外のメソッド)
| |-api
| |-cookie
|
|-pages(Container)
| |-[].tsx
|
|-styles(globalなCSS)
|-templates(Container)
```

[参考記事](https://maku.blog/p/4is2ahp/)

---

## Jest の設定

Jest の設定は下記の記事と公式を参考
[フロントエンド(Next.js)のテストについてまとめる](https://qiita.com/suzu1997/items/e4ee2fc1f52fbf505481)
[VSCode で Jest を用いる際に必要な設定](https://jestjs.io/ja/docs/configuration)
