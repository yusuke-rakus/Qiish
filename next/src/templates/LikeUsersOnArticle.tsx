import React from "react";
import { LikesUserList } from "../const/Types";
import LikeUserOnArticle from "./LikeUserOnArticle";

const LikeUsersOnArticle: React.FC<LikesUserList> = ({ lieksUserList }) => {
  return (
    <div className="p-3 text-center">
      <div>
        <div className="text-3xl font-bold text-white">
          記事いいねユーザー一覧
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-1/2">
            {lieksUserList.map((user_data: any) => {
              return (
                <LikeUserOnArticle key={user_data.id} user_data={user_data} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeUsersOnArticle;
