import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Article } from "../../templates";
import { fetchArticle, fetchArticleList } from "../api/fetchData";

type Props = {
  [key: string]: object;
};

const ArticlePage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Article />
    </SWRConfig>
  );
};

export default ArticlePage;

// build時に必要なpathを取得
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchArticleList();
  const paths = res.articleList.map(
    (article: any) => `/articles/${String(article.id)}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 記事情報取得のAPI
  // undefindの可能性があるためparamsをoptionalにした
  const article = await fetchArticle(params?.id);

  return {
    props: {
      fallback: {
        "/article": article,
      },
    },
  };
};
