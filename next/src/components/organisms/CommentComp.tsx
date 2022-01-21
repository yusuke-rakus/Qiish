import React from "react";
import Image from "next/image";
import { HeartOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
  commentLike: number;
  commentLikeFlag: boolean;
  changeCommentLike: () => void;
};

const CommentComp: React.FC<Props> = ({
  user_info_data,
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
              {/* userName(User) */}@{user_info_data.user_name}
            </div>
          </div>
          {/* content(Comment) */}
          <div className="pl-2 py-3 pr-6 text-center">
            プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
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
            <span className="ml-6">2021-11-1 11:40</span>
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
              {/* userName(User) */}@{user_info_data.user_name}
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

export default CommentComp;
