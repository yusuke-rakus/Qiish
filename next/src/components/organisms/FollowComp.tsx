import React from "react";
import { ProfileRectangle } from ".";

type Props = {
  followText: string;
  user_info_datas: {
    user_info_id: number;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
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

export default FollowComp;
