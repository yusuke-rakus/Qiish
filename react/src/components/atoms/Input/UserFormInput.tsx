import { Input } from "antd";
import React from "react";
import { onChangeProps } from "../../../const/Types";

const UserFormInput: React.FC<onChangeProps> = ({ onChange, placeholder }) => {
  return (
    <Input
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      className="p-2 m-4 w-96 border-2 rounded-xl"
    />
  );
};

export default UserFormInput;
