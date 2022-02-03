import React, { useEffect, useState } from "react";
import ArticleComp from "../components/organisms/ArticleComp";
import TagBar from "../components/organisms/Tagbar";
import { fetchArticleList } from "../lib/api/fetchData";
import getCookie from "../lib/cookie/handleCookie";
import { fetchSearchedTag } from "../lib/api/fetchData";

const ArticleList: React.FC = () => {
  const guestId = getCookie();
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchArticleList();
      setArticleList(data.articleList);
    })();
  }, []);

  const onClickTag = async (tagId: number) => {
    const tagsData = await fetchSearchedTag(String(tagId), guestId);
    setArticleList(tagsData);
  };

  return (
    <div>
      <div className="mx-56 my-1 flex text-4xl font-semibold">
        <span className="mx-4 text-orange-500">Articles</span>
        <TagBar></TagBar>
      </div>

      <div className="mx-56 grid grid-cols-2 gap-2 bg-orange-100">
        {articleList &&
          articleList.map((articleData: any) => {
            return (
              <ArticleComp
                key={articleData.id}
                articleData={articleData}
                onClickTag={onClickTag}
              />
            );
          })}
      </div>
    </div>
  );
};
export default ArticleList;
