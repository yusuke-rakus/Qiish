import Link from "next/link";
import React from "react";
import { SkillTagsOnArticle } from "../components/old_molecules";
import moment from "moment";

const QiitaList: React.FC<any> = ({ qiitaData }) => {
  const formatDate = moment(qiitaData.created_at).format("YYYY年MM月DD日");
  return (
    <div className="p-5 m-2 h-auto flex flex-col gap-1 bg-white rounded-lg shadow-xl">
      <div className="text-xs text-gray">
        @{qiitaData.user.name}が{formatDate}
        に投稿しました
      </div>

      <Link href={qiitaData.url}>
        <a className="text-black hover:text-gray-400 text-base font-bold no-underline hover:underline">
          {qiitaData.title}
        </a>
      </Link>

      <SkillTagsOnArticle tags={qiitaData.tags} />
    </div>
  );
};
export default QiitaList;
