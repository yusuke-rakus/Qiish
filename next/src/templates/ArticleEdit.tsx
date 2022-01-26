import React, { useState } from "react";
import { useRouter } from "next/router";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ArticleEditFrom } from "../components/organisms";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticle } from "../pages/api/addData";

type Props = {
  setEditFlag: () => void;
};

const ArticleEdit: React.FC<Props> = ({ setEditFlag }) => {
  // カスタムフック使用(Text)
  const [title, setTitle] = useTextState("");
  const [content, setContent] = useTextState("");
  // カスタムフック使用(Select)
  // バック側でIntegerを求めてたがstringではないのか？
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
        alert("記事編集成功しました。記事一覧へ戻ります。");
        router.push("/");
      }
    } catch (error) {
      SetError("記事編集に失敗しました。");
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
          <button onClick={setEditFlag}>
            <LeftCircleOutlined className="hover:text-gray-400 ml-4 mb-2 text-4xl" />
          </button>
          <ArticleEditFrom
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

export default ArticleEdit;
