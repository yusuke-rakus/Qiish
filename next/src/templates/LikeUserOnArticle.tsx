import React from "react";
import { ProfileRectangleOnArticle } from "../components/organisms";
import { UserDataType } from "../const/Types";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeFollowStatus } from "../lib/api/addData";

const LikeUserOnArticle: React.FC<UserDataType> = ({ user_data }) => {
  // フォロー状態を真偽値で管理
  const [followStatus, setFollowStatus] = useToggleByNum(
    user_data.followStatus
  );
  // user_dataがログイン本人だったらtrue,本人でなければfalse
  const loginCheckStatus = useLoginChecker(user_data.id);

  /**
   * フォローする又はフォローを解除する処理.
   *
   * @remarks APIにフォローを知らせて、ブラウザ側でフォロー状態と数をステートを用いて変更
   * @param user_data.id - ユーザーID
   * @param followStatus - フォロー状態
   *
   */
  const usrFollowing = async () => {
    await changeFollowStatus(followStatus, user_data.id);
    setFollowStatus();
  };

  return (
    <div>
      <ProfileRectangleOnArticle
        key={user_data.id}
        user_data={user_data}
        loginCheckStatus={loginCheckStatus}
        followStatus={followStatus}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default LikeUserOnArticle;
