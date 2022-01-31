import { useState } from "react";

export const useRegisterChecker = (
  userName: string,
  engineerType: string,
  mailAddress: string,
  password: string,
  confirmPassword: string
) => {
  // エラーメッセージ（ユーザーネーム）
  const [errorOfUserName, setErrorOfUserName] = useState<string>("");
  // エラーメッセージ（エンジニアタイプ）
  const [errorOfEnginnerType, setErrorOfEnginnerType] = useState<string>("");
  // エラーメッセージ（メールアドレス）
  const [errorOfMailAddress, setErrorOfMailAddress] = useState<string>("");
  // エラーメッセージ（パスワード）
  const [errorOfPassword, setErrorOfPassword] = useState<string>("");
  // エラーメッセージ（確認用パスワード）
  const [errorOfConfirmPassword, setErrorOfConfirmPassword] =
    useState<string>("");

  // 入力値エラーチェック
  const errorCheck = () => {
    // エラー変数
    let hasError = false;
    //未入力値チェック（ユーザーネーム）
    if (userName === "") {
      setErrorOfUserName("ユーザーネームが未入力です。");
      hasError = true;
    } else {
      setErrorOfUserName("");
    }
    //未入力値チェック（エンジニアタイプ）
    if (engineerType === "") {
      setErrorOfEnginnerType("職種を選択して下さい。");
      hasError = true;
    } else {
      setErrorOfEnginnerType("");
    }
    //未入力値チェック（メールアドレス）/ ＠が含まれているかのチェック
    if (mailAddress === "") {
      setErrorOfMailAddress("メールアドレスが未入力です。");
      hasError = true;
    } else if (mailAddress.indexOf("@rakus-partners.co.jp") === -1) {
      setErrorOfMailAddress("このメールアドレスは有効ではありません。");
      hasError = true;
    } else {
      setErrorOfMailAddress("");
    }

    //未入力値チェック（パスワード）
    if (password === "") {
      setErrorOfPassword("パスワードが未入力です。");
      hasError = true;
    } else if (password.length < 8) {
      setErrorOfPassword("パスワードは8文字以上のものを設定して下さい。");
      hasError = true;
    } else {
      setErrorOfPassword("");
    }

    //未入力値チェック（確認用パスワード）とパスワード一致チェック
    if (confirmPassword === "") {
      setErrorOfConfirmPassword("確認用パスワードが未入力です。");
      hasError = true;
    } else if (password !== confirmPassword && confirmPassword !== "") {
      setErrorOfConfirmPassword("パスワードと確認用パスワードが異なります。");
      hasError = true;
    } else {
      setErrorOfConfirmPassword("");
    }
    return hasError;
  };
  return {
    errorOfUserName,
    errorOfEnginnerType,
    errorOfMailAddress,
    errorOfPassword,
    errorOfConfirmPassword,
    errorCheck,
  };
};
