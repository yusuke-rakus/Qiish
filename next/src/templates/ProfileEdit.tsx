import React, { useState } from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../const/Tags";
import axios from "axios";

type Props = {
  changeEditFlag: () => void;
};
const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<Props> = ({ changeEditFlag }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [engineerType, setEngineerType] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changeEngineerType = (value: React.SetStateAction<string>) => {
    setEngineerType(value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const changeTags = (value: React.SetStateAction<never[]>) => {
    setTags(value);
  };
  const onSubmitEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/user/login", {
      email: "sample@qiish.com",
      password: "qiish",
    });

    console.dir(res);
  };

  const Fnc = {
    changeUserName,
    changeEmail,
    changeEngineerType,
    changePassword,
    changeDescription,
    changeTags,
    onSubmitEditUser,
  };

  return (
    <div className="flex justify-center">
      <div className="m-10 lg:w-3/5 md:w-2/5 h-auto">
        <button type="button" onClick={changeEditFlag}>
          <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
        </button>
        <ProfileEditFrom TAGS={TAGS} Fnc={Fnc} />
      </div>
    </div>
  );
};

export default ProfileEdit;
