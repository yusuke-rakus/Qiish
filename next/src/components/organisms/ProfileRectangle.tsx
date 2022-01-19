import Image from "next/image";
import React from "react";

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

const ProfileRectangle: React.FC<Props> = ({ user_info_data }) => {
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
          <div>@{user_info_data.user_name}</div>
          <div className="mt-2 text-lg">
            職種<span className="mx-1">:</span>
            <span className="px-3 rounded-md text-white bg-orange-500">FR</span>
          </div>
        </div>
      </div>
      <div className="mt-2 ml-4">
        <span className="p-1 rounded-full text-xl text-white bg-orange-500 hover:bg-orange-300">
          <button>フォロー</button>
        </span>
      </div>
    </div>
  );
};

export default ProfileRectangle;
