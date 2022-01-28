import React, { useState } from "react";
import { useRouter } from "next/router";
import { LeftCircleOutlined } from "@ant-design/icons";
import { ArticleEditFrom } from "../components/organisms";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { editArticle } from "../pages/api/editData";
import { mutate } from "swr";

type Props = {
  article: {
    id: number;
    userInfoId: number;
    title: string;
    content: string;
    postedDate: string;
    articleTags: {
      id: number;
      skill: string;
      image?: string | undefined;
    }[];
  };
  setEditFlag: () => void;
};

const ArticleEdit: React.FC<Props> = ({ article, setEditFlag }) => {
  // カスタムフック使用(Text)
  const [editTitle, setEditTitle] = useTextState(article.title);
  const [editContent, setEditContent] = useTextState(article.content);
  // カスタムフック使用(Select)
  const [editTags, setEditTags] = useSelectState(() => {
    const initialTags = [];
    for (const tag of article.articleTags) {
      initialTags.push(tag.id);
    }
    return initialTags;
  });
  // カスタムフック使用(Toggle)
  const [previewFlag, setPreviewFlag] = useToggle(true);
  const [error, SetError] = useState("");
  const router = useRouter();

  // 通信成功。タグの問題とユーザーIDを解決する。
  // success: 記事が保存されて記事一覧表示  fail: エラーメッセージ表示(未実装)
  const onEditArticle = async () => {
    try {
      const res = await editArticle(
        article.id,
        editTitle,
        editContent,
        editTags
      );
      mutate("http://localhost:9090/article/edit");
      if (res.status === 200) {
        alert("記事編集成功しました。記事一覧へ戻ります。");
        router.push("/");
      }
    } catch (error) {
      SetError("記事編集に失敗しました。");
    }
  };

  const Fnc = {
    setEditTitle,
    setEditContent,
    setEditTags,
    setPreviewFlag,
    onEditArticle,
  };

  const articleData = { editTitle, editContent, editTags };

  return (
    <div>
      <div className="flex justify-center">
        <div className="m-10 lg:w-4/5 md:w-3/5 sm:w-2/5 h-auto">
          <button onClick={setEditFlag}>
            <LeftCircleOutlined className="hover:text-gray-400 ml-4 mb-2 text-4xl" />
          </button>
          <ArticleEditFrom
            previewContent={editContent}
            prevFlag={previewFlag}
            articleData={articleData}
            Fnc={Fnc}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleEdit;
