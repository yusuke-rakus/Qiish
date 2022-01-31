import React, { useEffect, useState } from "react";
import { Comment } from ".";
import { CommentForm } from "../components/organisms";
import { addComment } from "../pages/api/addData";
import { fetchCommentOnArticle } from "../pages/api/fetchData";

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
  articleId: number;
};

type CommentProps = {
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

const CommentList: React.FC<Props> = ({ comments, articleId }) => {
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);

  // コメントデータを取得
  useEffect(() => {
    const commentListData = async () => {
      const res = await fetchCommentOnArticle(articleId);
      setCommentList(res.commentList);
    };
    commentListData();
  }, [articleId]);

  console.log(commentList);

  // コメント追加(まだ動的に変更できないので修正が必要)
  const onAddComment = async () => {
    const res = await addComment(articleId, commentText);
    if (res.status === "error") {
      alert("コメントに失敗しました。");
    } else {
      setCommentText("");
    }
  };
  // コメントをステートに挿入
  const addCommentText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCommentText(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
        <div className="my-2 text-3xl font-bold text-center">コメント</div>
        <hr />
        {commentList.map((comment: CommentProps) => {
          return <Comment key={comment.id} commentData={comment} />;
        })}
        <CommentForm
          onAddComment={onAddComment}
          setCommentText={addCommentText}
        />
      </div>
      <div className="w-1/5 mt-10"></div>
    </div>
  );
};

export default CommentList;
