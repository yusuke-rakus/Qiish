import Link from "next/link";
import React from "react";
import SkillTagsOnArticle from "../molecules/SkillTagsOnArticle";

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
    <div className="bg-white border p-8 m-2 box-content rounded-lg shadow-md flex">
      <div>
        <div className="font-sans text-xs">
          @{articleData.user_info_data.user_name}が{articleData.posted_date}
          に投稿しました
        </div>
        <Link href={`/Articles/${articleData.id}`}>
          <a className="font-bold text-xl no-underline hover:underline">
            {articleData.title}
          </a>
        </Link>
        <SkillTagsOnArticle tags={articleData.tags} />
      </div>
      {/* <Image >に切り替える */}
      <div className="bg-gray-100 box-content ml-8 h-30 w-1/5 p-8 text-center">
        NoImage
      </div>
      {/* </Image> */}
    </div>
  );
};

export default ArticleComp;
