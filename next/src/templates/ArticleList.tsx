import React, { useEffect } from "react";
import { useState, ChangeEvent } from "react";
import { HeaderComp } from "../components/organisms";
import ArticleComp from "../components/organisms/ArticleComp";
import getCookie from "../lib/cookie/handleCookie";
import { fetchArticleList } from "../lib/api/fetchData";
import { fetchSearchedTag } from "../lib/api/fetchData";
import { fetchSearchedArticle } from "../lib/api/fetchData";
import TagRanking from "../components/organisms/TagRanking";
import SearchArticles from "../components/organisms/SearchArticles";

const ArticleList: React.FC = () => {
  const guestId = getCookie();
  const [articleList, setArticleList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

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

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const search = async () => {
    const articleData = await fetchSearchedArticle(keyword, guestId);
    setArticleList(articleData);
    setVisible(false);
  };

  return (
    <div>
      <HeaderComp
        visible={visible}
        onChangeKeyword={onChangeKeyword}
        search={search}
        showDrawer={showDrawer}
        onClose={onClose}
      ></HeaderComp>
      <div className="flex">
        <div className="flex-col w-96 max-w-5xl border">
          <SearchArticles />
          <TagRanking />
        </div>
        <div className="w-full grid grid-cols-2 gap-2 border">
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
    </div>
  );
};
export default ArticleList;
