import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { Article } from "../../templates";
import { fetchArticle, fetchGetTags } from "../../lib/api/fetchData";
import getCookie from "../../lib/cookie/handleCookie";
import { SWRPROPS } from "../../const/Types";

const ArticlePage: React.FC<SWRPROPS> = ({ fallback }) => {
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
  const tagsData = await fetchGetTags();

  return {
    props: {
      fallback: {
        "/article": article,
        "/tagsData": tagsData,
      },
    },
  };
};
