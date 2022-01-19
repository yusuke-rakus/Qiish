import { Button } from "antd";
import React from "react";
import { UserFormInputs } from "../old_molecules";

type Props = {
  textLabel: {
    registerTitle: string;
    userName: string;
    mailAddress: string;
    password: string;
    checkPassword: string;
  };
  onChangeUserName: Function;
  onChangeMailAddress: Function;
  onChangePassword: Function;
  onChangeCheckPassword: Function;
  onClick: Function;
  errorOfMailAddress: string;
  errorOfPassword: string;
  errorOfCheckpassword: string;
};

const RegisterUserComp: React.FC<Props> = ({
  textLabel,
  onChangeUserName,
  onChangeMailAddress,
  onChangePassword,
  onChangeCheckPassword,
  onClick,
  errorOfMailAddress,
  errorOfPassword,
  errorOfCheckpassword,
}) => {
  const INPUT_ITEMS_DATA = [
    {
      name: textLabel.userName,
      onChange: onChangeUserName,
      errorMsg: "",
    },
    {
      name: textLabel.mailAddress,
      onChange: onChangeMailAddress,
      errorMsg: errorOfMailAddress,
    },
    {
      name: textLabel.password,
      onChange: onChangePassword,
      errorMsg: errorOfPassword,
    },
    {
      name: textLabel.checkPassword,
      onChange: onChangeCheckPassword,
      errorMsg: errorOfCheckpassword,
    },
  ];
  return (
    <React.Fragment>
      <div className="font-bold text-3xl m-4 -ml-4 text-blue-500">
        {textLabel.registerTitle}
      </div>
      <div>
        <UserFormInputs INPUT_ITEMS_DATA={INPUT_ITEMS_DATA} />
      </div>
      <Button
        type="primary"
        onClick={() => onClick()}
        className="bg-blue-500 rounded-lg p-2 w-40 mx-32 mt-6 text-white font-normal px-10 border-2 border-white hover:border-blue-500 hover:bg-gray-100 hover:text-blue-500"
      >
        {textLabel.registerTitle}
      </Button>
    </React.Fragment>
  );
};

export default RegisterUserComp;
