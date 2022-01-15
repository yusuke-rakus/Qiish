import Link from "next/link";
import React from "react";
import { TagsOutlined } from "@ant-design/icons";

const Article: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-200 h-screen">
      <div className="m-10 bg-white w-1/2 h-auto ">
        <div className="ml-5 mt-5 text-sm">
          @ユーザーネーム
          <div className="flex text-slate-500">
            <div>投稿日: 2021年12月7日</div>
            &nbsp;
            <div>更新日: 2021年12月7日</div>
          </div>
        </div>
        <p className="m-4  text-2xl font-bold">
          TailwindCSSのチートシートを公開します。
        </p>
        <p className="px-10 pb-4">
          <TagsOutlined className="text-2xl" />{" "}
          フロントエンド、CSS、tailwindCSS、初心者
        </p>

        <div className="flex justify-center items-center bg-gray-400 box-content ml-8 h-40 w-5/6 p-8 text-center">
          NoImage
        </div>
        <p className="p-10 text-lg">
          プログラミングをしていると、「あれ、どうだったかな？」とリファレンスを確認する場面が結構出てきます。そんな時に、サクッと確認できるのが「チートシート」です。
        </p>
        <div className=" ml-10">
          <Link href="/">
            <a className=" p-2 border border-slate-900 rounded-md hover:text-gray-400">
              トップページへ
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
