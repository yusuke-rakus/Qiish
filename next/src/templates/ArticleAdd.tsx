import React from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticle } from "../hooks/api/addData";
import { useRouter } from "next/router";
import getCookie from "../hooks/cookie/handleCookie";

const ArticleAdd: React.FC = () => {
  // カスタムフック使用(Text)
  const [title, setTitle] = useTextState("");
  const [content, setContent] = useTextState("");
  // カスタムフック使用(Select)
  const [tags, setTags] = useSelectState(new Array<number>());
  // カスタムフック使用(Toggle)
  const [previewFlag, setPreviewFlag] = useToggle(true);
  const router = useRouter();
  // cookieからuid取得(Number型に変換)
  const userId = Number(getCookie());

  // 記事投稿処理
  // sucess: トップページへ遷移, error: アラートメッセージ表示
  const onAddArticle = async () => {
    //  バリデーションチェック
    const alertMsg = "記事投稿に失敗しました。入力内容を確認してください。";
    // タイトルが半角スペースまたは全角スペース、nullのみであったらアラート表示
    if (title === " " || title === "　" || title === null) {
      alert(alertMsg);
      return;
    }
    // 記事内容が半角スペースまたは全角スペース、nullのみであったらアラート表示
    if (content === " " || content === "　" || content === null) {
      alert(alertMsg);
      return;
    }

    try {
      const res = await addArticle(userId, title, content, tags);

      if (res.data.status === "success") {
        alert("記事投稿成功しました。記事一覧へ戻ります。");
        router.push("/");
      } else {
        alert(alertMsg);
      }
    } catch (error) {
      alert(alertMsg);
    }
  };

  // 子コンポーネントで利用するメソッド
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
