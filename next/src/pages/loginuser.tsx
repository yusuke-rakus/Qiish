import Router from "next/router";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import getCookie, { settingUserId } from "../lib/cookie/handleCookie";
import { loginUser } from "../lib/api/fetchData";

const goToReissue = () => {
  Router.push("/reissuePassword");
};

const LoginUser: React.FC = () => {
  // メールアドレス
  const [mailAddress, setMailAddress] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setMailAddress(e.target.value);
  // パスワード
  const [password, setPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // ログイン処理
  const Login = async () => {
    const response = await loginUser(mailAddress, password);

    // ユーザーIDをCookieに設定
    settingUserId(response.userId);

    // ユーザーIDをCookieから取得
    getCookie();

    //error(ログイン失敗):エラーメッセージ表示 /success(ログイン成功):ホーム画面に遷移
    if (response.status == "error") {
      toast.error(`ログインに失敗しました`);
    } else {
      toast.success(`ログインに成功しました`);
      Router.push("/");
    }
  };

  return (
    <div className="pb-28 h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <Toaster />
      <div className="mr-56 text-4xl font-semibold text-orange-500">Login</div>
      <input
        type="text"
        onChange={onChangeMailAddress}
        placeholder="E-mail（rakusのメールアドレス）"
        className="m-4 px-6 py-4 w-80 bg-white rounded-sm"
      />
      <input
        type="password"
        onChange={onChangePassword}
        placeholder="Password（英数字8文字以上）"
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />
      <button
        onClick={goToReissue}
        className="ml-40 text-sm text-gray-500 no-underline hover:underline"
      >
        パスワードを忘れた場合
      </button>
      <button
        onClick={() => {
          Login();
        }}
        className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600"
      >
        ログイン
      </button>
    </div>
  );
};

export default LoginUser;
