import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { SkillTagsOnArticle } from "../components/molecules";
import { fetchSavedArticleList } from "../lib/api/fetchData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleSavedList: React.FC = () => {
  const { data: articleSavedList } = useSWR(
    "/articleSavedList",
    fetchSavedArticleList
  );

  const onClickTag = async (tagId: number) => {};

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
                  className="p-5 m-2 flex flex-col gap-1 bg-white rounded shadow "
                >
                  <Link href={`/articles/${articleData.id}`}>
                    <a className="m-1 text-black hover:text-gray-400 text-xl font-bold no-underline hover:underline">
                      {articleData.title}
                    </a>
                  </Link>

                  <SkillTagsOnArticle
                    tags={articleData.articleTags}
                    onClickTag={onClickTag}
                  />
                </div>
              );
            })}
        </div>
        <div className="markdown pt-10 pl-10">
          <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
            {/* {articleData.content} */}# test
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ArticleSavedList;
