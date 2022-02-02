import React from "react";
import { ProfileRectangleOnComment } from "../components/organisms";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { changeFollowStatus } from "../pages/api/addData";

type Props = {
  user_data: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: string;
    follow: string;
    followCount: number;
    follower: string;
    followerCount: number;
    tags: {
      id: number;
      skill: string;
      image: string;
    }[];
    articles: string;
    articleCount: number;
    likes: string;
    comments: string;
    followStatus: number;
  };
};

const LikeUserOnComment: React.FC<Props> = ({ user_data }) => {
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
      <ProfileRectangleOnComment
        key={user_data.id}
        user_data={user_data}
        loginCheckStatus={loginCheckStatus}
        followStatus={followStatus}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default LikeUserOnComment;
