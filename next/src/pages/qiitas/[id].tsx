import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Qiita } from "../../templates";
import { fetchQiita, fetchQiitaList } from "../../lib/api/fetchData";
import { SWRPROPS } from "../../const/Types";

const QiitaPage: React.FC<SWRPROPS> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Qiita />
    </SWRConfig>
  );
};

export default QiitaPage;

/**
 * build時に作成するページ遷移用のパスを作成.
 *
 * @remarks ビルド時に HTML をレンダリングするためのパス一覧(公式より)
 *
 * @returns paths: 記事のid(ページ遷移用のパス)
 * @returns fallback
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const qiitaDatas = await fetchQiitaList();

  // 記事のidを取得する
  const paths = qiitaDatas.map((item: any) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * Qiita記事の取得.
 *
 * @remarks
 *   SWRを用いて子コンポーネントの中で下記のように取得できる.
 *   const { data } = useSWR (key)
 * @param params - pathsの値(記事のid)
 * @returns fallback(keyとデータのオブジェクト)
 *  [Qiita記事データ] key: "/qiita": qiitaData
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const qiitaId = params?.id;

  // qiita記事情報取得のAPI
  const qiitaData = await fetchQiita(qiitaId);

  return {
    props: {
      fallback: {
        "/qiita": qiitaData,
      },
    },
  };
};
