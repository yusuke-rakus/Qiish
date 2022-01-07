<template>
  <div class="w-full bg-white flex">
    <div class="w-3/5 my-20 mx-20">
      <div class="text-5xl font-semibold text-blue-500">
        How developers code is here.<br />Lets's share your experience.
      </div>
      <img class="w-96 h-96 mt-2 mx-20" :src="imageUrl" />
    </div>
    <div class="w-2/5 my-20 -ml-40">
      <div class="font-bold text-3xl m-4 -ml-4 text-blue-500">会員登録</div>
      <div class="font-bold">ユーザーネーム</div>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="ユーザーネーム"
          v-model="userName"
        />
      </div>
      <div class="font-bold">メールアドレス</div>
      <span class="text-red-600">{{ errorOfMailAddress }}</span>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="メールアドレス"
          v-model="mailAddress"
        />
      </div>
      <div class="font-bold">パスワード</div>
      <span class="text-red-600">{{ errorOfPassword }}</span>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="パスワード"
          v-model="password"
        />
      </div>
      <div class="font-bold">確認用パスワード</div>
      <span class="text-red-600">{{ errorOfCheckpassword }}</span>
      <div>
        <input
          type="text"
          class="p-2 m-4 w-96 border-2 rounded-xl"
          placeholder="確認用パスワード"
          v-model="checkPassword"
        />
      </div>
      <button
        type="button"
        v-on:click="registerUser"
        class="bg-blue-500 rounded-lg p-2 w-40 mx-32 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        会員登録
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import axios from "axios";

  @Component
  export default class RegisterUser extends Vue {
    // ユーザーネーム
    private userName = "";
    // メールアドレス
    private mailAddress = "";
    // パスワード
    private password = "";
    // 確認用パスワード
    private checkPassword = "";
    // 画像
    private imageUrl = "img/engineer.png";
    // エラーメッセージ（メールアドレス）
    private errorOfMailAddress = "";
    // エラーメッセージ（パスワード）
    private errorOfPassword = "";
    // エラーメッセージ（確認用パスワード）
    private errorOfCheckpassword = "";

    async registerUser(): Promise<void> {
      if (this.hasErrors()) {
        return;
      }

      const response = await axios.post(`http://spring:9090/user/register`, {
        userName: this.userName,
        email: this.mailAddress,
        password: this.password,
      });

      console.log(response);

      if (
        response.data.message == "そのメールアドレスはすでに使われています。"
      ) {
        this.errorOfMailAddress =
          "この「メールアドレス」は既に使用されています。";
        return;
      }

      // if (response.data.status == "success" && this.checkPassword !== "") {
      //   this.$router.push("/loginUser");
      // }
    }

    private hasErrors(): boolean {
      // エラー変数
      let hasError = false;

      //未入力値チェック（メールアドレス）/ ＠が含まれているかのチェック
      if (this.mailAddress === "") {
        this.errorOfMailAddress = "「メールアドレス」が未入力です。";
        hasError = true;
      } else if (this.mailAddress.indexOf("@") === -1) {
        this.errorOfMailAddress =
          "この「メールアドレス」は有効ではありません。";
        hasError = true;
      } else {
        this.errorOfMailAddress = "";
      }

      //未入力値チェック（パスワード）
      if (this.password === "") {
        this.errorOfPassword = "「パスワード」が未入力です。";
        hasError = true;
      } else if (this.password.length < 8 || 12 < this.password.length) {
        this.errorOfPassword = "8文字以上12文字以内で入力して下さい。";
        hasError = true;
      } else if (this.isValidPassword() == false) {
        this.errorOfPassword = "大文字小文字の英字と数字を含め入力して下さい。";
        hasError = true;
      } else {
        this.errorOfPassword = "";
      }

      //未入力値チェック（確認用パスワード）とパスワード一致チェック
      if (this.checkPassword === "") {
        this.errorOfCheckpassword = "「確認用パスワード」が未入力です。";
        hasError = true;
      } else if (
        this.password !== this.checkPassword &&
        this.checkPassword !== ""
      ) {
        this.errorOfCheckpassword =
          "パスワードと確認用パスワードが異なります。";
        hasError = true;
      } else {
        this.errorOfCheckpassword = "";
      }

      return hasError;
    }

    isValidPassword(): boolean {
      const ratz = /[a-z]/,
        rAtZ = /[A-Z]/,
        r0t9 = /[0-9]/;
      return (
        ratz.test(this.password) &&
        rAtZ.test(this.password) &&
        r0t9.test(this.password)
      );
    }
  }
</script>
