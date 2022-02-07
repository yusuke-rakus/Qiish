import React from "react";
import { QiitaListComp } from "../components/organisms";
import useSWR from "swr";

const QiitaList: React.FC<any> = () => {
  // Qiitaの記事取得
  const { data } = useSWR("/qiitaList");

  return (
    <div>
      <div className="pt-10 text-4xl font-bold text-center">
        Qiitaの最新記事
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2 bg-orange-100">
          {data.map((qiitaData: any) => {
            return <QiitaListComp key={qiitaData.id} qiitaData={qiitaData} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default QiitaList;
