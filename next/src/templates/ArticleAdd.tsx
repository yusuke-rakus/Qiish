import React from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticleOnArticle, saveArticle } from "../lib/api/addData";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const ArticleAdd: React.FC = () => {
  const router = useRouter();

  /**
   * 記事情報のステート(投稿).
   *
   * @remarks
   * 下記の記事情報をステートで管理して、投稿用データとして利用
   * タイトル
   * 内容
   * 技術タグ
   */
  const [title, setTitle] = useTextState("");
  const [content, setContent] = useTextState("");
  const [tags, setTags] = useSelectState(new Array<number>());
  const [saveStatus, setSaveStatus] = useToggle(true);

  // マークダウンで表示確認するフラグ  true: プレビューoff, false: プレビューon
  const [previewFlag, setPreviewFlag] = useToggle(true);

  // 投稿イベントが失敗したらトースターを表示させる処理
  const eventAddError = () => {
    toast.error("記事投稿できませんでした...", { icon: "👎" });
  };
  // 保存イベントが失敗したらトースターを表示させる処理
  const eventSaveError = () => {
    toast.error("下書き保存できませんでした...", { icon: "👎" });
  };

  /**
   * 記事投稿処理を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param title - タイトル
   * @param content - 内容
   * @param tags - タグ
   */
  const onAddArticle = async () => {
    //  バリデーションチェック
    if (title === " " || title === "　" || title === null) {
      eventAddError();
      return;
    }
    if (content === " " || content === "　" || content === null) {
      eventAddError();
      return;
    }

    try {
      const res = await addArticleOnArticle(title, content, tags);

      if (res.data.status === "success") {
        toast.success("記事投稿しました!", { icon: "👍" });
        router.push("/");
      } else {
        eventAddError();
      }
    } catch (error) {
      eventAddError();
    }
  };

  /**
   * 下書き記事保存を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param articleData.article.id - 記事ID
   * @param title - タイトル
   * @param content - 内容
   * @param tagsNum - タグIDの配列
   * @throws エラーメッセージを表示して処理終了
   *
   */
  const onSaveArticle = async () => {
    //  バリデーションチェック(半角スペースまたは全角スペース、nullのみであったらアラート表示)
    if (title === " " || title === "　" || title === null) {
      eventSaveError();
      return;
    }
    if (content === " " || content === "　" || content === null) {
      eventSaveError();
      return;
    }

    try {
      const res = await saveArticle(title, content, tags);

      if (res.data.status === "success") {
        toast.success("下書き保存しました!", { icon: "👍" });
        router.push("/articleSaved");
      } else {
        eventSaveError();
      }
    } catch (error) {
      eventSaveError();
    }
  };

  // ステートによって投稿か下書き保存かをする処理
  const addOrSave = () => {
    if (saveStatus) {
      onAddArticle();
    } else {
      onSaveArticle();
    }
  };

  // 詳細記事投稿用のメソッド
  const Fnc = {
    setTitle,
    setContent,
    setTags,
    setPreviewFlag,
    setSaveStatus,
    addOrSave,
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
            saveStatus={saveStatus}
            SKILLTAGS={SKILLTAGS}
          />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ArticleAdd;
