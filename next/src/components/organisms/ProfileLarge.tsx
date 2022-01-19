import React from "react";
import Image from "next/image";

// FCの型定義
type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
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

const ProfileLarge: React.FC<Props> = ({ user_info_data }) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg";
  const tagsName = [
    "フロントエンド",
    "CSS",
    "tailwindCSS",
    "tailwindCSS",
    "初心者",
    "フロントエンド",
    "初心者",
    "tailwindCSS",
    "初心者",
    "フロントエンド",
  ];
  return (
    <div className="w-full p-10 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
          {/* image(User) */}
          <Image
            className="rounded-full"
            src={"/img/avatar.jpg"}
            alt="アバター"
            width={120}
            height={120}
          />
          {/* userName(User) */}
          <div className="pl-10 text-center">
            <div className="text-xl">@{user_info_data.user_name}</div>
            <div className="mt-2 p-2 rounded-full text-white bg-orange-500 hover:bg-orange-300">
              <button>フォロー</button>
            </div>
          </div>
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black text-lg">
          <div className="flex-grow text-center">
            {/*  */}
            投稿数
            <div>11</div>
          </div>
          <div className="flex-grow text-center">
            {/*  */}
            フォロー
            <div>122</div>
          </div>
          <div className="flex-grow text-center ">
            {/*  */}
            フォロワー
            <div>140</div>
          </div>
        </div>
        <div className="text-2xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500">
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
      <div className="text-xl text-center m-2">{user_info_data.comment}</div>
    </div>
  );
};

export default ProfileLarge;
