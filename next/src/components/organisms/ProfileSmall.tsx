import React from "react";
import Image from "next/image";
import Link from "next/link";

// FCの型定義
type Props = {
  user: {
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
      image?: string;
    }[];
    articles: number;
    articleCount: number;
    likes: number;
    comments: number;
  };

  usrFollowFlag: boolean;
  changeUsrFollow: () => void;
};

const ProfileSmall: React.FC<Props> = ({
  user,
  usrFollowFlag,
  changeUsrFollow,
}) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-orange-500  text-white text-center font-sans text-xs shadow-md rounded-lg";
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
          {/* image(User) */}
          {/* 画像がnullならデフォルトの画像を表示 */}
          <Link href={"/profile"}>
            <a>
              {user.image ? (
                <Image
                  className="rounded-full"
                  src={user.image}
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
            </a>
          </Link>
          {/* userName(User) */}
          <div className="pl-3 text-center">
            {/* <div>@{user.userName}</div> */}
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
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            {/* articleCount */}
            投稿数
            <div>{user.articleCount}</div>
          </div>
          <div className="flex-grow text-center">
            <Link href={"/follow"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{user.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-center ">
            <Link href={"/follower"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{user.followerCount}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="text-xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500 ">
            {/* engineerType(User) */}
            {user.engineerType}
          </span>
        </div>
        <div className="mt-2">
          {/* tags(User) */}
          <div className="flex flex-wrap">
            {user.tags.map((tags) => {
              return (
                <span className={tagStyle} key={tags.skill}>
                  {tags.skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* comment(User) */}
      <div className="block m-2 text-center">{user.description}</div>
    </div>
  );
};

export default ProfileSmall;
