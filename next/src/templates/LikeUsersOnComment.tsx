import React from "react";
import LikeUserOnComment from "./LikeUserOnComment";

type Props = {
  commentLikesUserList: {
    articleCount: number;
    articles: number;
    comments: number;
    description: string;
    email: string;
    engineerType: string;
    follow: string;
    followCount: number;
    followStatus: number;
    follower: string;
    followerCount: number;
    id: number;
    image: string;
    likes: string;
    tags: string;
    userName: string;
  }[];
};

const LikeUsersOnComment: React.FC<Props> = ({ commentLikesUserList }) => {
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
