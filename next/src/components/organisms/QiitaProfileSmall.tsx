import React from "react";
import Image from "next/image";
import { QiitaProfileSmallType } from "../../const/Types";

const QiitaProfileSmall: React.FC<QiitaProfileSmallType> = ({ qiita_user }) => {
  return (
    <div className="w-full p-2 m-2 bg-white rounded-lg border shadow-md">
      <div className="m-4">
        <div className="text-center font-bold">Qiitaプロフィール</div>
        <hr />
        <div className="mt-2 flex justify-center items-center">
          <div className="text-center">
            <Image
              className="rounded-full"
              src={"/img/avatar.jpg"}
              alt="アバター"
              width={90}
              height={90}
            />
            <div>
              {qiita_user.github_login_name
                ? `@${qiita_user.github_login_name}`
                : qiita_user.name}
            </div>
          </div>
        </div>
        <div className="m-4 flex jusify-around divide-x divide-black ">
          <div className="flex-grow text-center">
            投稿数 : {qiita_user.items_count}
          </div>
        </div>
      </div>
      <div className="block m-2">{qiita_user.description}</div>
    </div>
  );
};

export default QiitaProfileSmall;
