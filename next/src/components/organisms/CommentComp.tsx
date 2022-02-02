import React from "react";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";
import moment from "moment";

type Props = {
  commentData: {
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
  };

  likeCount: number;
  likeStatus: boolean;
  changeCommentLike: () => void;
};

const CommentComp: React.FC<Props> = ({
  commentData,
  likeCount,
  likeStatus,
  changeCommentLike,
}) => {
  return (
    <div>
      <div className="ml-4 mb-3">
        <div className=" mt-4 flex">
          {/* <Link></Link>タグ */}
          {/* image(User) */}
          <Image
            className="rounded-full"
            src={"/img/avatar.jpg"}
            alt="アバター"
            width={30}
            height={30}
          />
          <div className="flex items-center pl-1">
            {/* userName(User) */}@{commentData.userInfo.userName}
            {/* userName(User) */}
            {/* @{user_info_data.user_name} */}
          </div>
        </div>
        {/* content(Comment) */}
        <div className="pl-2 py-3 pr-6 text-lg text-center">
          {commentData.comment}
        </div>
        <div className="flex items-center">
          {/* likeList(Comment) */}
          <button onClick={changeCommentLike}>
            {likeStatus ? (
              <span className="text-orange-500">
                <HeartOutlined className="text-2xl" />
              </span>
            ) : (
              <HeartOutlined className="text-2xl" />
            )}
          </button>
          <a href="#" className="ml-1 text-md text-black hover:text-gray-400">
            {likeCount}
          </a>
          {/* posted_date(Comment) */}

          <span className="ml-6">
            {moment(commentData.commentDate).format("YYYY年M月D日")}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CommentComp;
