import React from "react";
import Image from "next/image";
import { HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import { CommentCompType } from "../../const/Types";

const CommentComp: React.FC<CommentCompType> = ({
  commentData,
  likesCount,
  likeStatus,
  checkLoginUserFlag,
  onDeleteComment,
  changeCommentLike,
  setLikeUserModalStatus,
}) => {
  return (
    <div>
      <div className="ml-4 mb-3">
        <div className=" mt-4 flex">
          <Image
            className="rounded-full"
            src={"/img/avatar.jpg"}
            alt="アバター"
            width={30}
            height={30}
          />
          <div className="flex items-center pl-1">
            @{commentData.userInfo.userName}
          </div>
        </div>
        <div className="pl-2 py-3 pr-6 text-lg text-center">
          {commentData.comment}
        </div>
        <div className="flex items-center">
          <button onClick={changeCommentLike}>
            {likeStatus ? (
              <span className="text-orange-500">
                <HeartOutlined className="text-2xl" />
              </span>
            ) : (
              <HeartOutlined className="text-2xl" />
            )}
          </button>
          <span className="ml-1 text-md text-black hover:text-gray-400">
            <button onClick={setLikeUserModalStatus}>{likesCount}</button>
          </span>
          <span className="mx-6">
            {moment(commentData.commentDate).format("YYYY年M月D日")}
          </span>
          {checkLoginUserFlag && (
            <button onClick={() => onDeleteComment(commentData.id)}>
              <DeleteOutlined className="text-2xl" />
            </button>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CommentComp;
