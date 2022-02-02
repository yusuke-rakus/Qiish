import { Button } from "antd";
import React from "react";
import { LikeUsersOnComment } from ".";
import ModalScreen from "../components/ModalScreen";
import { CommentComp } from "../components/organisms";
import { useToggle } from "../hooks";
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
  const [likesCount, setLikeCount] = useAddOrSubOne(commentData.likesCount);
  const [likeStatus, setLikeStatus] = useToggleByNum(commentData.likeStatus);
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);

  const changeCommentLike = async () => {
    await changeLikeStatusToComment(commentData.id, likeStatus);
    // いいねしたら+1、いいねを解除したら-1
    setLikeCount(likeStatus);
    // いいねの真偽値切り替え true:いいね中、false:いいね解除
    setLikeStatus();
  };
  console.dir(commentData);

  return (
    <div>
      {likeUserModalStatus && (
        <div>
          {/* <div className="fixed inset-0 z-50">
            <LikeUsersOnComment lieksUserList={commentData.userInfo} />
            <span className="flex justify-center">
              <Button onClick={setLikeUserModalStatus}>
                <span className="hover:text-orange-400">戻る</span>
              </Button>
            </span>
          </div>
          <ModalScreen /> */}
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
