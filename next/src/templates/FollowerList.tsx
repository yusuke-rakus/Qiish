import React from "react";
import Follower from "./Follower";

const FollowerList: React.FC = () => {
  return (
    <div className="p-3 text-center">
      <div>
        <div className="text-3xl font-bold">フォロワー一覧</div>
        <div className="flex justify-center items-center ">
          <div className="w-1/3">
            {user_info_datas.map((user_info_data) => {
              return (
                <Follower
                  key={user_info_data.user_info_id}
                  user_info_data={user_info_data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerList;
