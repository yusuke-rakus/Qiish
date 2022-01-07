<template>
  <div class="box-content h-96 m-2 bg-white rounded-lg border shadow-md">
    <div class="m-4">
      <div class="block ml-28 mr-28">@rakus1111111</div>
      <div class="m-4 flex jusify-around divide-x divide-black">
        <div class="flex-grow text-center">
          投稿数
          <div>11</div>
        </div>
        <div class="flex-grow text-center">
          フォロー
          <div>122</div>
        </div>
        <div class="flex-grow text-center">
          フォロワー
          <div>140</div>
        </div>
      </div>
      <div class="block">
        <div class="m-1">
          <span
            class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
          >
            フロントエンド
          </span>
          <span
            class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
          >
            TypeScript
          </span>
          <span
            class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
          >
            Vue
          </span>
          <span
            class="m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
          >
            TailwindCSS
          </span>
        </div>
      </div>
      <div class="block m-2">趣味はサウナです。</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {}
</script>
