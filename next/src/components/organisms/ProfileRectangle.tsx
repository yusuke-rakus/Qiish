import React from "react";
import Image from "next/image";

// FCの型定義
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
  followStatus: boolean;
  changeUsrFollow: () => void;
  loginCheckStatus: boolean;
};

const ProfileRectangle: React.FC<Props> = ({
  user_data,
  changeUsrFollow,
  followStatus,
  loginCheckStatus,
}) => {
  return (
    <div className="flex justify-rounded items-center w-full m-2 pl-10 p-2 bg-white rounded-lg border shadow-md">
      <Image
        className="rounded-full"
        src={"/img/avatar.jpg"}
        alt="アバター"
        width={90}
        height={90}
      />
      <div className="w-2/5 flex items-center">
        <div className="text-center ml-10">
          <div>@{user_data.userName}</div>
          <div className="mt-2 text-lg">
            職種<span className="mx-1">:</span>
            <span className="px-3 rounded-md text-white bg-orange-500">FR</span>
          </div>
        </div>
      </div>
      {!loginCheckStatus && (
        <div className="mt-2 ml-4">
          {followStatus ? (
            <button onClick={changeUsrFollow}>
              <div className="mt-2 p-2 rounded-full text-white bg-orange-500 hover:bg-orange-300">
                フォロー解除
              </div>
            </button>
          ) : (
            <button onClick={changeUsrFollow}>
              <div className="mt-2 px-5 py-2 rounded-full text-white bg-orange-500 hover:bg-orange-300">
                フォロー
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileRectangle;
