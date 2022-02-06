import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowerList } from "../templates";
import { fetchFollowerList } from "../lib/api/fetchData";
import getCookie, { getArticleUserId } from "../lib/cookie/handleCookie";
import { SWRPROPS } from "../const/Types";

const FollowerListPage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FollowerList />
    </SWRConfig>
  );
};

export default FollowerListPage;

/**
 * フォロワーユーザーリストの取得.
 *
 * @remarks
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param ctx - ヘッダーの情報(Cookie情報を取得するため)
 * @returns fallback(keyとデータのオブジェクト)
 *  [フォローされているユーザーデータ] key: "/followerList": followerList
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ログインユーザーIDと記事投稿者IDの取得
  const guestId = getCookie(ctx);
  let userId = getArticleUserId(ctx);
  // Cookieに投稿者IDがなければログインユーザーIDを利用
  if (!userId) {
    userId = guestId;
  }

  const followerList = await fetchFollowerList(guestId, userId);

  return {
    props: {
      fallback: {
        "/followerList": followerList,
      },
    },
  };
};
