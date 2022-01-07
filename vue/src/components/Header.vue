<template>
  <header>
    <div class="bg-blue-500 w-full h-16 relative">
      <router-link to="/">
        <span class="text-white font-bold text-2xl absolute top-4 left-12"
          >Quish</span
        >
      </router-link>
      <span class="pl-40">
        <input
          type="search"
          class="p-2 pl-4 w-1/3 rounded-full absolute top-3 left-25"
          placeholder="キーワードを入力して記事を検索する"
      /></span>

      <span class="absolute top-3 right-12">
        <router-link to="/registeruser">
          <button
            class="text-white font-semibold text-sm border-2 px-6 py-2 rounded-3xl hover:bg-gray-100 hover:text-blue-500"
          >
            会員登録
          </button>
        </router-link>
        <router-link to="/loginuser">
          <button
            class="text-white font-semibold text-sm border-2 px-6 py-2 mx-4 rounded-3xl hover:bg-gray-100 hover:text-blue-500"
          >
            ログイン
          </button>
        </router-link>
        <button
          class="text-white font-semibold text-sm border-2 px-5 py-2 rounded-3xl hover:bg-gray-100 hover:text-blue-500"
        >
          ログアウト
        </button></span
      >
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
