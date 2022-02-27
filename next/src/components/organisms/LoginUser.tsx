import Router from "next/router";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import getCookie, { settingUserId } from "../../lib/cookie/handleCookie";
import { loginUser } from "../../lib/api/fetchData";

export type register = {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

const goToReissue = () => {
  Router.push("/reissuePassword");
};

const LoginUser: React.FC<register> = ({ isRegistered, setIsRegistered }) => {
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
      <div className="w-80 flex justify-between">
        <div className="text-4xl font-semibold text-sky-500">Quish</div>
      </div>
      <input
        type="text"
        onChange={onChangeMailAddress}
        placeholder="E-mail（rakusのメールアドレス）"
        className="m-4 px-6 py-4 w-80 bg-white rounded border-2 focus:outline-none focus:border-sky-500"
      />
      <input
        type="password"
        onChange={onChangePassword}
        placeholder="Password（英数字8文字以上）"
        className="px-6 py-4 w-80 bg-white rounded border-2 focus:outline-none focus:border-sky-500"
      />

      <div className="flex justify-between w-80">
        <button className="hover:underline" onClick={goToReissue}>
          パスワードを忘れた場合
        </button>
        <button
          className="hover:underline"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          会員登録はこちら
        </button>
      </div>

      <button
        onClick={() => {
          Login();
        }}
        className="px-6 py-4 w-80 bg-sky-400 text-white text-xl text-center rounded-md hover:bg-sky-600"
      >
        ログイン
      </button>
    </div>
  );
};

export default LoginUser;
