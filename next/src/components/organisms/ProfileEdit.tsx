import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ENGINEER, SKILL } from "../../const/Tags";
import { ProfileEditType } from "../../const/Types";
import { ProfileEditFrom } from ".";

const TAGS = { ENGINEER, SKILL };

const ProfileEdit: React.FC<ProfileEditType> = ({
  userInfo,
  editFunc,
  changeEditFlag,
}) => {
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
        <ProfileEditFrom userData={userData} TAGS={TAGS} editFnc={editFunc} />
      </div>
    </div>
  );
};

export default ProfileEdit;
