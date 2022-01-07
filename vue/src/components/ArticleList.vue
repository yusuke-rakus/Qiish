<template>
  <div class="bg-white border p-8 m-2 box-content rounded-lg shadow-md flex">
    <div>
      <div class="font-sans text-xs">@rakus111111が12月7日に投稿しました</div>
      <div class="font-bold text-xl no-underline hover:underline">
        TailwindCSSのチートシートを公開します。
      </div>
      <div class="m-1">
        <span
          class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
        >
          フロントエンド
        </span>
        <span
          class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
        >
          CSS
        </span>
        <span
          class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
        >
          TailwindCSS
        </span>
        <span
          class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
        >
          初心者
        </span>
      </div>
    </div>
    <div class="bg-gray-100 box-content ml-8 h-30 w-1/5 p-8 text-center">
      NoImage
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Article } from "../types/article";

@Component
export default class ArticleList extends Vue {
  //記事一覧を格納する配列
  private articleList = Array<Article>();

  /**
   * WebAPIから記事一覧を取得する.
   *
   * @remarks 全商品一覧をAPIからアクションで取得、ミューテーションで商品オブジェクト化したものを商品一覧配列に格納
   */
  async created(): Promise<void> {
    await this["$store"].dispatch("getAritcleList");

    this.articleList = this["$store"].getters.getAllArticles;
  }

  /**
   *記事一覧を取得.
   *
   * @remarks 商品検索のサジェスト機能をするために全件取得メソッドを作成
   */
  get getAllArticle(): void {
    return this["$store"].getters.getAllArticles;
  }
}
</script>
