import React from "react";
import { ProfileEditFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../const/Tags";
import { SelectStateType, TextEventType } from "../hooks/useInputState";

type Props = {
  userInfo: {
    userName: string;
    email: string;
    userImage: any;
    articleCount: any;
    engineerType: SelectStateType;
    tagsNum: SelectStateType;
    description: string;
  };
  editFunc: {
    setUserName: (e: TextEventType) => void;
    setEmail: (e: TextEventType) => void;
    setDescription: (e: TextEventType) => void;
    setEngineerType: (value: React.SetStateAction<SelectStateType>) => void;
    setTagsNum: (value: React.SetStateAction<SelectStateType>) => void;
    onSubmitEditUser: () => Promise<void>;
  };
  changeEditFlag: () => void;
};
const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<Props> = ({
  userInfo,
  editFunc,
  changeEditFlag,
}) => {
  const Fnc = {
    setUserName: editFunc.setUserName,
    setEngineerType: editFunc.setEngineerType,
    setEmail: editFunc.setEmail,
    setDescription: editFunc.setDescription,
    setTagsNum: editFunc.setTagsNum,
    onSubmitEditUser: editFunc.onSubmitEditUser,
  };
  const userData = {
    userName: userInfo.userName,
    email: userInfo.email,
    description: userInfo.description,
    engineerType: userInfo.engineerType,
    tagsNum: userInfo.tagsNum,
  };

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
