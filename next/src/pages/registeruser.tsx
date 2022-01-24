import axios from "axios";
import Router from "next/router";
import { message, Select } from "antd";
import { ChangeEvent, useState } from "react";

const RegisterUser: React.FC = () => {
  // ユーザーネーム
  const [userName, setUserName] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  // エラーメッセージ（ユーザーネーム）
  const [errorOfUserName, setErrorOfUserName] = useState<string>("");

  // エンジニアタイプ（職種）
  const [engineerType, setEngineerType] = useState<string>("");
  // 選択したエンジニアタイプ（職種）をStateに設定
  const onChangeSelectJob = (e: any) => setEngineerType(e.target.value);
  // エラーメッセージ（エンジニアタイプ）
  const [errorOfEnginnerType, setErrorOfEnginnerType] = useState<string>("");

  // メールアドレス
  const [mailAddress, setMailAddress] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setMailAddress(e.target.value);
  // エラーメッセージ（メールアドレス）
  const [errorOfMailAddress, setErrorOfMailAddress] = useState<string>("");

  // パスワード
  const [password, setPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  // エラーメッセージ（パスワード）
  const [errorOfPassword, setErrorOfPassword] = useState<string>("");

  // 確認用パスワード
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);
  // エラーメッセージ（確認用パスワード）
  const [errorOfConfirmPassword, setErrorOfConfirmPassword] =
    useState<string>("");

  // 会員登録処理
  const register = async () => {
    if (hasErrors()) {
      return;
    }

    const res = await axios.post("http://localhost:9090/user/register", {
      userName: userName,
      engineerType: engineerType,
      email: mailAddress,
      password: password,
    });

    //コンソールに入力値を出力（確認出来たら削除する）
    console.log("ユーザーネーム" + userName);
    console.log("エンジニアタイプ" + engineerType);
    console.log("メールアドレス" + mailAddress);
    console.log("パスワード" + password);
    console.log("確認用パスワード" + confirmPassword);

    //レスポンスデータを出力（確認出来たら削除する）
    console.log(res);

    Router.push("/loginuser");
  };

  // 入力値エラーチェック
  const hasErrors = () => {
    // エラー変数
    let hasError = false;
    //未入力値チェック（ユーザーネーム）
    if (userName === "") {
      setErrorOfUserName("「ユーザーネーム」が未入力です。");
      hasError = true;
    } else {
      setErrorOfUserName("");
    }
    //未入力値チェック（エンジニアタイプ）
    if (engineerType === "") {
      setErrorOfEnginnerType("「職種」を入力して下さい。");
      hasError = true;
    } else {
      setErrorOfEnginnerType("");
    }
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
    } else if (password.length < 8) {
      setErrorOfPassword("「パスワード」は8文字以上にして入力して下さい。");
      hasError = true;
    } else {
      setErrorOfPassword("");
    }

    //未入力値チェック（確認用パスワード）とパスワード一致チェック
    if (confirmPassword === "") {
      setErrorOfConfirmPassword("「確認用パスワード」が未入力です。");
      hasError = true;
    } else if (password !== confirmPassword && confirmPassword !== "") {
      setErrorOfConfirmPassword("パスワードと確認用パスワードが異なります。");
      hasError = true;
    } else {
      setErrorOfConfirmPassword("");
    }
    return hasError;
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center">
      <div className="mr-48 text-4xl font-semibold text-orange-500">
        Register
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfUserName}</span>
        <span className="text-red-500">{errorOfEnginnerType}</span>
        <div className="flex">
          <input
            type="text"
            onChange={onChangeUserName}
            placeholder="Username"
            className="px-6 py-4 w-40 bg-white rounded-sm"
          />

          <select
            value={engineerType}
            onChange={onChangeSelectJob}
            className="ml-4 px-4 py-4 w-36 bg-white rounded-sm"
          >
            <option>Please select</option>
            <option value="1">FR</option>
            <option value="2">Web</option>
            <option value="3">CL</option>
            <option value="4">QA</option>
            <option value="5">ML</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-red-500">{errorOfMailAddress}</span>
        <input
          type="text"
          onChange={onChangeMailAddress}
          placeholder="E-mail（rakusのメールアドレス）"
          className="px-6 py-4 w-80 bg-white rounded-sm"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfPassword}</span>
        <input
          type="text"
          onChange={onChangePassword}
          placeholder="Password（英数字8文字以上）"
          className="px-6 py-4 w-80 bg-white rounded-sm"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfConfirmPassword}</span>
        <input
          type="text"
          onChange={onChangeConfirmPassword}
          placeholder="Confirm Password"
          className="px-6 py-4 w-80 bg-white rounded-sm"
        />
      </div>

      <button
        onClick={() => register()}
        className="px-6 py-4 w-80 bg-orange-400 text-white text-xl text-center rounded-md hover:bg-amber-600"
      >
        会員登録
      </button>
    </div>
  );
};

export default RegisterUser;
