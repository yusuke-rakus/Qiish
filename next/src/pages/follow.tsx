import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Follow } from "../templates";
import { fetchFollowList } from "./api/fetchData";

type Props = {
  [key: string]: object;
};

const FollowPage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Follow />;
    </SWRConfig>
  );
};

export default FollowPage;

// フォローリスト取得の処理
export const getStaticProps: GetStaticProps = async () => {
  const userInfoId = 1;
  const follow = await fetchFollowList(userInfoId);

  return {
    props: {
      fallback: {
        "/follow": follow,
      },
    },
  };
};
