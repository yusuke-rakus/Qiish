import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { FollowList } from "../templates";
import { fetchFollowList } from "./api/fetchData";

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
export const getStaticProps: GetStaticProps = async () => {
  const userInfoId = 1;
  const followList = await fetchFollowList(userInfoId);

  return {
    props: {
      fallback: {
        "/followList": followList,
      },
    },
  };
};
