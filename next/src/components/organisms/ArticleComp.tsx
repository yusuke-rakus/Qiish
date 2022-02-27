import Link from "next/link";
import React from "react";
import moment from "moment";
import SkillTagsOnArticle from "../molecules/SkillTagsOnArticle";
import { HeartOutlined } from "@ant-design/icons";

// FCの型定義
type Props = {
  articleData: {
    id: number;
    title: string;
    content: string;
    postedDate: string;
    likesCount: number;
    articleTags: {
      id: number;
      skill: string;
      image: null;
    }[];
    userInfo: {
      id: number;
      userName: string;
    };
    visitedCount: number;
  };
  onClickTag: (id: number) => void;
};

const ArticleComp: React.FC<Props> = ({ articleData, onClickTag }) => {
  const formatDate = moment(articleData.postedDate).format("YYYY年MM月DD日");

  return (
    <div className="p-4 m-2 h-auto flex flex-col gap-1 hover:bg-gray-100 shadow">
      <div className="flex justify-between">
        <div className="text-ms text-gray-500 font-normal">
          @{articleData.userInfo.userName}が{formatDate}に投稿しました
        </div>
        <div className="text-ms text-gray-400 font-normal">
          {articleData.visitedCount} views
        </div>
      </div>

      <Link href={`/articles/${articleData.id}`}>
        <a className="m-1 text-black hover:text-gray-400 text-2xl font-bold no-underline hover:underline">
          {articleData.title}
        </a>
      </Link>

      <div className="flex justify-between">
        <SkillTagsOnArticle
          tags={articleData.articleTags}
          onClickTag={onClickTag}
        />

        <button className="mr-2 mt-2 flex gap-2 text-xl text-gray-500">
          <HeartOutlined className="pt-1" />
          <span className="text-xl text-gray-500">
            {articleData.likesCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArticleComp;
