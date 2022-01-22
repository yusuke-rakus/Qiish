import React from "react";
import { QiitaList } from "../templates";
import { SWRConfig } from "swr";
import { fetchQiita } from "./api/fetchData";

type Props = {
  [key: string]: object;
};

const QiitaListPage: React.FC<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <QiitaList />
    </SWRConfig>
  );
};

export default QiitaListPage;

export const getStaticProps = async () => {
  const qiita = await fetchQiita();
  return {
    props: {
      fallback: {
        "/qiita": qiita,
      },
    },
  };
};
