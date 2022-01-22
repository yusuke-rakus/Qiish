import React, { useState } from "react";
import { ProfileRectangle } from "../components/organisms";

const Follow: React.FC = () => {
  const [usrFollowFlag, setUsrFollowFlag] = useState(false);

  // ユーザーフォロー関数
  const changeUsrFollow = () => {
    setUsrFollowFlag(!usrFollowFlag);
  };
  return (
    <div className="p-3 text-center">
      <div className="text-3xl font-bold">フォローリスト一覧</div>
      <div className="flex justify-center items-center ">
        <div className="w-1/3">
          {user_info_datas.map((user_info_data) => {
            return (
              <ProfileRectangle
                key={user_info_data.user_info_id}
                user_info_data={user_info_data}
                usrFollowFlag={usrFollowFlag}
                changeUsrFollow={changeUsrFollow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Follow;

const user_data = {
  user_name: "rakus111111",
  password: "Yamtataro123",
};

const skill_tags = [
  { user_info_id: 1, skill_id: 1, skill_name: "フロントエンド" },
  { user_info_id: 1, skill_id: 5, skill_name: "TypeScript" },
  { user_info_id: 1, skill_id: 6, skill_name: "Vue" },
  { user_info_id: 1, skill_id: 3, skill_name: "TailwindCSS" },
];

export const user_info_datas = [
  {
    user_info_id: 1,
    // user_name: user_data.user_name,
    user_name: "22222rakus",
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
  {
    user_info_id: 2,
    user_name: user_data.user_name,
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
  {
    user_info_id: 3,
    user_name: "tato",
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
  {
    user_info_id: 4,
    user_name: "shitosa",
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
  {
    user_info_id: 5,
    user_name: user_data.user_name,
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
];
