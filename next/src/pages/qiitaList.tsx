import React from "react";
import { QiitaList } from "../templates";
import { SWRConfig } from "swr";
import { fetchQiitaList } from "../lib/api/fetchData";
import { SWRPROPS } from "../const/Types";

const QiitaListPage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <QiitaList />
    </SWRConfig>
  );
};

export default QiitaListPage;

/**
 * Qiita記事一覧情報の取得.
 *
 * @remarks
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @returns fallback(keyとデータのオブジェクト)
 *  [Qiita記事一覧情報] key: "/qiitaList": qiitaList
 */
export const getStaticProps = async () => {
  const qiitaList = await fetchQiitaList();
  return {
    props: {
      fallback: {
        "/qiitaList": qiitaList,
      },
    },
  };
};
