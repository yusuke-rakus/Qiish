import React from "react";
import Image from "next/image";
import Link from "next/link";

// FCの型定義
type Props = {
  user_info: {
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
  user_info,
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
          {user_info.image ? (
            <Image
              className="rounded-full"
              src={user_info.image}
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
            <div className="text-xl">@{user_info.userName}</div>
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
            <div>{user_info.articleCount}</div>
          </div>
          <div className="flex-grow text-center">
            <Link href={"/follow"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{user_info.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-center ">
            <Link href={"/follower"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{user_info.followerCount}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="text-2xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500">
            {/* engineerType(User) */}
            {user_info.engineerType}
          </span>
        </div>
        <div className="mt-2">
          {/* tags(User) */}
          <div className="flex flex-wrap">
            {user_info.tags.map((tag) => {
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
      <div className="text-xl text-center m-2">{user_info.description}</div>
    </div>
  );
};

export default ProfileLarge;
