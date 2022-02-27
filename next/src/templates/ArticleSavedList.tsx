import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  TagOutlined,
  PlusCircleOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { useToggle } from "../hooks";
import { ArticleData, tags } from "../const/Types";
import toast, { Toaster } from "react-hot-toast";
import { ArticleSave } from "../components/organisms";
import { editArticle } from "../lib/api/editData";
import { useRouter } from "next/router";
import { removeArticleById } from "../lib/api/removeData";
import { addArticleFromSave } from "../lib/api/addData";
import { fetchSavedArticleList } from "../lib/api/fetchData";
import getCookie from "../lib/cookie/handleCookie";

const ArticleSavedList: React.FC = () => {
  // 下書き記事一覧情報取得
  const { data: articleSavedList } = useSWR("/articleSavedList");

  /**
   *  tagのidをtagsNumに格納
   */
  const [tagsNum, setTagsNum] = useState(new Array<number>());
  const insertTags = (articleTags: tags) => {
    let initTags = [];
    for (const tag of articleTags) {
      initTags.push(tag.id);
    }
    setTagsNum(initTags);
  };

  /**
   * 下書き記事一覧情報(編集).
   *
   * @remarks
   * 下記の記事情報をステートで管理して、編集用データとして利用
   * ID
   * タイトル
   * 内容
   * 技術タグ(IDに紐づくデータ)
   */
  const [articleId, setArticleId] = useState(
    articleSavedList.articleList[0].id
  );
  const [title, setTitle] = useState(articleSavedList.articleList[0].title);
  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const [content, setContent] = useState(
    articleSavedList.articleList[0].content
  );
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  /**
   * 表示フラグ(真偽値)を管理.
   */
  const [editFlag, setEditFlag] = useToggle(false);
  const [previewEditFlag, setPreviewEditFlag] = useToggle(true);
  const [saveStatus, setSaveStatus] = useToggle(true);

  // 投稿イベントが失敗したらトースターを表示させる処理
  const eventAddError = () => {
    toast.error("記事投稿できませんでした...", { icon: "👎" });
  };
  // 保存イベントが失敗したらトースターを表示させる処理
  const eventSaveError = () => {
    toast.error("下書き保存できませんでした...", { icon: "👎" });
  };
  // 保存イベントが失敗したらトースターを表示させる処理
  const eventDeleteError = () => {
    toast.error("下書き削除できませんでした...", { icon: "👎" });
  };

  /**
   * 記事を選択したら記事の内容が表示されて、ステートにデータをセットする.
   *
   * @param title - 記事のタイトル
   */
  const selectArticle = (title: string) => {
    const foundArticle = articleSavedList.articleList.find(
      (articleData: any) => articleData.title === title
    );
    insertTags(foundArticle.articleTags);
    setArticleId(foundArticle.id);
    setTitle(foundArticle.title);
    setContent(foundArticle.content);
  };

  /**
   * 記事投稿処理を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param title - タイトル
   * @param content - 内容
   * @param tagsNum - タグIDの配列
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
      const res = await addArticleFromSave(articleId, title, content, tagsNum);

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
   * 下書き記事編集を行う.
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
  // ログインユーザーIDと記事IDをCookieから取得
  const guestId = getCookie();
  const guestIdNum = Number(guestId);
  const onEditSavedArticle = async () => {
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
      const res = await editArticle(articleId, title, content, tagsNum);

      if (res.data.status === "success") {
        mutate("/articleSavedList", fetchSavedArticleList(guestIdNum));
        toast.success("下書き保存しました!", { icon: "👍" });
        setEditFlag();
      } else {
        eventSaveError();
      }
    } catch (error) {
      eventSaveError();
    }
  };

  /**
   * 下書き記事の削除を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param articleId - 下書き記事ID
   */
  const router = useRouter();
  const onDeleteArticle = async () => {
    const res = await removeArticleById(articleId);
    if (res.data.status === "success") {
      toast.success("記事削除しました!", { icon: "👍" });
      router.push("/articleSaved");
    } else {
      eventDeleteError();
    }
  };

  // ステートによって投稿か下書き保存かをする処理
  const addOrSave = () => {
    if (saveStatus) {
      onAddArticle();
    } else {
      onEditSavedArticle();
    }
  };

  // 下書き記事表示用のデータ
  const article: ArticleData = {
    id: articleId,
    title: title,
    content: content,
  };
  // 下書き記事編集用のメソッド
  const saveFnc = {
    onChangeTitle,
    onChangeContent,
    setTagsNum,
    addOrSave,
    setSaveStatus,
    setPreviewEditFlag,
  };

  return (
    <div>
      {editFlag ? (
        <div>
          <ArticleSave
            article={article}
            articleTagsNum={tagsNum}
            previewEditFlag={previewEditFlag}
            saveFnc={saveFnc}
            saveStatus={saveStatus}
            setEditFlag={setEditFlag}
          />
        </div>
      ) : (
        <div>
          <div className="ml-20 py-3 text-4xl font-semibold text-sky-400">
            下書き一覧
          </div>
          <div className="flex mt-1 mr-2 bg-white shadow">
            <div className="w-1/4 bg-sky-100">
              {articleSavedList &&
                articleSavedList.articleList.map((articleData: any) => {
                  return (
                    <div
                      key={articleData.id}
                      className="flex px-5 py-3 m-2 bg-white rounded hover:bg-slate-50"
                    >
                      <button
                        className="w-full"
                        onClick={() => selectArticle(articleData.title)}
                      >
                        <span className="text-black text-xl font-bold">
                          {articleData.title}
                        </span>
                        <div className="flex flex-wrap">
                          <span className="pr-2 text-xl">
                            <TagOutlined />
                          </span>

                          {articleData.articleTags.map((tag: any) => {
                            return (
                              <div
                                key={tag.skill}
                                className={
                                  "m-1 px-3 py-1 bg-sky-400 text-white font-sans text-xs rounded-sm no-underline "
                                }
                              >
                                {tag.skill}
                              </div>
                            );
                          })}
                        </div>
                      </button>
                      {articleData.id === articleId && (
                        <span className="text-center p-2 h-8 w-16 text-xs text-white bg-sky-400 rounded-2xl">
                          選択中
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="markdown pt-10 pl-10">
              <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
            <button
              onClick={setEditFlag}
              className="text-6xl fixed right-10 bottom-24 shadow-lg rounded-full text-orange-400 hover:text-orange-200"
            >
              <PlusCircleOutlined />
            </button>
            <button
              onClick={onDeleteArticle}
              className="text-5xl fixed right-10 bottom-10 shadow-lg rounded-full text-orange-400 hover:text-orange-200"
            >
              <RestOutlined />
            </button>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ArticleSavedList;
