import React from "react";
import Image from "next/image";
import { ProfileRectangleType } from "../../const/Types";

const ProfileRectangle: React.FC<ProfileRectangleType> = ({
  user_data,
  changeUsrFollow,
  followStatus,
  checkLoginUserFlag,
}) => {
  return (
    <div className="flex justify-between gap-4 items-center w-full m-2 pl-10 p-2 bg-white rounded-lg border shadow-md">
      <Image
        className="rounded-full"
        src={"/img/avatar.jpg"}
        alt="アバター"
        width={90}
        height={90}
      />
      <div className="text-center text-xl">
        <div>@{user_data.userName}</div>
      </div>
      <div className="text-lg">
        <span className="px-4 py-1 rounded text-white bg-sky-500">
          {user_data.engineerType}
        </span>
      </div>
      {!checkLoginUserFlag && (
        <div>
          {followStatus ? (
            <button onClick={changeUsrFollow}>
              <div className="mr-8 px-8 py-2 rounded-full text-white bg-sky-500 hover:bg-sky-600">
                フォロー解除
              </div>
            </button>
          ) : (
            <button data-testid="followTest" onClick={changeUsrFollow}>
              <div className="mr-8 px-8 py-2 rounded-full text-white bg-sky-500 hover:bg-sky-600">
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
