import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { UserFormInput } from "../components/atoms";
import RegisterUserComp from "../components/organisms/RegisterUserComp";
import { InputStrType } from "../const/Types";

const RegisterUser: React.FC = () => {
  // 新規登録データ
  const [userName, setUserName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  // エラーメッセージ
  const [errorOfMailAddress, setErrorOfMailAddress] = useState("");
  const [errorOfPassword, setErrorOfPassword] = useState("");
  const [errorOfCheckpassword, setErrorOfCheckpassword] = useState("");

  const textLabel = {
    registerTitle: "会員登録",
    userName: "ユーザーネーム",
    mailAddress: "メールアドレス",
    password: "パスワード",
    checkPassword: "確認用パスワード",
  };

  const hasErrors = (): boolean => {
    // エラー変数
    let hasError = false;

    //未入力値チェック（メールアドレス）/ ＠が含まれているかのチェック
    if (mailAddress === "") {
      setErrorOfMailAddress("「メールアドレス」が未入力です。");
      hasError = true;
    } else if (mailAddress.indexOf("@") === -1) {
      setErrorOfMailAddress("この「メールアドレス」は有効ではありません。");
      hasError = true;
    } else {
      setErrorOfMailAddress("");
    }

    //未入力値チェック（パスワード）
    if (password === "") {
      setErrorOfPassword("「パスワード」が未入力です。");
      hasError = true;
    } else if (password.length < 8 || 12 < password.length) {
      setErrorOfPassword("8文字以上12文字以内で入力して下さい。");
      hasError = true;
    } else if (isValidPassword() == false) {
      setErrorOfPassword("大文字小文字の英字と数字を含め入力して下さい。");
      hasError = true;
    } else {
      setErrorOfPassword("");
    }

    //未入力値チェック（確認用パスワード）とパスワード一致チェック
    if (checkPassword === "") {
      setErrorOfCheckpassword("「確認用パスワード」が未入力です。");
      hasError = true;
    } else if (password !== checkPassword && checkPassword !== "") {
      setErrorOfCheckpassword("パスワードと確認用パスワードが異なります。");
      hasError = true;
    } else {
      setErrorOfCheckpassword("");
    }

    return hasError;
  };
  const isValidPassword = () => {
    const ratz = /[a-z]/,
      rAtZ = /[A-Z]/,
      r0t9 = /[0-9]/;
    return ratz.test(password) && rAtZ.test(password) && r0t9.test(password);
  };

  const registerUser = async (): Promise<void> => {
    if (hasErrors()) {
      return;
    }

    // ネットワークエラー発生おそらくCORS関連
    // const response = await axios.post(`http://spring:9090/user/register`, {
    //   userName: userName,
    //   email: mailAddress,
    //   password: password,
    // });

    // if (response.data.message == "そのメールアドレスはすでに使われています。") {
    //   setErrorOfMailAddress("この「メールアドレス」は既に使用されています。");
    //   return;
    // }

    // if (response.data.status == "success" && checkPassword !== "") {
    //   Router.push("/loginUser");
    // }
  };

  // 入力データをステートにセットする処理
  const changeUserName = (e: InputStrType) => setUserName(e.target.value);
  const changeMailAddress = (e: InputStrType) => setMailAddress(e.target.value);
  const changePassword = (e: InputStrType) => setPassword(e.target.value);
  const changeCheckPassword = (e: InputStrType) =>
    setCheckPassword(e.target.value);

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
      <div className="w-2/5 my-20 -ml-40">
        <RegisterUserComp
          textLabel={textLabel}
          onChangeUserName={changeUserName}
          onChangeMailAddress={changeMailAddress}
          onChangePassword={changePassword}
          onChangeCheckPassword={changeCheckPassword}
          onClick={registerUser}
          errorOfMailAddress={errorOfMailAddress}
          errorOfPassword={errorOfPassword}
          errorOfCheckpassword={errorOfCheckpassword}
        />
      </div>
    </div>
  );
};

export default RegisterUser;
