import React from "react";
import { QiitaListComp } from "../components/organisms";
import useSWR from "swr";

const QiitaList: React.FC<any> = () => {
  const { data, error } = useSWR("/qiita");

  if (error) return <div>failed to load</div>;
  // loadingまだ出てない。
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <div className="pt-10 text-4xl font-bold text-center">
        Qiitaの最新記事
      </div>
      <div className="mx-80 grid grid-cols-2 gap-2 bg-orange-100">
        {data.map((qiitaData: any) => {
          return <QiitaListComp key={qiitaData.id} qiitaData={qiitaData} />;
        })}
      </div>
    </div>
  );
};
export default QiitaList;
