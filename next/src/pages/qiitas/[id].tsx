import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import axios from "axios";
import { Qiita } from "../../templates";

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
  const res = await axios.get("https://qiita.com/api/v2/items", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });

  // 記事のidを取得する
  const paths = res.data.map((item: any) => ({
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
  // 定数.dataとしないとエラーが発生する
  const qiita = await axios.get(`https://qiita.com/api/v2/items/${qiitaId}`, {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_ACCESS_TOKEN}`,
    },
  });

  return {
    props: {
      fallback: {
        "/qiita": qiita.data,
      },
    },
  };
};
