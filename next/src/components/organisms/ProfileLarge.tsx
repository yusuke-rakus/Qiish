import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileLargeType } from "../../const/Types";

const ProfileLarge: React.FC<ProfileLargeType> = ({
  userInfo,
  tagsByNum,
  checkLoginUserFlag,
  followerCount,
  followStatus,
  changeUsrFollow,
}) => {
  return (
    <div className="w-full p-10 m-2 bg-white rounded border shadow">
      <div className="m-4">
        <div className="flex justify-center items-center">
          {userInfo.userImage ? (
            <Image
              className="rounded-full"
              src={userInfo.userImage}
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
          <div className="pl-10 text-center">
            <div className="text-xl">@{userInfo.userName}</div>
            <div className="text-xl mt-2 flex justify-center items-center">
              職種:
              <span className="ml-4 px-4 py-1 rounded text-white bg-sky-400">
                {userInfo.engineerType}
              </span>
            </div>
            {!checkLoginUserFlag && (
              <span>
                {followStatus ? (
                  <button onClick={changeUsrFollow}>
                    <div className="mt-2 p-2 rounded-full text-white bg-sky-500 hover:bg-sky-300">
                      フォロー解除
                    </div>
                  </button>
                ) : (
                  <button onClick={changeUsrFollow}>
                    <div className="mt-2 px-5 py-2 rounded-full text-white bg-sky-500 hover:bg-sky-300">
                      フォロー
                    </div>
                  </button>
                )}
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 p-4 flex jusify-around divide-x divide-black text-sm sm:text-base lg:text-lg">
          <div className="flex-grow sm:px-1 md:p-2 text-center">
            投稿数
            <div>{userInfo.articleCount}</div>
          </div>
          <div className="flex-grow sm:px-1 md:p-2 text-center">
            <Link href={"/followList"}>
              <a className="text-black hover:text-gray-400">
                フォロー<div>{userInfo.followCount}</div>
              </a>
            </Link>
          </div>
          <div className="flex-grow sm:px-1 md:p-2 text-center ">
            <Link href={"/followerList"}>
              <a className="text-black hover:text-gray-400">
                フォロワー<div>{followerCount}</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-center flex-wrap">
            {tagsByNum.map((tag) => {
              return (
                <span
                  className="mx-2 mb-1 px-4 py-2 bg-sky-500 text-white text-center font-normal text-xs shadow rounded"
                  key={tag.skill}
                >
                  {tag.skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-xl text-center m-2">{userInfo.description}</div>
    </div>
  );
};

export default ProfileLarge;
