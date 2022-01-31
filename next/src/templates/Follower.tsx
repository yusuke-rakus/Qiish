import React from "react";
import { ProfileRectangle } from "../components/organisms";
import { useToggle } from "../hooks";
import getCookie from "../hooks/cookie/handleCookie";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeFollowStatus } from "../pages/api/addData";

type Props = {
  user_data: {
    id: number;
    userName: string;
    email: string;
    engineer_type: string;
    description: string;
    tags: {
      id: number;
      skill: string;
      image: null;
    }[];
    articleCount: number;
    articles: number;
    comments: string;
    engineerType: string;
    follow: string;
    followCount: number;
    follower: string;
    followerCount: number;
    image: string;
    likes: number;
    followStatus: number;
  };
};

const Follower: React.FC<Props> = ({ user_data }) => {
  const [followStatus, setFollowStatus] = useToggleByNum(
    user_data.followStatus
  );
  // user_dataがログイン本人だったらtrue,本人でなければfalse
  const loginCheckStatus = useLoginChecker(user_data.id);

  // ログインユーザーが本人以外にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(followStatus, user_data.id);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
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

export default Follower;
