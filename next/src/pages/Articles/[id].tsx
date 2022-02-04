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

/**
 * 記事詳細情報の取得とタグデータの取得.
 *
 * @remarks
 *   Cookie情報が必要になったため、SSRでデータ取得.
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param ctx - ヘッダーの情報(Cookie情報を取得するため)
 * @returns fallback(keyとデータのオブジェクト)
 *  [記事データ] key: "/article" data: article
 *  [タグデータ] key: "/tagsData" data: tagsData
 */
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
