import React from "react";
import { GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Follower } from "../templates";
import { fetchFollowerList } from "./api/fetchData";

type Props = {
  [key: string]: object;
};

const FollowerPage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Follower />
    </SWRConfig>
  );
};

export default FollowerPage;

// フォローリスト取得の処理
export const getStaticProps: GetStaticProps = async () => {
  const userInfoId = 1;
  const follower = await fetchFollowerList(userInfoId);

  return {
    props: {
      fallback: {
        "/follower": follower,
      },
    },
  };
};
