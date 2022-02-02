import axios from "axios";
import React, { useCallback, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { Comment } from ".";
import { CommentForm } from "../components/organisms";
import getCookie from "../hooks/cookie/handleCookie";
import { addComment } from "../pages/api/addData";

type Props = {
  articleId: number;
};

type CommentProps = {
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

const CommentList: React.FC<Props> = ({ articleId }) => {
  const [commentText, setCommentText] = useState("");
  const { mutate } = useSWRConfig();
  const guestId = getCookie();

  // コメントデータを取得
  const getcommentList = async () => {
    const res = await axios.post(`http://localhost:9090/article/getComment`, {
      articleId: articleId,
      guestId: guestId,
    });
    return res.data;
  };
  const { data } = useSWR("/article/comment", getcommentList);

  // コメント追加処理(コメント初期化する)
  const onAddComment = async () => {
    const res = await addComment(articleId, commentText);
    if (res.status === "success") {
      mutate("/article/comment");
    } else {
      alert("コメントに失敗しました。");
    }
  };
  // コメントをステートに挿入
  const addCommentText = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setCommentText(e.target.value);
    },
    []
  );

  return (
    <div className="flex justify-center">
      <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
        <div className="my-2 text-3xl font-bold text-center">コメント</div>
        <hr />
        {data &&
          data.commentList.map((comment: CommentProps) => {
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
