import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { Comment } from ".";
import { CommentForm } from "../components/organisms";
import { CommentType } from "../const/Types";
import { useTextState } from "../hooks";
import { addComment } from "../lib/api/addData";
import { fetchcommentList } from "../lib/api/fetchData";

const CommentList: React.FC<{ articleId: number }> = ({ articleId }) => {
  const [commentText, setCommentText] = useTextState("");
  const { mutate } = useSWRConfig();

  // コメントデータを取得
  const getcommentList = async () => {
    const res = await fetchcommentList(articleId);
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

  return (
    <div className="flex justify-center">
      <div className="m-10 h-auto bg-white w-1/2 rounded-lg border shadow-md">
        <div className="my-2 text-3xl font-bold text-center">コメント</div>
        <hr />
        {data &&
          data.commentList.map((commentData: CommentType) => {
            return <Comment key={commentData.id} commentData={commentData} />;
          })}
        <CommentForm
          onAddComment={onAddComment}
          setCommentText={setCommentText}
        />
      </div>
      <div className="w-1/5 mt-10"></div>
    </div>
  );
};

export default CommentList;
