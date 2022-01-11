import React from "react";
import SkillTagsOnProfile from "../molecules/SkillTagsOnProfile";

// FCの型定義
type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const ProfileComp: React.FC<Props> = ({ user_info_data }) => {
  return (
    <div className="box-content h-96 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        {/* ブロックプロパティの意味は? */}
        <div className="block ml-28 mr-28">@{user_info_data.user_name}</div>
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            投稿数
            <div>11</div>
          </div>
          <div className="flex-grow text-center">
            フォロー
            <div>122</div>
          </div>
          <div className="flex-grow text-center ">
            フォロワー
            <div>140</div>
          </div>
        </div>
        <div className="block">
          <SkillTagsOnProfile tags={user_info_data.skill_tags} />
        </div>
      </div>
      <div className="block m-2">{user_info_data.comment}</div>
    </div>
  );
};

export default ProfileComp;
