import React from "react";
import useSWR from "swr";
import { Comments } from ".";
import { QiitaComp } from "../components/organisms";

const Qiita: React.FC = () => {
  // qiita詳細データ
  const { data, error } = useSWR(`/qiita`);

  // フォローフラグ切り替え
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...{console.log("loading!!")}</div>;

  return (
    <div className="h-full">
      <QiitaComp qiita={data} />
    </div>
  );
};

export default Qiita;
