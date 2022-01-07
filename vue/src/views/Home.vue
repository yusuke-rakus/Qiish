<template>
  <div class="flex">
    <div class="w-2/6 h-screen bg-gray-100">
      <Profile />
    </div>
    <div class="w-4/6 h-screen bg-gray-100 overflow-y-auto">
      <ArticleList />
    </div>
    <div class="w-2/6 h-screen bg-gray-100">
      <button
        type="button"
        class="py-2 px-5 m-4 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
      >
        記事を投稿する
      </button>
      <button
        type="button"
        class="py-2 px-5 m-4 -mt-2 bg-white text-blue-500 border-2 border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-400 w-11/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:bg-blue-500 hover:text-white rounded-xl"
      >
        ブログを投稿する
      </button>
      <div class="h-3/4 m-2 bg-white rounded-lg border shadow-md"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleList from "@/components/ArticleList.vue";
import Profile from "@/components/Profile.vue";

@Component({
  components: {
    Profile,
    ArticleList,
  },
})
export default class Home extends Vue {}
</script>
