import React from "react";
import { FollowComp } from "../components/organisms";
import { useToggle } from "../hooks";
import { changeFollowStatus } from "../pages/api/addData";

const Follow: React.FC = () => {
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // 現状はuid１がuid2にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };

  return (
    <div className="p-3 text-center">
      <FollowComp
        followText="フォロー"
        user_info_datas={user_info_datas}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={usrFollowing}
      />
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
