import React from "react";
import Image from "next/image";

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
};

const QiitaProfileSmall: React.FC<Props> = ({ user_info_data }) => {
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="text-center font-bold">Qiitaプロフィール</div>
        <hr />
        <div className="mt-2 flex justify-center items-center">
          <Image
            className="rounded-full"
            src={"/img/avatar.jpg"}
            alt="アバター"
            width={90}
            height={90}
          />
          <div className="pl-3 text-center">
            {/* ユーザーネームがなければgithubのユーザーネームを表示 */}
            <div>
              @
              {user_info_data.github_login_name
                ? user_info_data.github_login_name
                : user_info_data.name}
            </div>
            {!user_info_data.github_login_name && "↑ユーザーネーム"}
          </div>
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            {/*  */}
            投稿数 : {user_info_data.items_count}
          </div>
        </div>
      </div>
      <div className="block m-2">{user_info_data.description}</div>
    </div>
  );
};

export default QiitaProfileSmall;
