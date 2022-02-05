import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileSmallType } from "../../const/Types";

const ProfileSmall: React.FC<ProfileSmallType> = ({
  user,
  checkLoginUserFlag,
  followerCount,
  followStatus,
  changeUsrFollow,
}) => {
  const tagStyle =
    "mx-1 mb-1 p-1 bg-orange-500  text-white text-center font-sans text-xs shadow-md rounded-lg";
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="flex justify-center items-center">
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
          <div className="pl-3 text-center">
            <div>@{user.userName}</div>
            {!checkLoginUserFlag && (
              <span>
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
              </span>
            )}
          </div>
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            投稿数
            <div>{user.articleCount}</div>
          </div>
          <div className="flex-grow text-center">
            <Link href={"/followList"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{user.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-center ">
            <Link href={"/followerList"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{followerCount}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="text-xl mt-2 flex justify-center items-center">
          職種:
          <span className="ml-4 px-3 rounded-md text-white bg-orange-500 ">
            {user.engineerType}
          </span>
        </div>
        <div className="mt-2">
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
      <div className="block m-2 text-center">{user.description}</div>
    </div>
  );
};

export default ProfileSmall;
