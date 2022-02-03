import React from "react";
import { HeartOutlined, MessageTwoTone } from "@ant-design/icons";
import { QiitaProfileSmall } from ".";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { QiitaComp } from "../../const/Types";

const QiitaComp: React.FC<QiitaComp> = ({ qiita, isExistProfile }) => {
  return (
    <div className="flex justify-center">
      <div className="m-10 bg-white w-1/2 h-auto rounded-lg border shadow-md">
        <div className="pb-10 pt-20 px-10 text-2xl font-bold">
          {qiita.title}
        </div>
        <div className="pb-2">
          {/* likeCount(Article) */}
          <div className="flex justify-center items-center">
            <HeartOutlined className="text-2xl" />
            <span className="ml-1 text-xl text-black">{qiita.likes_count}</span>
            &nbsp;
            {/* commentCount(Article) */}
            <MessageTwoTone twoToneColor="#f97316" className="text-2xl" />
            <span className="ml-1 text-xl">1</span>
          </div>
        </div>
        <div className="px-10">
          {/* tags(Article) */}
          <div className="flex justify-center flex-wrap">
            {/* 本来は記事のタグを回す */}
            {qiita.tags.map((tag) => {
              return (
                <span
                  className="m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
                  key={tag.name}
                >
                  {tag.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="pt-1 text-slate-500 text-center">
          {/* posted_date(Article) */}
          <span>投稿日: {moment(qiita.created_at).format("YYYY年M月D日")}</span>
        </div>
        <div className="px-14 pt-6 text-lg">
          {/* content(Article) */}
          {/* うまくCSS表示できない */}
          <div className="markdown">
            <ReactMarkdown>{qiita.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      {/* 下記でReactDOM.hydrate()のWarningが発生 */}
      {isExistProfile && (
        <div className="w-1/5 mt-8">
          <QiitaProfileSmall qiita_user={qiita.user} />
        </div>
      )}
    </div>
  );
};

export default QiitaComp;
