import React from "react";
import ArticleComp from "../components/organisms/ArticleComp";

const ArticleList: React.FC = () => {
  return (
    <div>
      {articles_demoData.map((articleData) => {
        return <ArticleComp key={articleData.id} articleData={articleData} />;
      })}
    </div>
  );
};
export default ArticleList;

// APIでデータが取ってこれれば不要
// ------------------------------------------
// デモユーザー
const user_info_data = {
  user_info_id: 1,
  first_name: "太郎",
  last_name: "山田",
  user_name: "rakus111111",
  email: "yama@taro.com",
  engineer_type: "",
  comment: "",
};
// デモデータを用意
export const articles_demoData = [
  {
    id: 1,
    // user_info_id: 1,
    user_info_data: user_info_data,
    title: "TailwindCSSのチートシートを公開します。",
    content:
      "プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。",
    posted_date: "12月7日",
    tags: [
      { article_id: 1, skill_id: 1, skill_name: "フロントエンド" },
      { article_id: 1, skill_id: 2, skill_name: "CSS" },
      { article_id: 1, skill_id: 3, skill_name: "tailwindCSS" },
      { article_id: 1, skill_id: 4, skill_name: "初心者" },
    ],
  },
  {
    id: 2,
    // user_info_id: 1,
    user_info_data: user_info_data,
    title: "Gitコマンドのチートシートを公開します。",
    content:
      "Gitの準備 git init, 共有するファイルを選択 git add, ファイル名 選択したファイルを記録 git commit -m メッセージ,リモートリポジトリの準備 git remote add リモートリポジトリ名 URL, リモートリポジトリにファイルをアップロード git push origin master, リモートリポジトリのファイルをダウンロード git pull origin master, 変更したファイルを把握 git status,変更内容を把握 git diff,addしたファイルを確認 git status",
    posted_date: "1月26日",
    tags: [
      { article_id: 2, skill_id: 1, skill_name: "フロントエンド" },
      { article_id: 2, skill_id: 2, skill_name: "CSS" },
      { article_id: 2, skill_id: 3, skill_name: "tailwindCSS" },
      { article_id: 2, skill_id: 4, skill_name: "初心者" },
    ],
  },
];
