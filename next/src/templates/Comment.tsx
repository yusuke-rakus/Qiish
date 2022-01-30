import React, { useState } from "react";
import { CommentComp } from "../components/organisms";

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
};

const Comment: React.FC<Props> = ({ commentData }) => {
  const [commentLike, setCommetnLike] = useState(2);
  const [commentLikeFlag, setCommentLikeFlag] = useState(false);

  const changeCommentLike = () => {
    if (commentLikeFlag) {
      setCommentLikeFlag(!commentLikeFlag);
      setCommetnLike((prevLike) => prevLike - 1);
    } else {
      setCommentLikeFlag(!commentLikeFlag);
      setCommetnLike((prevLike) => prevLike + 1);
    }
  };
  return (
    <CommentComp
      commentData={commentData}
      commentLike={commentLike}
      commentLikeFlag={commentLikeFlag}
      changeCommentLike={changeCommentLike}
    />
  );
};

export default Comment;
