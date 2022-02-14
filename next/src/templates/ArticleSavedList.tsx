import React, { useState } from "react";
import useSWR from "swr";
import { fetchSavedArticleList } from "../lib/api/fetchData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TagOutlined } from "@ant-design/icons";

const ArticleSavedList: React.FC = () => {
  const { data: articleSavedList } = useSWR(
    "/articleSavedList",
    fetchSavedArticleList
  );

  const [article, setArticle] = useState(articleSavedList.articleList[0]);

  const selectArticle = (title: string) => {
    const foundArticle = articleSavedList.articleList.find(
      (articleData: any) => articleData.title === title
    );
    setArticle(foundArticle);
  };

  return (
    <div>
      <div className="ml-20 py-3 text-4xl font-semibold text-orange-500">
        下書き一覧
      </div>
      {/* antdのmenuかtabを利用してswitchできるようにする */}
      <div className="flex mt-1 mr-2 bg-white shadow">
        <div className="w-1/3 bg-orange-100">
          {articleSavedList &&
            articleSavedList.articleList.map((articleData: any) => {
              return (
                <div
                  key={articleData.id}
                  className="px-5 py-3 m-2 bg-white rounded hover:bg-slate-50"
                >
                  <button
                    className="w-full"
                    onClick={() => selectArticle(articleData.title)}
                  >
                    <span className="text-black text-xl font-bold">
                      {articleData.title}
                    </span>
                    <div className="flex flex-wrap">
                      <span className="pr-2 text-xl">
                        <TagOutlined />
                      </span>

                      {articleData.articleTags.map((tag: any) => {
                        return (
                          <div
                            key={tag.skill}
                            className={
                              "m-1 px-3 py-1 bg-orange-400 text-white font-sans text-xs rounded-sm no-underline "
                            }
                          >
                            {tag.skill}
                          </div>
                        );
                      })}
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
        <div className="markdown pt-10 pl-10">
          <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArticleSavedList;
