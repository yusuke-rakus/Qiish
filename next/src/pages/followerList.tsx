import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { FollowerList } from "../templates";
import { fetchFollowerList } from "./api/fetchData";

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
export const getStaticProps: GetStaticProps = async () => {
  const userInfoId = 1;
  const followerList = await fetchFollowerList(userInfoId);

  return {
    props: {
      fallback: {
        "/followerList": followerList,
      },
    },
  };
};
