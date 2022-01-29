import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowList } from "../templates";
import { fetchFollowList } from "./api/fetchData";
import { getArticleUserId } from "../hooks/cookie/handleCookie";

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
  const userId = getArticleUserId(ctx);
  const followList = await fetchFollowList(userId);

  return {
    props: {
      fallback: {
        "/followList": followList,
      },
    },
  };
};
