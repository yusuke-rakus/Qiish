import React from "react";
import { ProfileRectangle } from "../components/organisms";
import { useToggle } from "../hooks";
import { changeFollowStatus } from "../pages/api/addData";

type Props = {
  user_info_data: {
    user_info_id: number;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const Follow: React.FC<Props> = ({ user_info_data }) => {
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // 現状はuid１がuid2にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };
  return (
    <div>
      <ProfileRectangle
        key={user_info_data.user_info_id}
        user_info_data={user_info_data}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default Follow;
