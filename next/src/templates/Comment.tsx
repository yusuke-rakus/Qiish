import { Button } from "antd";
import React from "react";
import { LikeUsersOnComment } from ".";
import ModalScreen from "../components/ModalScreen";
import { CommentComp } from "../components/organisms";
import { CommentData } from "../const/Types";
import { useToggle } from "../hooks";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeLikeStatusToComment } from "../lib/api/addData";

const Comment: React.FC<CommentData> = ({ commentData }) => {
  // いいね数を±1する
  const [likesCount, setLikeCount] = useAddOrSubOne(commentData.likesCount);
  // いいねのステータスを真偽値で管理
  const [likeStatus, setLikeStatus] = useToggleByNum(commentData.likeStatus);
  // モーダル表示を真偽値で管理
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);

  /**
   * いいねする又はいいねを解除する処理.
   * 
   * @remarks APIにいいねを知らせて、ブラウザ側でいいねの状態と数をステートを用いて変更
   * @param コメントID
   * @param いいねステータス
   *
   */
  const changeCommentLike = async () => {
    await changeLikeStatusToComment(commentData.id, likeStatus);
    setLikeCount(likeStatus);
    setLikeStatus();
  };

  return (
    <div>
      {likeUserModalStatus && (
        <div>
          <div className="fixed inset-0 z-50">
            <LikeUsersOnComment
              commentLikesUserList={commentData.commentLikesUserList}
            />
            <span className="flex justify-center">
              <Button onClick={setLikeUserModalStatus}>
                <span className="hover:text-orange-400">戻る</span>
              </Button>
            </span>
          </div>
          <ModalScreen />
        </div>
      )}
      <CommentComp
        commentData={commentData}
        likesCount={likesCount}
        likeStatus={likeStatus}
        changeCommentLike={changeCommentLike}
        setLikeUserModalStatus={setLikeUserModalStatus}
      />
    </div>
  );
};

export default Comment;
