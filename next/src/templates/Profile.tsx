import Link from "next/link";
import React from "react";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ProfileLarge } from "../components/organisms";
import useSWR from "swr";
import { ProfileEdit } from "./";
import { useToggle } from "../hooks";
import { changeFollowStatus } from "../pages/api/addData";

const Profile: React.FC = () => {
  const [editFlag, setEditFlag] = useToggle(true);
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);

  // 現状はuid１がuid2にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };

  // ユーザーのプロフィールデータ
  const { data, error } = useSWR("/profile");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {editFlag ? (
        <div className="flex justify-center">
          <div className="m-10 w-2/5 h-auto">
            <Link href={"/"}>
              <a className="text-gray-400 hover:text-slate-600">
                <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
              </a>
            </Link>
            <ProfileLarge
              userInfo={data.userInfo}
              usrFollowFlag={usrFollowFlag}
              changeUsrFollow={usrFollowing}
            />
            <div className="flex justify-end">
              <span className="mt-2 mr-2 p-2 text-2xl text-white rounded-lg bg-orange-500 hover:bg-orange-300 hover:text-white drop-shadow-2xl">
                <button type="button" onClick={setEditFlag}>
                  編集
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <ProfileEdit userInfo={data.userInfo} changeEditFlag={setEditFlag} />
      )}
    </div>
  );
};

export default Profile;
