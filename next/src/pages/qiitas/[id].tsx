import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Qiita } from "../../templates";
import { fetchArticle } from "../api/fetchData";
import { useRouter } from "next/router";

type Props = {
  [key: string]: object;
};

const QiitaPage: React.FC<Props> = ({ fallback }) => {
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Qiita />
      </SWRConfig>
    </div>
  );
};

export default QiitaPage;

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
