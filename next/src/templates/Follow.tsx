import React from "react";
import { ProfileRectangle } from "../components/organisms";
import { FollowType } from "../const/Types";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeFollowStatus } from "../lib/api/addData";

const Follow: React.FC<FollowType> = ({ user_data }) => {
  /**
   * フォロー状態をtrue,falseで管理.
   * @remarks true: フォロー中, false: フォローしていない
   */
  const [followStatus, setFollowStatus] = useToggleByNum(
    user_data.followStatus
  );

  // user_dataがログイン本人だったらtrue,本人でなければfalse
  /**
   * user_dataが本人かどうかチェック.
   * @remarks true: 本人, false: 本人以外の人
   */
  const loginCheckStatus = useLoginChecker(user_data.id);

  /**
   * フォローする処理(本人以外).
   * @param followStatus - フォローの真偽値
   * @param user_data.id - フォローされるユーザーID
   */
  //
  const usrFollowing = async () => {
    await changeFollowStatus(followStatus, user_data.id);
    // フォローの真偽値切り替え
    setFollowStatus();
  };

  return (
    <div>
      <ProfileRectangle
        key={user_data.id}
        user_data={user_data}
        loginCheckStatus={loginCheckStatus}
        followStatus={followStatus}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default Follow;
