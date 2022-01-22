import React from "react";
import Image from "next/image";
import Link from "next/link";

// FCの型定義
type Props = {
  user_info_data: {
    description: string;
    facebook_id: string;
    followees_count: number;
    followers_count: number;
    github_login_name: string;
    id: string;
    items_count: number;
    linkedin_id: string;
    location: string;
    name: string;
    organization: string;
    permanent_id: number;
    profile_image_url: string;
    team_only: boolean;
    twitter_screen_name: string;
    website_url: string;
  };
  usrFollowFlag: boolean;
  changeUsrFollow: () => void;
};

const ProfileSmall: React.FC<Props> = ({
  user_info_data,
  usrFollowFlag,
  changeUsrFollow,
}) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-orange-500  text-white text-center font-sans text-xs shadow-md rounded-lg";
  const tagsName = ["フロントエンド", "CSS", "tailwindCSS", "初心者"];
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
          {/* image(User) */}
          <Link href={"/profile"}>
            <a>
              <Image
                className="rounded-full"
                src={"/img/avatar.jpg"}
                alt="アバター"
                width={90}
                height={90}
              />
            </a>
          </Link>
          {/* userName(User) */}
          <div className="pl-3 text-center">
            <div>@{user_info_data.name}</div>
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
            {/*  */}
            投稿数
            <div>{user_info_data.items_count}</div>
          </div>
          <div className="flex-grow text-center">
            <Link href={"/follow"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{user_info_data.followees_count}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-center ">
            <Link href={"/follower"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{user_info_data.followers_count}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="text-xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500 ">
            {/* engineerType(User) */}
            FR
          </span>
        </div>
        <div className="mt-2">
          {/* tags(User) */}
          <div className="flex flex-wrap">
            {tagsName.map((tagName) => {
              return (
                <span className={tagStyle} key={tagName}>
                  {tagName}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* comment(User) */}
      <div className="block m-2">{user_info_data.description}</div>
    </div>
  );
};

export default ProfileSmall;
