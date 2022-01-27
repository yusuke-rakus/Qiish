import React from "react";
import useSWR from "swr";
import Follower from "./Follower";

const FollowerList: React.FC = () => {
  // ユーザーのフォロワーデータ
  const { data } = useSWR("/followerList");
  return (
    <div className="p-3 text-center">
      <div>
        <div className="text-3xl font-bold">フォロワー一覧</div>
        <div className="flex justify-center items-center ">
          <div className="w-1/3">
            {data.userList.map((user_data: any) => {
              return <Follower key={user_data.id} user_data={user_data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerList;
