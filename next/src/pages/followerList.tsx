import React from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { FollowerList } from "../templates";
import { fetchFollowerList } from "./api/fetchData";
import { getArticleUserId } from "../hooks/cookie/handleCookie";

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
  const userId = getArticleUserId(ctx);

  const followerList = await fetchFollowerList(userId);

  return {
    props: {
      fallback: {
        "/followerList": followerList,
      },
    },
  };
};
