import { Button } from "antd";
import React from "react";
import { LikeUsersOnComment } from ".";
import ModalScreen from "../components/ModalScreen";
import { CommentComp } from "../components/organisms";
import { CommentData } from "../const/Types";
import { useToggle } from "../hooks";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { addLikeToComment } from "../lib/api/addData";
import { removeLikeToComment } from "../lib/api/removeData";

const Comment: React.FC<CommentData> = ({ commentData }) => {
  // モーダル表示を真偽値で管理
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);

  /**
   * いいねする又はいいねを解除する処理.
   *
   * @remarks APIにいいねを知らせて、ブラウザ側でいいねの状態と数をステートを用いて変更
   * @param コメントID
   *
   */
  // ±1していいね数を管理
  const [likesCount, setLikeCount] = useAddOrSubOne(commentData.likesCount);
  // いいね状態を真偽値で管理
  const [likeStatus, setLikeStatus] = useToggleByNum(commentData.likeStatus);
  // いいねする処理(いいね中: likeStatus === true, いいねしていない: likeStatus === false)
  const changeCommentLike = async () => {
    if (!likeStatus) {
      await addLikeToComment(commentData.id);
    } else {
      await removeLikeToComment(commentData.id);
    }
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
