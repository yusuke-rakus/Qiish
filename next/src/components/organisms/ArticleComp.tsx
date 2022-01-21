import React from "react";
import { HeartOutlined, MessageTwoTone } from "@ant-design/icons";
import { ProfileSmall } from "./";
import ReactMarkdown from "react-markdown";

type Props = {
  user_info_data: {
    user_info_id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    engineer_type: string;
    comment: string;
    skill_tags: {
      user_info_id: number;
      skill_id: number;
      skill_name: string;
    }[];
  };
  articleLike: number;
  changeArticleLike: () => void;
};

const ArticleComp: React.FC<Props> = ({
  user_info_data,
  articleLike,
  changeArticleLike,
}) => {
  return (
    <div className="flex justify-center">
      <div className="text-center m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
        <div className="pb-10 pt-20 text-2xl font-bold">
          {/* title(Article) */}
          TailwindCSSのチートシートを公開します。
        </div>
        <div className="pb-2">
          {/* likeCount(Article) */}
          <div className="flex justify-center items-center">
            <button onClick={changeArticleLike}>
              <HeartOutlined className="text-2xl hover:text-orange-500" />
            </button>
            <a href="#" className="ml-1 text-xl text-black hover:text-gray-400">
              {articleLike}
            </a>
            &nbsp;
            {/* commentCount(Article) */}
            <MessageTwoTone twoToneColor="#f97316" className="text-2xl" />
            <span className="ml-1 text-xl">1</span>
          </div>
        </div>
        <div className="px-10">
          {/* tags(Article) */}
          <div className="flex justify-center flex-wrap">
            {/* 本来は記事のタグを回す */}
            {user_info_data.skill_tags.map((tagName) => {
              return (
                <span
                  className="m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
                  key={tagName.skill_name}
                >
                  {tagName.skill_name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pt-1 text-slate-500 text-center">
          {/* posted_date(Article) */}
          <span>投稿日: 2021年12月7日</span>
        </div>
        <div className="px-14 pt-6 text-lg">
          {/* content(Article) */}
          <div className="markdown">
            <ReactMarkdown>
              ###
              プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="w-1/5 mt-8">
        {/* profile(User) */}
        <ProfileSmall user_info_data={user_info_data} />
      </div>
    </div>
  );
};

export default ArticleComp;
