import Link from "next/link";
import React from "react";
import SkillTagsOnArticle from "../old_molecules/SkillTagsOnArticle";

// FCの型定義
type Props = {
  articleData: {
    id: number;
    // user_info_id: number;
    user_info_data: {
      user_info_id: number;
      first_name: string;
      last_name: string;
      user_name: string;
      email: string;
      engineer_type: string;
      comment: string;
    };
    title: string;
    content: string;
    posted_date: string;
    tags: {
      article_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
};

const ArticleComp: React.FC<Props> = ({ articleData }) => {
  return (
    <div>
      <div className="p-5 m-2 h-28 flex flex-col gap-1 bg-white rounded-lg shadow-xl">
        <div className="text-xs text-gray">
          @{articleData.user_info_data.user_name}が{articleData.posted_date}
          に投稿しました
        </div>

        <Link href={`/articles/${articleData.id}`}>
          <a className="text-black hover:text-gray-400 text-base font-bold no-underline hover:underline">
            {articleData.title}
          </a>
        </Link>

        <SkillTagsOnArticle tags={articleData.tags} />
      </div>
    </div>
  );
};

export default ArticleComp;
