import React, { useState } from "react";
import { Comment } from "../components/organisms";

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
  const [commentLike, setCommetnLike] = useState(1);
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
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentData={comment}
            commentLike={commentLike}
            commentLikeFlag={commentLikeFlag}
            changeCommentLike={changeCommentLike}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
