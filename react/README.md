## フロント src ディレクトリの構成

#### Atomic Desgin とサイト記事を参考にしながら src ディレクトリの構成を考えました。

```
src
|-components
| |-atoms
| |-molecules
| |-organisms
|
|-const
|-hooks
|-pages
| |-api
| |-「page 名」.tsx
|
|-styles
|-templates
```

[参考記事](https://maku.blog/p/4is2ahp/)

---

**見た目を定義するディレクトリ(Presentational Components)**

- components/  
  役割 :「ロジックを持たず、渡された props を描画するコンポーネント」

  - atoms/
  - molecules/
  - organisms/

---

**ページディレクトリ(Container Components)**

- pages/  
  役割 :「URL パスに応じた tsx ファイルの表示,templates/にデータを流す」

  - api/ ← データフェッチ関数使用のため
  - 「page 名」.tsx

---

**テンプレートディレクトリ(Container Components)**

- templates/  
  役割 :「pages/から受け取ったデータをもとに処理を行う。components/に props を渡す」

---

**カスタム処理用ディレクトリ**

- hooks/  
  役割 :「カスタムフックスや共通処理の保有」

---

**定数用ディレクトリ**

- const/  
  役割 :「型定義や定数を保有するディレクトリ」

---

**CSS の記述**

- styles/  
  役割 :「CSS のコードを記述」

---
