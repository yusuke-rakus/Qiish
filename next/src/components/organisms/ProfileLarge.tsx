import React from "react";
import Image from "next/image";
import Link from "next/link";

// FCの型定義
type Props = {
  userInfo: {
    id: number;
    userName: string;
    email: string;
    engineerType: string;
    description: string;
    image: string;
    follow: number;
    followCount: number;
    follower: number;
    followerCount: number;
    tags: {
      id: number;
      skill: string;
      image: number;
    }[];
    articles: string;
    articleCount: number;
    likes: number;
    comments: number;
  };
  usrFollowFlag: boolean;
  changeUsrFollow: () => void;
};

const ProfileLarge: React.FC<Props> = ({
  userInfo,
  usrFollowFlag,
  changeUsrFollow,
}) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg";
  const tagsName = ["フロントエンド", "CSS", "tailwindCSS", "初心者"];

  return (
    <div className="w-full p-10 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
          {/* image(User) */}
          {userInfo.image ? (
            <Image
              className="rounded-full"
              src={userInfo.image}
              alt="アバター"
              width={90}
              height={90}
            />
          ) : (
            <Image
              className="rounded-full"
              src={"/img/avatar.jpg"}
              alt="アバター"
              width={90}
              height={90}
            />
          )}
          {/* userName(User) */}
          <div className="pl-10 text-center">
            <div className="text-xl">@{userInfo.userName}</div>
            {usrFollowFlag ? (
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
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black text-lg">
          <div className="flex-grow text-center">
            {/* 記事投稿数 */}
            投稿数
            <div>{userInfo.articleCount}</div>
          </div>
          <div className="flex-grow text-center">
            <Link href={"/follow"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{userInfo.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-center ">
            <Link href={"/follower"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{userInfo.followerCount}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="text-2xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500">
            {/* engineerType(User) */}
            {userInfo.engineerType}
          </span>
        </div>
        <div className="mt-2">
          {/* tags(User) */}
          <div className="flex flex-wrap">
            {userInfo.tags.map((tag) => {
              return (
                <span className={tagStyle} key={tag.skill}>
                  {tag.skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* description(User) */}
      <div className="text-xl text-center m-2">{userInfo.description}</div>
    </div>
  );
};

export default ProfileLarge;
