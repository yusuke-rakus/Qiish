import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ProfileLarge } from "../components/organisms";
import useSWR from "swr";
import { ProfileEdit } from "./";

const Profile: React.FC = () => {
  const [editFlag, setEditFlag] = useState(true);
  // ユーザーのプロフィールデータ
  const { data, error } = useSWR("/profile");

  useEffect(() => {
    console.log("Profile" + data);
  }, [data]);

  const changeEditFlag = () => setEditFlag(!editFlag);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {editFlag ? (
        <div className="flex justify-center">
          <div className="m-10 w-2/5 h-auto">
            <Link href={"/"}>
              <a className="text-gray-400 hover:text-slate-600">
                <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
              </a>
            </Link>
            <ProfileLarge user_info_data={user_info_data} />
            <div className="flex justify-end">
              <span className="mt-2 mr-2 p-2 text-2xl text-white rounded-lg bg-orange-500 hover:bg-orange-300 hover:text-white drop-shadow-2xl">
                <button type="button" onClick={changeEditFlag}>
                  編集
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <ProfileEdit changeEditFlag={changeEditFlag} />
      )}
    </div>
  );
};

export default Profile;
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
export const user_info_data = {
  user_info_id: 1,
  first_name: "太郎",
  last_name: "山田",
  user_name: user_data.user_name,
  email: "yama@taro.com",
  engineer_type: "",
  comment: "趣味はサウナです。",
  skill_tags: skill_tags,
};
