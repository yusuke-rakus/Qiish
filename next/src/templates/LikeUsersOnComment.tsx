import React from "react";
import { CommentLikesUserList } from "../const/Types";
import LikeUserOnComment from "./LikeUserOnComment";

const LikeUsersOnComment: React.FC<CommentLikesUserList> = ({
  commentLikesUserList,
}) => {
  return (
    <div className="p-3 text-center">
      <div>
        <div className="text-3xl font-bold text-white">
          コメントいいねユーザー一覧
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-1/2">
            {commentLikesUserList.map((user_data: any) => {
              return (
                <LikeUserOnComment key={user_data.id} user_data={user_data} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeUsersOnComment;
