<template>
  <div class="w-full bg-white flex">
    <div class="w-3/5 my-20 mx-20">
      <div class="text-5xl font-semibold text-blue-500">
        How developers code is here.<br />Lets's share your experience.
      </div>
      <img class="w-96 h-96 mt-2 mx-20" :src="imageUrl" />
    </div>
    <div class="w-2/5 my-20 -ml-40">
      <div class="font-bold text-3xl m-10 -ml-4 text-blue-500">ログイン</div>
      <div class="text-red-500">{{ errorMessage }}</div>
      <div class="font-bold">メールアドレス</div>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="メールアドレス"
          v-model="mailAddress"
        />
      </div>
      <div class="font-bold">パスワード</div>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="パスワード"
          v-model="password"
        />
      </div>
      <button
        type="button"
        v-on:click="loginUser"
        class="bg-blue-500 rounded-lg p-2 w-48 mx-28 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        ログイン
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import axios from "axios";

  @Component
  export default class RegisterUser extends Vue {
    // メールアドレス
    private mailAddress = "";
    // パスワード
    private password = "";
    // エラーメッセージ
    private errorMessage = "";
    private imageUrl = "img/engineer.png";

    async loginUser(): Promise<void> {
      const response = await axios.post(`http://app:8080/user/login`, {
        email: this.mailAddress,
        password: this.password,
      });

      console.log(response);

      if (response.data.status == "error") {
        this.errorMessage = "ログインに失敗しました";
      }
    }
  }
</script>
