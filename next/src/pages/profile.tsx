import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { Profile } from "../templates";
import { fetchProfile } from "../lib/api/fetchData";
import getCookie, { getArticleUserId } from "../lib/cookie/handleCookie";
import { SWRPROPS } from "../const/Types";

const ProfilePage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Profile />
    </SWRConfig>
  );
};

export default ProfilePage;

/**
 * プロフィール情報の取得.
 *
 * @remarks
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param ctx - ヘッダーの情報(Cookie情報を取得するため)
 * @returns fallback(keyとデータのオブジェクト)
 *  [プロフィールデータ] key: "/profile": profile
 */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // ログインユーザーIDと記事投稿者IDの取得
  const guestId = getCookie(ctx);
  let userInfoId = getArticleUserId(ctx);
  // Cookieに投稿者ID(articleUserId)がなければログインユーザーIdを利用
  if (!userInfoId) {
    userInfoId = getCookie(ctx);
  }

  const profile = await fetchProfile(guestId, userInfoId);
  return {
    props: {
      fallback: {
        "/profile": profile,
      },
    },
  };
};
