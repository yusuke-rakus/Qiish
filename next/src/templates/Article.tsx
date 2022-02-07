import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { CommentList, LikeUserListModal } from ".";
import { ArticleDetail, ArticleEdit } from "../components/organisms";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { addLikeToArticle, addFollow } from "../lib/api/addData";
import {
  removeArticleById,
  removeFollow,
  removeLikeToArticle,
} from "../lib/api/removeData";
import { setArticleUserId } from "../lib/cookie/handleCookie";
import { editArticle } from "../lib/api/editData";
import { useLoginChecker } from "../hooks/useLoginChecker";
import { useToggleByNum } from "../hooks/useToggleByNum";
import { useAddOrSubOne } from "../hooks/useAddOrSubOne";
import { ArticleData, tag, tags } from "../const/Types";
import Link from "next/link";
import { LeftCircleOutlined } from "@ant-design/icons";

const Article: React.FC = () => {
  // 記事詳細データ取得
  const { data: articleData } = useSWR("/article");
  // タグデータ取得
  const { data: fetchedTags } = useSWR("/tagsData");

  console.dir(articleData);

  /**
   * DBにあるタグ情報を取得し、ステートで管理.
   */
  // フェッチしたタグデータをステートに格納し管理
  const [tagsData, setTagsData] = useState<tags>([]);
  useEffect(() => {
    setTagsData(fetchedTags.tags);
  }, [fetchedTags.tags]);
  // 格納したタグデータからタグIDのみを取り出し、Arrayステートに管理
  const initialTags = new Array<number>();
  const [tagsNum, setTagsNum] = useSelectState(initialTags);
  // プロフィールデータにあるtagのidをinitialTagsに格納
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
   * @param articleData.postedUser.id -  記事投稿者ID
   */
  useEffect(() => {
    setArticleUserId(articleData.postedUser.id);
  }, [articleData.postedUser.id]);

  /**
   * 記事情報(編集).
   *
   * @remarks
   * 下記の記事情報をステートで管理して、編集用データとして利用
   * タイトル
   * 内容
   * 技術タグ(IDに紐づくデータ)
   */
  const [title, setTitle] = useTextState(articleData.article.title);
  const [content, setContent] = useTextState(articleData.article.content);
  const tagsByNum = new Array<tag>();
  // 選択済の記事技術タグIDから技術タグを格納する処理
  const insertTagsByNum = () => {
    for (let tagNum of tagsNum) {
      const tagsFilterByTagNum = tagsData.filter(
        (tag: tag) => tag.id === tagNum
      );
      tagsByNum.push(tagsFilterByTagNum[0]);
    }
  };
  insertTagsByNum();

  /**
   * 表示フラグ(真偽値)を管理.
   *
   * @remarks 表示の切り替えやログイン状態チェック
   */
  const checkLoginUserFlag = useLoginChecker(articleData.postedUser.id);
  const [editFlag, setEditFlag] = useToggle(false);
  const [previewEditFlag, setPreviewEditFlag] = useToggle(true);

  /**
   * いいねしたユーザーをステートで管理して、データを動的に変更する.
   *
   * @remarks addLikeToArticleメソッドのレスポンスを受け取り、liksUserListを更新する
   */
  const [liksUserList, setLiksUserList] = useState(
    articleData.article.lieksUserList
  );
  // いいねユーザーモーダル表示を真偽値で管理
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);

  /**
   * いいねする又はいいねを解除する処理.
   *
   * @remarks APIにいいねを知らせて、ブラウザ側でいいねの状態と数をステートを用いて変更
   * @param articleData.article.id - 記事ID
   *
   */
  // ±1していいね数を管理
  const [likesCount, setlikesCount] = useAddOrSubOne(
    articleData.article.likesCount
  );
  // いいね状態を真偽値で管理
  const [likeStatus, setlikeStatus] = useToggleByNum(
    articleData.article.likeStatus
  );
  // いいねする処理(いいね中: likeStatus === true, いいねしていない: likeStatus === false)
  // いいねしたユーザー情報を取得し、動的に変更
  const changeArticleLike = async () => {
    if (!likeStatus) {
      const res = await addLikeToArticle(articleData.article.id);
      setLiksUserList(res.likesUserList);
    } else {
      const res = await removeLikeToArticle(articleData.article.id);
      setLiksUserList(res.likesUserList);
    }
    setlikesCount(likeStatus);
    setlikeStatus();
  };

  /**
   * フォローする又はフォローを解除する.
   *
   * @remarks APIにフォローを知らせて、ブラウザ側でフォローの状態と数をステートを用いて変更
   * @param articleData.postedUser.id - 記事投稿者ID
   * @param followStatus - フォロー状態
   *
   */
  // ±1してフォロワー数を管理
  const [followerCount, setFollowerCount] = useAddOrSubOne(
    articleData.postedUser.followerCount
  );
  // フォロー状態を真偽値で管理
  const [followStatus, setFollowStatus] = useToggleByNum(
    articleData.postedUser.followStatus
  );
  // フォローする処理(フォロー中: followStatus === true, フォローしていない: followStatus === false)
  const usrFollowing = async () => {
    if (!followStatus) {
      await addFollow(articleData.postedUser.id);
    } else {
      await removeFollow(articleData.postedUser.id);
    }
    setFollowerCount(followStatus);
    setFollowStatus();
  };

  /**
   * 記事削除を行う.
   *
   * @remarks
   * sucess: トップページへ遷移
   * error: アラートメッセージ表示
   * @param articleData.article.id - 記事ID
   */
  const router = useRouter();
  const onDeleteArticle = async () => {
    const res = await removeArticleById(articleData.article.id);
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
   * @param articleData.article.id - 記事ID
   * @param title - タイトル
   * @param content - 内容
   * @param tagsNum - タグIDの配列
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
  // console.dir(tagsByNum);

  return (
    <div className="h-full">
      <LikeUserListModal
        lieksUserList={liksUserList}
        checkLoginUserFlag={checkLoginUserFlag}
        likeUserModalStatus={likeUserModalStatus}
        setLikeUserModalStatus={setLikeUserModalStatus}
      />

      {editFlag ? (
        <ArticleEdit
          article={article}
          articleTagsNum={tagsNum}
          previewEditFlag={previewEditFlag}
          editFnc={editFnc}
          setEditFlag={setEditFlag}
        />
      ) : (
        <div className="grid grid-flow-row">
          <Link href={"/"}>
            <a className="text-gray-400 hover:text-slate-600">
              <LeftCircleOutlined className="w-1/3 ml-4 mt-6 text-4xl" />
            </a>
          </Link>
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
          <CommentList
            articleId={articleData.article.id}
            checkLoginUserFlag={checkLoginUserFlag}
          />
        </div>
      )}
    </div>
  );
};

export default Article;
