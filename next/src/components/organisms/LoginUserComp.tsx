import React from "react";
import { Button } from "antd";
import UserFormInputs from "../molecules/UserFormInputs";

type Props = {
  loginTitleText: string;
  mailAdressText: string;
  passwordText: string;
  onChangeMailAddress: Function;
  onChangePassword: Function;
  onClick: Function;
  errorMessage: string;
};

const LoginUserComp: React.FC<Props> = ({
  loginTitleText,
  mailAdressText,
  passwordText,
  errorMessage,
  onChangeMailAddress,
  onChangePassword,
  onClick,
}) => {
  const INPUT_ITEMS_DATA = [
    { name: mailAdressText, onChange: onChangeMailAddress, errorMsg: "" },
    { name: passwordText, onChange: onChangePassword, errorMsg: "" },
  ];
  return (
    <React.Fragment>
      <div className="font-bold text-3xl m-10 -ml-4 text-blue-500">
        {loginTitleText}
      </div>
      <div className="text-red-500 h-10">{errorMessage}</div>
      <div>
        <UserFormInputs INPUT_ITEMS_DATA={INPUT_ITEMS_DATA} />
      </div>
      <Button
        type="primary"
        onClick={() => onClick()}
        className="bg-blue-500 rounded-lg p-2 w-48 mx-28 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        {loginTitleText}
      </Button>
    </React.Fragment>
  );
};

export default LoginUserComp;
