import Link from "next/link";
import React from "react";
import moment from "moment";
import SkillTagsOnArticle from "../molecules/SkillTagsOnArticle";

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
    }[];
  };
};

const ArticleComp: React.FC<Props> = ({ articleData }) => {
  const formatDate = moment(articleData.postedDate).format("YYYY年MM月DD日");

  return (
    <div>
      <div className="p-5 m-2 flex flex-col gap-1 bg-white rounded shadow relative">
        <div className="text-xs text-gray font-normal">
          投稿日：{formatDate}
        </div>

        <Link href={`/articles/${articleData.id}`}>
          <a className="m-1 text-black hover:text-gray-400 text-xl font-bold no-underline hover:underline">
            {articleData.title}
          </a>
        </Link>

        <SkillTagsOnArticle tags={articleData.articleTags} />
      </div>
    </div>
  );
};

export default ArticleComp;
