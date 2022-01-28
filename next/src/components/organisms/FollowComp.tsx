import React from "react";
import { ProfileRectangle } from ".";

type Props = {
  followText: string;
  user_info_datas: {
    id: number;
    userName: string;
    email: string;
    engineer_type: string;
    description: string;
    tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
    articleCount: number;
    articles: number;
    comments: string;
    engineerType: string;
    follow: string;
    followCount: number;
    follower: string;
    followerCount: number;
    image: string;
    likes: number;
  }[];
  usrFollowFlag: boolean;
  changeUsrFollow: () => void;
};

const FollowComp: React.FC<Props> = ({
  followText,
  user_info_datas,
  usrFollowFlag,
  changeUsrFollow,
}) => {
  return (
    <div>
      <div className="text-3xl font-bold">{followText}一覧</div>
      <div className="flex justify-center items-center ">
        <div className="w-1/3">
          {user_info_datas.map((user_info_data) => {
            return (
              <ProfileRectangle
                key={user_info_data.id}
                user_data={user_info_data}
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

export default FollowComp;
