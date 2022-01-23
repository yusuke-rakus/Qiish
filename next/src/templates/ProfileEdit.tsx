import React from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../const/Tags";
import axios from "axios";
import { useTextState, useSelectState } from "../hooks";

type Props = {
  changeEditFlag: () => void;
};
const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<Props> = ({ changeEditFlag }) => {
  const [userName, setUserName] = useTextState("");
  const [email, setEmail] = useTextState("");
  const [engineerType, setEngineerType] = useSelectState("");
  const [password, setPassword] = useTextState("");
  const [description, setDescription] = useTextState("");
  const [tags, setTags] = useSelectState([]);

  const onSubmitEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/user/login", {
      email: "sample@qiish.com",
      password: "qiish",
    });

    console.dir(res);
  };

  const Fnc = {
    setUserName,
    setEngineerType,
    setEmail,
    setPassword,
    setDescription,
    setTags,
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
