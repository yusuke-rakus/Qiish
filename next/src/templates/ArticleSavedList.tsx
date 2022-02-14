import React, { useState } from "react";
import useSWR from "swr";
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

const ArticleSavedList: React.FC = () => {
  const { data: articleSavedList } = useSWR("/articleSavedList");

  const [tagsNum, setTagsNum] = useState(new Array<number>());
  // プロフィールデータにあるtagのidをinitialTagsに格納
  const insertTags = (articleTags: tags) => {
    let initTags = [];
    for (const tag of articleTags) {
      initTags.push(tag.id);
    }
    setTagsNum(initTags);
  };

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

  const [editFlag, setEditFlag] = useToggle(false);
  const [previewEditFlag, setPreviewEditFlag] = useToggle(true);

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
      toast.error("下書き保存できませんでした...", { icon: "👎" });
      return;
    }
    if (content === " " || content === "　" || content === null) {
      toast.error("下書き保存できませんでした...", { icon: "👎" });
      return;
    }

    try {
      const res = await editArticle(articleId, title, content, tagsNum);

      if (res.data.status === "success") {
        toast.success("下書き保存しました!", { icon: "👍" });
        setEditFlag();
      } else {
        toast.error("下書き保存できませんでした...", { icon: "👎" });
      }
    } catch (error) {
      toast.error("下書き保存できませんでした...", { icon: "👎" });
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
      toast.error("記事削除できませんでした...", { icon: "👎" });
    }
  };

  // 詳細記事表示用のデータ
  const article: ArticleData = {
    id: articleId,
    title: title,
    content: content,
  };
  // 詳細記事編集用のメソッド
  const saveFnc = {
    onChangeTitle,
    onChangeContent,
    setTagsNum,
    onSaveArticle,
    setPreviewEditFlag,
  };

  return (
    <div>
      <div className="ml-20 py-3 text-4xl font-semibold text-orange-500">
        下書き一覧
      </div>
      {editFlag ? (
        <div>
          <ArticleSave
            article={article}
            articleTagsNum={tagsNum}
            previewEditFlag={previewEditFlag}
            saveFnc={saveFnc}
            setEditFlag={setEditFlag}
          />
        </div>
      ) : (
        <div className="flex mt-1 mr-2 bg-white shadow">
          <div className="w-1/4 bg-orange-100">
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
                                "m-1 px-3 py-1 bg-orange-400 text-white font-sans text-xs rounded-sm no-underline "
                              }
                            >
                              {tag.skill}
                            </div>
                          );
                        })}
                      </div>
                    </button>
                    {articleData.id === articleId && (
                      <span className="p-2 h-8 w-16 text-xs bg-orange-300 rounded-2xl">
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
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ArticleSavedList;
