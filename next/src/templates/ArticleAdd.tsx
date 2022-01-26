import React, { useState } from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticle } from "../pages/api/addData";
import { useRouter } from "next/router";

const ArticleAdd: React.FC = () => {
  // カスタムフック使用(Text)
  const [title, setTitle] = useTextState("");
  const [content, setContent] = useTextState("");
  // カスタムフック使用(Select)
  const [tags, setTags] = useSelectState([]);
  // カスタムフック使用(Toggle)
  const [previewFlag, setPreviewFlag] = useToggle(true);
  const [error, SetError] = useState("");
  const router = useRouter();

  // 通信成功。タグの問題とユーザーIDを解決する。
  // success: 記事が保存されて記事一覧表示  fail: エラーメッセージ表示(未実装)
  const onAddArticle = async () => {
    try {
      const res = await addArticle(title, content, tags);
      if (res.status === 200) {
        alert("記事投稿成功しました。記事一覧へ戻ります。");
        router.push("/");
      }
    } catch (error) {
      SetError("記事投稿に失敗しました。");
    }
  };

  const Fnc = {
    setTitle,
    setContent,
    setTags,
    setPreviewFlag,
    onAddArticle,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 lg:w-4/5 md:w-3/5 sm:w-2/5 h-auto">
          <Link href={"/"}>
            <a className="text-gray-400 hover:text-slate-600">
              <LeftCircleOutlined className="ml-4 mb-2 text-4xl" />
            </a>
          </Link>
          <ArticleAddFrom
            previewContent={content}
            prevFlag={previewFlag}
            Fnc={Fnc}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleAdd;
