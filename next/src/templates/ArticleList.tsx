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

  const searchArticles = async () => {
    const articleData = await fetchSearchedArticle(keyword, guestId);
    setArticleList(articleData);
    setVisible(false);
  };

  const reloadArticles = async () => {
    const data = await fetchArticleList();
    setArticleList(data.articleList);
  };

  return (
    <div>
      <HeaderComp
        visible={visible}
        onChangeKeyword={onChangeKeyword}
        searchArticles={searchArticles}
        showDrawer={showDrawer}
        onClose={onClose}
        reloadArticles={reloadArticles}
      ></HeaderComp>

      <div className="flex">
        <div className="flex-col w-96 max-w-5xl border">
          <SearchArticles
            searchArticles={searchArticles}
            onChangeKeyword={onChangeKeyword}
          />
          <TagRanking />
        </div>
        <div className="w-full h-48 grid grid-cols-2 gap-2">
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
