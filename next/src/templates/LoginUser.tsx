import React, { useState } from "react";
import Image from "next/image";
import { InputStrType } from "../const/Types";
import LoginUserComp from "../components/old_organisms/LoginUserComp";

const LoginUser: React.FC = () => {
  // ログインデータ
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  // エラーメッセージ
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = async (): Promise<void> => {
    // const response = await axios.post(`http://spring:9090/user/login`, {
    //   email: mailAddress,
    //   password: password,
    // });
    // if (response.data.status == "error") {
    setErrorMessage("ログインに失敗しました");
    // }
  };

  // 入力データをステートにセットする処理
  const changeMailAddress = (e: InputStrType) => setMailAddress(e.target.value);
  const changePassword = (e: InputStrType) => setPassword(e.target.value);

  return (
    <div className="w-full bg-white flex">
      <div className="w-3/5 my-20 mx-20">
        <div className="text-5xl font-semibold text-blue-500">
          How developers code is here.
          <br />
          Lets&apos;s share your experience.
        </div>
        <div className="mt-3 mx-20">
          <Image src="/img/engineer.png" alt="画像" width={382} height={382} />
        </div>
      </div>
      <div className="w-2/5 my-20 mx-20">
        <LoginUserComp
          loginTitleText="ログイン"
          mailAdressText="メールアドレス"
          passwordText="パスワード"
          onChangeMailAddress={changeMailAddress}
          onChangePassword={changePassword}
          onClick={loginUser}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default LoginUser;
