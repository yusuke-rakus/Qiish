import React from "react";
import MediaQuery from "react-responsive";
import useSWR, { useSWRConfig } from "swr";
import { Comment } from ".";
import { CommentForm } from "../components/organisms";
import { CommentType } from "../const/Types";
import { useTextState } from "../hooks";
import { addComment } from "../lib/api/addData";
import { fetchcommentList } from "../lib/api/fetchData";

const CommentList: React.FC<{ articleId: number }> = ({ articleId }) => {
  // コメント(記事)
  const [commentText, setCommentText] = useTextState("");
  // SWRで再検証するメソッド
  const { mutate } = useSWRConfig();

  /**
   * コメントリストデータを取得.
   *
   * @param articleId - 記事ID
   * @returns 記事に紐づくコメントリスト
   */
  const getcommentList = async () => {
    const res = await fetchcommentList(articleId);
    return res;
  };
  // SWRでコメントデータを取得
  const { data } = useSWR("/commentList", getcommentList);

  /**
   * コメント追加処理.
   *
   * @remarks success: コメントデータを再検証, false: メッセージをアラート表示
   *
   * @param - 記事ID
   * @param - コメント内容
   */
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
        {data ? (
          data.commentList.map((commentData: CommentType) => {
            return <Comment key={commentData.id} commentData={commentData} />;
          })
        ) : (
          <div>
            <div className="my-5 flex justify-center">
              <div className="animate-spin h-8 w-8 bg-orange-400 rounded-xl"></div>
            </div>
            <hr />
          </div>
        )}
        <CommentForm
          onAddComment={onAddComment}
          setCommentText={setCommentText}
        />
      </div>
      <MediaQuery query="(min-width: 768px)">
        <div className="w-1/4 mt-10"></div>
      </MediaQuery>
    </div>
  );
};

export default CommentList;
