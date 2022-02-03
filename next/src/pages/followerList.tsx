import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowerList } from "../templates";
import { fetchFollowerList } from "../hooks/api/fetchData";
import getCookie, { getArticleUserId } from "../hooks/cookie/handleCookie";

type Props = {
  [key: string]: object;
};

const FollowerListPage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <FollowerList />
    </SWRConfig>
  );
};

export default FollowerListPage;

// フォローリスト取得の処理
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const guestId = getCookie(ctx);
  let userId = getArticleUserId(ctx);
  // Cookieに投稿者ID(articleUserId)がなければログインユーザーIdを利用
  if (!userId) {
    userId = getCookie(ctx);
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
