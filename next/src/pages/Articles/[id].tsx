import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Article } from "../../templates";
import { fetchArticle } from "../api/fetchData";
import { useRouter } from "next/router";

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

// // [id]でgetStaticPropsを使用する場合、getStaticPathsが必要になる(API接続できたら)
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "1" } }], //indicates that no page needs be created at build time
//     fallback: false, //indicates the type of fallback
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   // 記事情報取得のAPI
//   const article = await fetchArticle();

//   return {
//     props: {
//       fallback: {
//         "/article": article,
//       },
//     },
//   };
// };
