import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowList } from "../templates";
import { fetchFollowList } from "../lib/api/fetchData";
import getCookie, { getArticleUserId } from "../lib/cookie/handleCookie";
import { SWRPROPS } from "../const/Types";

const FollowListPage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FollowList />;
    </SWRConfig>
  );
};

export default FollowListPage;

/**
 * フォローユーザーリストの取得.
 *
 * @remarks
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param ctx - ヘッダーの情報(Cookie情報を取得するため)
 * @returns fallback(keyとデータのオブジェクト)
 *  [フォローしているユーザーデータ] key: "/followList": followList
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ログインユーザーIDと記事投稿者IDの取得
  const guestId = getCookie(ctx);
  let userId = getArticleUserId(ctx);
  // Cookieに投稿者ID(articleUserId)がなければログインユーザーIdを利用
  if (!userId) {
    userId = getCookie(ctx);
  }

  const followList = await fetchFollowList(guestId, userId);

  return {
    props: {
      fallback: {
        "/followList": followList,
      },
    },
  };
};
