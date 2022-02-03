import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowList } from "../templates";
import { fetchFollowList } from "../hooks/api/fetchData";
import getCookie, { getArticleUserId } from "../hooks/cookie/handleCookie";

type Props = {
  [key: string]: object;
};

const FollowListPage: React.FC<Props> = ({ fallback }) => {
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
