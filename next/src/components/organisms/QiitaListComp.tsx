import Link from "next/link";
import React from "react";
import moment from "moment";
import { SkillTagsOnQiita } from "../molecules";
import { QiitaListCompType } from "../../const/Types";

const QiitaListComp: React.FC<QiitaListCompType> = ({ qiitaData }) => {
  const formatDate = moment(qiitaData.created_at).format("YYYY年MM月DD日");
  return (
    <div className="p-5 m-2 h-auto flex flex-col gap-1 bg-white rounded-lg shadow-xl">
      <div className="text-xs text-gray">
        {qiitaData.user.github_login_name
          ? `@${qiitaData.user.github_login_name}`
          : qiitaData.user.name}
        が{formatDate}
        に投稿しました
      </div>

      <Link href={`/qiitas/${qiitaData.id}`}>
        <a className="text-black hover:text-gray-400 text-base font-bold no-underline hover:underline">
          {qiitaData.title}
        </a>
      </Link>

      <SkillTagsOnQiita tags={qiitaData.tags} />
    </div>
  );
};
export default QiitaListComp;
