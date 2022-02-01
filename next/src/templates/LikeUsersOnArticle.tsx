import React from "react";
import LikeUserOnArticle from "./LikeUserOnArticle";

type Props = {
  lieksUserList: {
    articleCount: null;
    articles: null;
    comments: null;
    description: string;
    email: null;
    engineerType: string;
    follow: null;
    followCount: null;
    followStatus: number;
    follower: null;
    followerCount: null;
    id: number;
    image: null;
    likes: null;
    tags: null;
    userName: string;
  }[];
};

const LikeUsersOnArticle: React.FC<Props> = ({ lieksUserList }) => {
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
