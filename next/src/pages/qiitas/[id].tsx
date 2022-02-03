import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import { Qiita } from "../../templates";
import { fetchQiita, fetchQiitaList } from "../../lib/api/fetchData";

type Props = {
  [key: string]: object;
};

const QiitaPage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Qiita />
    </SWRConfig>
  );
};

export default QiitaPage;

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
