import React from "react";
import { ProfileRectangle } from "../components/organisms";
import { FollowType } from "../const/Types";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { addFollow } from "../lib/api/addData";
import { removeFollow } from "../lib/api/removeData";

const Follow: React.FC<FollowType> = ({ user_data }) => {
  // フォロー状態を真偽値で管理
  const [followStatus, setFollowStatus] = useToggleByNum(
    user_data.followStatus
  );

  /**
   * 表示用のログイン状態(真偽値)を管理.
   *
   * @remarks ログイン状態チェック
   * @param user_data.id - ユーザーID
   */
  const checkLoginUserFlag = useLoginChecker(user_data.id);

  /**
   * フォローする処理(本人以外).
   * @param user_data.id - フォローされるユーザーID
   * @param followStatus - フォロー状態
   */
  // フォローする処理(フォロー中: followStatus === true, フォローしていない: followStatus === false)
  const usrFollowing = async () => {
    if (!followStatus) {
      await addFollow(user_data.id);
    } else {
      await removeFollow(user_data.id);
    }
    setFollowStatus();
  };

  return (
    <div>
      <ProfileRectangle
        key={user_data.id}
        user_data={user_data}
        checkLoginUserFlag={checkLoginUserFlag}
        followStatus={followStatus}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default Follow;
