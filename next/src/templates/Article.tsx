import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { CommentList, LikeUsersOnArticle } from ".";
import { ArticleDetail, ArticleEdit } from "../components/organisms";
import { useSelectState, useTextState, useToggle } from "../hooks";
import {
  changeFollowStatus,
  changeLikeStatusToArticle,
} from "../lib/api/addData";
import { deleteArticleById } from "../lib/api/deleteData";
import { setArticleUserId } from "../lib/cookie/handleCookie";
import { editArticle } from "../lib/api/editData";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import ModalScreen from "../components/ModalScreen";
import { Button } from "antd";
import { ArticleData, tag, tags } from "../const/Types";

const Article: React.FC = () => {
  const router = useRouter();

  // 記事詳細データ取得
  const { data: articleData } = useSWR("/article");
  // タグデータ取得
  const { data: fetchedTags } = useSWR("/tagsData");

  /**
   * DBにあるタグ情報を取得し、ステートで管理.
   *
   * @remarks
   */
  // フェッチしたタグデータをステートに格納し管理
  const [tagsData, setTagsData] = useState<tags>([]);
  useEffect(() => {
    setTagsData(fetchedTags.tags);
  }, [fetchedTags.tags]);
  // 格納したタグデータからタグIDのみを取り出し、Arrayステートに管理
  const initialTags = new Array<number>();
  const [tagsNum, setTagsNum] = useSelectState(initialTags);
  const insertTags = () => {
    for (const tag of articleData.article.articleTags) {
      initialTags.push(tag.id);
    }
  };
  useEffect(() => {
    insertTags();
  });

  /**
   * Cookieに投稿者のidを追加.
   *
   * @param 記事投稿者ID
   */
  useEffect(() => {
    setArticleUserId(articleData.postedUser.id);
  }, [articleData.postedUser.id]);

  /**
   * 記事情報のステート(編集).
   *
   * @remarks
   * 下記の記事情報をステートで管理して、編集用データとして利用
   * タイトル
   * 内容
   * 技術タグ(IDに紐づくデータ)
   */
  const [title, setTitle] = useTextState(articleData.article.title);
  const [content, setContent] = useTextState(articleData.article.content);
  let tagsByNum = new Array<tag>();
  // 選択済の記事技術タグIDから技術タグを格納する処理
  for (let tagNum of tagsNum) {
    const tagsFilterByTagNum = tagsData.filter((tag: tag) => tag.id === tagNum);
    tagsByNum.push(tagsFilterByTagNum[0]);
  }

  /**
   * 表示フラグ(真偽値)を管理.
   *
   * @remarks 表示の切り替えやログイン状態チェック
   */
  const checkLoginUserFlag = useLoginChecker(articleData.postedUser.id);
  const [editFlag, setEditFlag] = useToggle(false);
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);
  const [previewEditFlag, setPreviewEditFlag] = useToggle(true);

  /**
   * いいねする又はいいねを解除する処理.
   *
   * @remarks APIにいいねを知らせて、ブラウザ側でいいねの状態と数をステートを用いて変更
   * @param 記事ID
   * @param いいねステータス
   *
   */
  const [likesCount, setlikesCount] = useAddOrSubOne(
    articleData.article.likesCount
  );
  // いいねのステータスを真偽値で管理
  const [likeStatus, setlikeStatus] = useToggleByNum(
    articleData.article.likeStatus
  );
  // いいねする処理
  const changeArticleLike = async () => {
    await changeLikeStatusToArticle(articleData.article.id, likeStatus);
    setlikesCount(likeStatus);
    setlikeStatus();
  };

  /**
   * フォローする又はフォローを解除する処理.
   *
   * @remarks APIにフォローを知らせて、ブラウザ側でフォローの状態と数をステートを用いて変更
   * @param 記事ID
   * @param いいねステータス
   *
   */
  // ±1してフォロワー数を管理
  const [followerCount, setFollowerCount] = useAddOrSubOne(
    articleData.postedUser.followerCount
  );
  // フォローのステータスを真偽値で管理
  const [followStatus, setFollowStatus] = useToggleByNum(
    articleData.postedUser.followStatus
  );
  // フォローする処理
  const usrFollowing = async () => {
    await changeFollowStatus(followStatus, articleData.postedUser.id);
    setFollowerCount(followStatus);
    setFollowStatus();
  };

  /**
   * 記事削除を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param 記事ID
   */
  const onDeleteArticle = async () => {
    const res = await deleteArticleById(articleData.article.id);
    if (res.data.status === "success") {
      alert("記事を削除しました。記事一覧に戻ります。");
      router.push("/");
    } else {
      alert("記事を削除できませんでした。");
    }
  };

  /**
   * 記事編集を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param 記事ID
   * @param タイトル
   * @param 内容
   * @param タグIDの配列
   * @throws エラーメッセージを表示して処理終了
   *
   */
  const onEditArticle = async () => {
    //  バリデーションチェック(半角スペースまたは全角スペース、nullのみであったらアラート表示)
    const alertMsg = "記事編集に失敗しました。入力内容を確認してください。";
    if (title === " " || title === "　" || title === null) {
      alert(alertMsg);
      return;
    }
    if (content === " " || content === "　" || content === null) {
      alert(alertMsg);
      return;
    }

    try {
      const res = await editArticle(
        articleData.article.id,
        title,
        content,
        tagsNum
      );
      if (res.data.status === "success") {
        alert("記事編集に成功しました。記事詳細へ戻ります。");
        setEditFlag();
      }
    } catch (error) {
      alert(alertMsg);
    }
  };

  // 詳細記事表示用のデータ
  const article: ArticleData = {
    id: articleData.article.id,
    title: title,
    content: content,
    postedDate: articleData.article.postedDate,
  };
  // 詳細記事編集用のメソッド
  const editFnc = {
    setTitle,
    setContent,
    setTagsNum,
    onEditArticle,
    setPreviewEditFlag,
  };

  return (
    <div className="h-full">
      {likeUserModalStatus && (
        <div>
          <div className="fixed inset-0 z-50">
            <LikeUsersOnArticle
              lieksUserList={articleData.article.lieksUserList}
            />
            <span className="flex justify-center">
              <Button onClick={setLikeUserModalStatus}>
                <span className="hover:text-orange-400">戻る</span>
              </Button>
            </span>
          </div>
          <ModalScreen />
        </div>
      )}

      {editFlag ? (
        <ArticleEdit
          article={article}
          articleTagsNum={tagsNum}
          previewEditFlag={previewEditFlag}
          editFnc={editFnc}
          setEditFlag={setEditFlag}
        />
      ) : (
        <React.Fragment>
          <ArticleDetail
            article={article}
            articleTags={tagsByNum}
            postedUser={articleData.postedUser}
            commentCountOnArticle={articleData.article.comments.length}
            likesCount={likesCount}
            likeStatus={likeStatus}
            followerCount={followerCount}
            followStatus={followStatus}
            changeArticleLike={changeArticleLike}
            checkLoginUserFlag={checkLoginUserFlag}
            changeUsrFollow={usrFollowing}
            setEditFlag={setEditFlag}
            onDeleteArticle={onDeleteArticle}
            setLikeUserModalStatus={setLikeUserModalStatus}
          />
          <CommentList articleId={articleData.article.id} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Article;
