import React from "react";
import LikeUserOnComment from "./LikeUserOnComment";

type Props = {
  lieksUserList: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: null;
    follow: number;
    followCount: number;
    follower: number;
    followerCount: number;
    tags: null;
    articles: null;
    articleCount: null;
    likes: null;
    comments: null;
    followStatus: number;
  }[];
};

const LikeUsersOnComment: React.FC<Props> = ({ lieksUserList }) => {
  return (
    <div className="p-3 text-center">
      <div>
        <div className="text-3xl font-bold text-white">いいねユーザー一覧</div>
        <div className="flex justify-center items-center ">
          <div className="w-1/2">
            {lieksUserList.map((user_data: any) => {
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
