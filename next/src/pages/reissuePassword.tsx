import Router from "next/router";
import axios from "axios";
import { message } from "antd";
import { ChangeEvent, useState } from "react";
import { reissuePassword } from "./api/fetchData";

const ReissuePassword: React.FC = () => {
  // メールアドレス
  const [mailAddress, setMailAddress] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setMailAddress(e.target.value);

  const reissue = async () => {
    reissuePassword(mailAddress);
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <input
        type="text"
        onChange={onChangeMailAddress}
        placeholder="E-mail（rakusのメールアドレス)"
        className="m-4 px-6 py-4 w-80 bg-white rounded-sm"
      />
      <div>※パスワードを忘れた方は、パスワードの再発行をして下さい。</div>

      <button
        onClick={() => {
          reissue();
        }}
        className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600"
      >
        送信
      </button>
      <div>{reissue}</div>
    </div>
  );
};

export default ReissuePassword;
