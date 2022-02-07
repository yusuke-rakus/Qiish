import React from "react";
import useSWR from "swr";
import { LeftCircleOutlined } from "@ant-design/icons";
import { QiitaComp } from "../components/organisms";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const Qiita: React.FC = () => {
  /**
   * 指定した幅より大きければtrue,小さければfalse
   */
  const isExistProfile = useMediaQuery({ query: "(min-width: 768px)" });

  // qiita詳細データを取得
  const { data } = useSWR(`/qiita`);

  return (
    <div className="h-full py-10">
      <span className="pl-56">
        <Link href={"/qiitaList"}>
          <a className="text-gray-400 hover:text-slate-600">
            <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
          </a>
        </Link>
      </span>
      <QiitaComp qiita={data} isExistProfile={isExistProfile} />
    </div>
  );
};

export default Qiita;
