import { useRouter } from "next/router";
import { message } from "antd";
import Router from "next/router";
import { ChangeEvent, useState } from "react";
import { resetPassword } from "./api/addData";

const ResetPassword: React.FC = () => {
  const router = useRouter();

  // 新しいパスワード
  const [newPassword, setNewPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  //　パスワードリセット
  const reset = async () => {
    if (newPassword.length < 8) {
      message.info(`パスワードは8文字以上のものを設定して下さい。`);
      return;
    }
    const result = await resetPassword(String(router.query.email), newPassword);
    console.log(result);
    if (result === "error") {
      message.info(`新しいパスワードの設定に失敗しました。`);
    } else {
      message.info(`新しいパスワードの設定が完了しました。`);
      Router.push("/loginUser");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <div className="m-4 mr-20 text-4xl font-semibold text-orange-500">
        パスワード再設定
      </div>
      <div>登録中のメールアドレス：{router.query.email}</div>
      <input
        type="password"
        onChange={onChangeNewPassword}
        placeholder="新しいパスワード(英数字8桁以上)
        "
        className="px-6 py-4 w-80 bg-white rounded-sm"
      />

      <button
        onClick={() => {
          reset();
        }}
        className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600"
      >
        送信
      </button>
    </div>
  );
};

export default ResetPassword;
