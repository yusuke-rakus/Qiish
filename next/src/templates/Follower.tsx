import React from "react";
import { FollowComp } from "../components/organisms";
import { useToggle } from "../hooks";

const Follower: React.FC = () => {
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  return (
    <div className="p-3 text-center">
      <FollowComp
        followText="フォロワー"
        user_info_datas={user_info_datas}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={setUsrFollowFlag}
      />
    </div>
  );
};

export default Follower;

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
    user_name: "rakus22222",
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
    user_name: "yamatato",
    email: "yama@taro.com",
    engineer_type: "",
    comment: "趣味はサウナです。",
    skill_tags: skill_tags,
  },
  {
    user_info_id: 4,
    user_name: "satoshi",
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
