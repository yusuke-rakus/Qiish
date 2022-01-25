import React from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../const/Tags";
import axios from "axios";
import { useTextState, useSelectState } from "../hooks";

type Props = {
  userInfo: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: string;
    follow: number;
    followCount: number;
    follower: number;
    followerCount: number;
    tags: {
      id: number;
      skill: string;
      image: number;
    }[];
    articles: string;
    articleCount: number;
    likes: number;
    comments: number;
  };
  changeEditFlag: () => void;
};
const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<Props> = ({ userInfo, changeEditFlag }) => {
  // カスタムフック使用(Text)
  const [userName, setUserName] = useTextState(userInfo.userName);
  const [email, setEmail] = useTextState(userInfo.email);
  const [description, setDescription] = useTextState(userInfo.description);
  // カスタムフック使用(Select)
  const [engineerType, setEngineerType] = useSelectState(userInfo.engineerType);
  // タグが初期化できていない
  const [tags, setTags] = useSelectState([]);

  const onSubmitEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("", {});

    console.dir(res);
  };

  const Fnc = {
    setUserName,
    setEngineerType,
    setEmail,
    setDescription,
    setTags,
    onSubmitEditUser,
  };
  const userData = { userName, email, description, engineerType, tags };

  return (
    <div className="flex justify-center">
      <div className="m-10 lg:w-3/5 md:w-2/5 h-auto">
        <button type="button" onClick={changeEditFlag}>
          <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
        </button>
        <ProfileEditFrom userData={userData} TAGS={TAGS} Fnc={Fnc} />
      </div>
    </div>
  );
};

export default ProfileEdit;
