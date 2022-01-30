import React from "react";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
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

  commentLike: number;
  commentLikeFlag: boolean;
  changeCommentLike: () => void;
};

const Comment: React.FC<Props> = ({
  commentData,
  commentLike,
  commentLikeFlag,
  changeCommentLike,
}) => {
  return (
    <div className="flex justify-center">
      <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
        <div className="my-2 text-3xl font-bold text-center">コメント</div>
        <hr />
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
              {/* userName(User) */}@ユーザーネーム
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
              {commentLikeFlag ? (
                <span className="text-orange-500">
                  <HeartOutlined className="text-2xl" />
                </span>
              ) : (
                <HeartOutlined className="text-2xl" />
              )}
            </button>
            <a href="#" className="ml-1 text-md text-black hover:text-gray-400">
              {commentLike}
            </a>
            {/* posted_date(Comment) */}

            <span className="ml-6">
              {moment(commentData.commentDate).format("YYYY年M月D日")}
            </span>
          </div>
        </div>
        <hr />
        <div className="ml-4 mb-3">
          <div className=" mt-4 flex">
            {/* image(User) */}
            <Image
              className="rounded-full"
              src={"/img/avatar.jpg"}
              alt="アバター"
              width={30}
              height={30}
            />
            <div className="flex items-center pl-1">
              {/* userName(User) */}@ユーザーネーム2
              {/* userName(User) */}
              {/* @{user_info_data.user_name} */}
            </div>
          </div>
        </div>
        <div className="w-full p-2 text-xl">
          <TextArea
            placeholder="この読書の目的は「知ること」ではなく、「行動すること」"
            autoSize={{ minRows: 3 }}
            bordered={false}
          />
        </div>
        <hr />
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

export default Comment;
