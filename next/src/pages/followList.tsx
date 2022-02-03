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

// フォローリスト取得の処理
export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
