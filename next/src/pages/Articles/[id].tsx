import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Article } from "../../templates";
import { fetchArticle } from "../api/fetchData";

type Props = {
  [key: string]: object;
};

const ArticlePage: React.FC<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Article />
      </SWRConfig>
    </div>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async () => {
  // 記事情報取得のAPI
  const article = await fetchArticle();

  return {
    props: {
      fallback: {
        "/article": article,
      },
    },
  };
};
