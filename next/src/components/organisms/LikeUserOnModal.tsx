import React from "react";
import { UserDataType } from "../../const/Types";
import { useLoginChecker } from "../../hooks/useLoginChecker";
import { useToggleByNum } from "../../hooks/useToggleByNum";
import { addFollow } from "../../lib/api/addData";
import { removeFollow } from "../../lib/api/removeData";
import { ProfileRectangleOnModal } from "../molecules";

const LikeUserOnModal: React.FC<UserDataType> = ({ user_data }) => {
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
   *
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
      <ProfileRectangleOnModal
        key={user_data.id}
        user_data={user_data}
        loginCheckStatus={loginCheckStatus}
        followStatus={followStatus}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default LikeUserOnModal;
