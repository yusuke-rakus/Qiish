import { Article } from "@/types/article";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    //記事一覧が入る配列
    articleList: new Array<Article>(),
  },
  mutations: {
    /**
     * 記事一覧情報を作成してstateに格納する.
     * @param state - ステートオブジェクト
     * @param payload - 外部APIから商品一覧情報を取得
     */
    getArticleList(state, payload) {
      for (const article of payload.articles) {
        state.articleList.push(
          new Article(article.id, article.title, article.content)
        );
      }
    },
  },
  actions: {
    /**
     * 記事一覧をAPIから取得.
     * @remarks 取得した記事一覧をJSON形式でペイロードに格納。
     * ミューテーションからgetArticleListメソッドを呼び出してオブジェクト化している
     * @param context - コンテキスト
     *
     */
    async getAritcleList(context) {
      const response = await axios.get(
        "http://153.127.48.168:8080/ecsite-api/item/items/coffee"
      );
      const payload = response.data;

      //(memo)ミューテーションから呼び出している
      context.commit("getArticleList", payload);
    },
  },
  modules: {},
  getters: {
    /**
     * 記事一覧を取得する.
     * @param state - ステートオブジェクト
     * @returns - 記事一覧
     */
    getAllArticles(state) {
      return state.articleList;
    },
  }, //end getters
});
