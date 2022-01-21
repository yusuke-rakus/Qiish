import React from "react";
import axios from "axios";
import { QiitaList } from "../templates";

const QiitaListPage: React.FC<{ qiitaDatas: any }> = ({ qiitaDatas }) => {
  return (
    <div>
      <div className="pt-10 text-4xl font-bold text-center">
        Qiitaの最新記事
      </div>
      <div className="mx-80 grid grid-cols-2 gap-2 bg-orange-100">
        {qiitaDatas.map((qiitaData: any) => {
          return <QiitaList key={qiitaData.id} qiitaData={qiitaData} />;
        })}
      </div>
    </div>
  );
};

export default QiitaListPage;

export const getStaticProps = async () => {
  const res = await axios.get("https://qiita.com/api/v2/items", {
    headers: {
      Authorization: `Bearer 280cd37b8bdf97a67de2359bb597f5c26db82ff4`,
    },
  });

  return {
    props: {
      qiitaDatas: res.data,
    },
  };
};
