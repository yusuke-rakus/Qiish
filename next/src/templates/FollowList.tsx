import React from "react";
import useSWR from "swr";
import Follow from "./Follow";
import { UserType } from "../const/Types";

const FollowList: React.FC = () => {
  // フォローリスト取得
  const { data } = useSWR("/followList");

  return (
    <div className="m-8 flex justify-center items-center">
      <div className="w-2/4">
        <div className="text-2xl font-semibold text-left">
          フォローしているユーザー
        </div>
        {data.userList.map((user_data: UserType) => {
          return <Follow key={user_data.id} user_data={user_data} />;
        })}
      </div>
    </div>
  );
};

export default FollowList;
