import React from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticle } from "../lib/api/addData";
import { useRouter } from "next/router";
import getCookie from "../lib/cookie/handleCookie";

const ArticleAdd: React.FC = () => {
  // 記事
  // タイトル
  const [title, setTitle] = useTextState("");
  // 内容
  const [content, setContent] = useTextState("");
  // 技術タグ
  const [tags, setTags] = useSelectState(new Array<number>());

  const router = useRouter();
  // マークダウンで表示確認するフラグ  true: プレビューoff, false: プレビューon
  const [previewFlag, setPreviewFlag] = useToggle(true);
  // cookieからuid取得(Number型に変換)
  const userId = Number(getCookie());

  /**
   * 記事投稿処理を行う.
   *
   * @remarks
   * sucess: トップページへ遷移する.
   * error: アラートメッセージ表示する.
   */
  const onAddArticle = async () => {
    //  バリデーションチェック
    const errorMsg = "記事投稿に失敗しました。入力内容を確認してください。";
    if (title === " " || title === "　" || title === null) {
      alert(errorMsg);
      return;
    }
    if (content === " " || content === "　" || content === null) {
      alert(errorMsg);
      return;
    }

    try {
      const res = await addArticle(userId, title, content, tags);
      if (res.data.status === "success") {
        alert("記事投稿成功しました。記事一覧へ戻ります。");
        router.push("/");
      } else {
        alert(errorMsg);
      }
    } catch (error) {
      alert(errorMsg);
    }
  };

  // ArticleAddFromで利用するメソッドのまとまり
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
