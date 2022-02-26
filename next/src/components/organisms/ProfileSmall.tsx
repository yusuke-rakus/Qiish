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
    "mx-1 mb-1 px-4 py-2 bg-sky-500 text-white text-center font-sans text-xs shadow rounded";
  return (
    <div className="w-full p-2 bg-white rounded border shadow">
      <div className="m-2">
        <div className="mt-8 flex justify-center items-center">
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
          <div className="text-center ml-12">
            <div className="text-xl">@{user.userName}</div>
            <div className="text-ms mt-2 flex justify-center items-center">
              職種:
              <span className="text-ms ml-4 px-4 py-1 rounded text-white bg-sky-500 ">
                {user.engineerType}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full flex divide-x divide-black">
          <div className="flex-grow text-xs lg:text-base text-center">
            投稿数
            <div>{user.articleCount}</div>
          </div>
          <div className="flex-grow text-xs lg:text-base text-center">
            <Link href={"/followList"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{user.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow text-xs lg:text-base text-center">
            <Link href={"/followerList"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{followerCount}</div>
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-center flex-wrap">
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
      <div className="block mx-2 p-2">{user.description}</div>
      <div className="text-center">
        {!checkLoginUserFlag && (
          <span>
            {followStatus ? (
              <button onClick={changeUsrFollow}>
                <div className="mt-2 px-5 py-2 rounded-full text-xs text-white bg-sky-500 hover:bg-sky-300">
                  フォロー解除
                </div>
              </button>
            ) : (
              <button onClick={changeUsrFollow}>
                <div className="mt-2 px-5 py-2 rounded-full text-xs text-white bg-sky-500 hover:bg-sky-300">
                  フォロー
                </div>
              </button>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileSmall;
