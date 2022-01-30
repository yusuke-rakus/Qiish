import TextArea from "antd/lib/input/TextArea";
import Image from "next/image";
import React from "react";
import { Comment } from ".";

type Props = {
  comments: {
    id: number;
    articleId: number;
    userInfoId: number;
    comment: string;
    commentDate: string;
    userInfo: {
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
    };
    likesCount: number;
  }[];
};

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="flex justify-center">
      <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
        <div className="my-2 text-3xl font-bold text-center">コメント</div>
        <hr />
        {comments.map((comment) => {
          return <Comment key={comment.id} commentData={comment} />;
        })}
        <div className="w-full p-2 text-xl">
          <TextArea
            placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
            autoSize={{ minRows: 3 }}
            bordered={false}
          />
        </div>
        <div className="flex justify-end px-4 py-2">
          <button className="p-1 text-white rounded-lg bg-orange-500 hover:bg-orange-500 drop-shadow-2xl">
            コメント
          </button>
        </div>
      </div>
      <div className="w-1/5 mt-10"></div>
    </div>
  );
};

export default CommentList;
