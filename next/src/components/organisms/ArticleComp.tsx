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
      image: null;
    }[];
    userInfo: {
      id: number;
      userName: string;
    };
  };
  onClickTag: (id: number) => void;
};

const ArticleComp: React.FC<Props> = ({ articleData, onClickTag }) => {
  const formatDate = moment(articleData.postedDate).format("YYYY年MM月DD日");

  return (
    <div>
      <div className="p-4 m-4 flex flex-col gap-1 hover:bg-gray-100">
        <div className="text-ms text-gray font-normal">
          @{articleData.userInfo.userName}が{formatDate}に投稿しました
        </div>

        <Link href={`/articles/${articleData.id}`}>
          <a className="m-1 text-black hover:text-gray-400 text-2xl font-bold no-underline hover:underline">
            {articleData.title}
          </a>
        </Link>

        <SkillTagsOnArticle
          tags={articleData.articleTags}
          onClickTag={onClickTag}
        />
      </div>
    </div>
  );
};

export default ArticleComp;
