import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Article } from "../../templates";
import { fetchArticle } from "../api/fetchData";
import getCookie from "../../hooks/cookie/handleCookie";

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

// ユーザーIDよりプロフィール情報を取得
// SSGで取得していたが、Cookie情報が必要になったため、SSRに変更
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ログインユーザーIDと記事IDをCookieから取得
  const guestId = getCookie(ctx);
  const articleId = ctx.params?.id;

  const article = await fetchArticle(articleId, guestId);

  return {
    props: {
      fallback: {
        "/article": article,
      },
    },
  };
};

// // build時に必要なpathを取得
// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetchArticleList();
//   const paths = res.articleList.map(
//     (article: any) => `/articles/${String(article.id)}`
//   );

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // 記事情報取得のAPI
//   const article = await fetchArticle(params.id);

//   // revalidate追加でISRを実現
//   return {
//     props: {
//       fallback: {
//         "/article": article,
//       },
//     },
//     revalidate: 1,
//   };
// };
