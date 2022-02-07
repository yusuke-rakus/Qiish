import React from "react";
import { ArticleAddFrom } from "../components/organisms";
import { LeftCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SKILL as SKILLTAGS } from "../const/Tags";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addArticle } from "../lib/api/addData";
import { useRouter } from "next/router";
import getCookie from "../lib/cookie/handleCookie";
import toast, { Toaster } from "react-hot-toast";

const ArticleAdd: React.FC = () => {
  const router = useRouter();
  // cookieからuid取得(Number型に変換)
  const userId = Number(getCookie());

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

  // マークダウンで表示確認するフラグ  true: プレビューoff, false: プレビューon
  const [previewFlag, setPreviewFlag] = useToggle(true);

  /**
   * 記事投稿処理を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param userId ログインユーザーID
   * @param title - タイトル
   * @param content - 内容
   * @param tags - タグ
   */
  const onAddArticle = async () => {
    //  バリデーションチェック
    if (title === " " || title === "　" || title === null) {
      toast.error("記事投稿できませんでした...", { icon: "👎" });
      return;
    }
    if (content === " " || content === "　" || content === null) {
      toast.error("記事投稿できませんでした...", { icon: "👎" });
      return;
    }

    try {
      const res = await addArticle(userId, title, content, tags);
      if (res.data.status === "success") {
        toast.success("記事投稿しました!", { icon: "👍" });
        router.push("/");
      } else {
        toast.error("記事投稿できませんでした...", { icon: "👎" });
      }
    } catch (error) {
      toast.error("記事投稿できませんでした...", { icon: "👎" });
    }
  };

  // 詳細記事投稿用のメソッド
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ArticleAdd;
