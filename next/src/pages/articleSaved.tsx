import React from "react";
import { GetServerSideProps } from "next";
import { fetchSavedArticleList } from "../lib/api/fetchData";
import getCookie from "../lib/cookie/handleCookie";
import { ArticleSavedList } from "../templates";
import { SWRConfig } from "swr";
import { SWRPROPS } from "../const/Types";

const ArticleSavedPage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <ArticleSavedList />
    </SWRConfig>
  );
};

export default ArticleSavedPage;

/**
 * 下書き記事一覧情報の取得とタグデータの取得.
 *
 * @remarks
 *   Cookie情報が必要になったため、SSRでデータ取得.
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param ctx - ヘッダーの情報(Cookie情報を取得するため)
 * @returns fallback(keyとデータのオブジェクト)
 *  [下書き記事一覧データ] key: "/articleSavedList" data: articleSavedList
 *  [タグデータ] key: "/tagsData" data: tagsData
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ログインユーザーIDと記事IDをCookieから取得
  const guestId = getCookie(ctx);
  const guestIdNum = Number(guestId);
  const articleSavedList = await fetchSavedArticleList(guestIdNum);

  return {
    props: {
      fallback: {
        "/articleSavedList": articleSavedList,
      },
    },
  };
};
