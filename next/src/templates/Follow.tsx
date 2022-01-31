import React from "react";
import { ProfileRectangle } from "../components/organisms";
import { useToggle } from "../hooks";
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
  };
};

const Follow: React.FC<Props> = ({ user_data }) => {
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // ログインユーザーが本人以外にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };
  return (
    <div>
      <ProfileRectangle
        key={user_data.id}
        user_data={user_data}
        usrFollowFlag={usrFollowFlag}
        changeUsrFollow={usrFollowing}
      />
    </div>
  );
};

export default Follow;
