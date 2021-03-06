import Router from "next/router";
import { ChangeEvent, useState } from "react";
import { registerUser } from "../../lib/api/addData";
import { useRegisterChecker } from "../../hooks/useRegisterChecker";

export type register = {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterUser: React.FC<register> = ({
  isRegistered,
  setIsRegistered,
}) => {
  // ユーザーネーム
  const [userName, setUserName] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  // エンジニアタイプ（職種）
  const [engineerType, setEngineerType] = useState<string>("");
  // 選択したエンジニアタイプ（職種）をStateに設定
  const onChangeSelectJob = (e: any) => setEngineerType(e.target.value);

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

  // 確認用パスワード
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const {
    errorOfUserName,
    errorOfEnginnerType,
    errorOfMailAddress,
    errorOfPassword,
    errorOfConfirmPassword,
    errorCheck,
  } = useRegisterChecker(
    userName,
    engineerType,
    mailAddress,
    password,
    confirmPassword
  );

  // 会員登録処理
  const Register = () => {
    // エラーチェック(true:ログイン画面に遷移、false:ログイン画面に遷移せずエラーメッセージ表示)
    const hasError = errorCheck();
    if (hasError) {
      return;
    }

    registerUser(
      userName,
      engineerType,
      mailAddress,
      password,
      confirmPassword
    );
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="pb-16 h-screen w-screen flex flex-col gap-6 justify-center items-center">
      <div className="w-80 flex justify-between">
        <div className="text-4xl font-semibold text-sky-500">Quish</div>
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfUserName}</span>
        <span className="text-red-500">{errorOfEnginnerType}</span>
        <div className="flex">
          <input
            type="text"
            onChange={onChangeUserName}
            placeholder="Username"
            className="px-6 py-4 w-40 bg-white rounded border-2 focus:outline-none focus:border-sky-400"
          />

          <select
            value={engineerType}
            onChange={onChangeSelectJob}
            className="ml-4 px-4 py-4 w-36 bg-white rounded border-2 focus:outline-none focus:border-sky-400"
          >
            <option>Please select</option>
            <option value="FR">FR</option>
            <option value="Web">Web</option>
            <option value="CL">CL</option>
            <option value="QA">QA</option>
            <option value="ML">ML</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-red-500">{errorOfMailAddress}</span>
        <input
          type="text"
          onChange={onChangeMailAddress}
          placeholder="E-mail（rakusのメールアドレス）"
          className="px-6 py-4 w-80 bg-white rounded border-2 focus:outline-none focus:border-sky-500"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfPassword}</span>
        <input
          type="password"
          onChange={onChangePassword}
          placeholder="Password（英数字8文字以上）"
          className="px-6 py-4 w-80 bg-white rounded border-2 focus:outline-none focus:border-sky-500"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-red-500">{errorOfConfirmPassword}</span>
        <input
          type="password"
          onChange={onChangeConfirmPassword}
          placeholder="Confirm Password"
          className="px-6 py-4 w-80 bg-white rounded border-2 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col -mt-4">
        <button
          className="mb-2 self-end hover:underline"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          ログインはこちら
        </button>
        <button
          onClick={() => Register()}
          className="px-6 py-4 w-80 bg-sky-400 text-white text-xl text-center rounded hover:bg-sky-600"
        >
          会員登録
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
