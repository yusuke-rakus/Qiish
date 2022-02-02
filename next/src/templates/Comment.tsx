import React, { useState } from "react";
import { CommentComp } from "../components/organisms";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeLikeStatusToComment } from "../pages/api/addData";

type Props = {
  commentData: {
    id: number;
    articleId: number;
    likeStatus: number;
    likesCount: number;
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
  };
};

const Comment: React.FC<Props> = ({ commentData }) => {
  const [likeCount, setLikeCount] = useAddOrSubOne(commentData.likesCount);
  const [likeStatus, setLikeStatus] = useToggleByNum(commentData.likeStatus);

  const changeCommentLike = async () => {
    await changeLikeStatusToComment(commentData.id, likeStatus);
    // いいねしたら+1、いいねを解除したら-1
    setLikeCount(likeStatus);
    // いいねの真偽値切り替え true:いいね中、false:いいね解除
    setLikeStatus();
  };
  return (
    <CommentComp
      commentData={commentData}
      likeCount={likeCount}
      likeStatus={likeStatus}
      changeCommentLike={changeCommentLike}
    />
  );
};

export default Comment;
