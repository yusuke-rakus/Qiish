import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ArticleEdit, CommentList, LikeUsersOnArticle } from ".";
import { ArticleDetail } from "../components/organisms";
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
  // 記事詳細データ取得
  const { data: articleData } = useSWR("/article");
  const { data: fetchedTags } = useSWR("/tagsData");
  const [tagsData, setTagsData] = useState<tags>([]);

  useEffect(() => {
    setTagsData(fetchedTags.tags);
  }, [fetchedTags.tags]);

  // 記事投稿者がログインユーザーかどうか判別して真偽値を返す
  const checkLoginUserFlag = useLoginChecker(articleData.postedUser.id);
  const [title, setTitle] = useTextState(articleData.article.title);
  const [content, setContent] = useTextState(articleData.article.content);
  // カスタムフック使用(編集用記事タグの格納)
  let tagsByNum = new Array<tag>();
  const initialTags = new Array<number>();
  const [tagsNum, setTagsNum] = useSelectState(initialTags);
  // 記事タグの格納
  const insertTags = () => {
    for (const tag of articleData.article.articleTags) {
      initialTags.push(tag.id);
    }
  };
  useEffect(() => {
    insertTags();
  });

  // 選択した記事タグを配列に格納する処理
  for (let tagNum of tagsNum) {
    const tagsFilterByTagNum = tagsData.filter((tag: tag) => tag.id === tagNum);
    tagsByNum.push(tagsFilterByTagNum[0]);
  }
  const [editFlag, setEditFlag] = useToggle(false);
  const [likeUserModalStatus, setLikeUserModalStatus] = useToggle(false);
  const [likesCount, setlikesCount] = useAddOrSubOne(
    articleData.article.likesCount
  );
  const [likeStatus, setlikeStatus] = useToggleByNum(
    articleData.article.likeStatus
  );
  const [followerCount, setFollowerCount] = useAddOrSubOne(
    articleData.postedUser.followerCount
  );
  const [followStatus, setFollowStatus] = useToggleByNum(
    articleData.postedUser.followStatus
  );

  const router = useRouter();
  // cookieに投稿者のidを追加
  useEffect(() => {
    setArticleUserId(articleData.postedUser.id);
  }, [articleData.postedUser.id]);

  // いいね数といいね状態を変更
  const changeArticleLike = async () => {
    await changeLikeStatusToArticle(articleData.article.id, likeStatus);
    // いいねしたら+1、いいねを解除したら-1
    setlikesCount(likeStatus);
    // いいねの真偽値切り替え true:いいね中、false:いいね解除
    setlikeStatus();
  };
  // 現状はログインしているユーザーが本人以外のユーザーをフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存
    await changeFollowStatus(followStatus, articleData.postedUser.id);
    // フォロー数の増減 true(フォロー解除): -1, false(フォローする): +1
    setFollowerCount(followStatus);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setFollowStatus();
  };
  const onDeleteArticle = async () => {
    const res = await deleteArticleById(articleData.article.id);
    if (res.status === 200) {
      alert("記事を削除しました。記事一覧に戻ります。");
      router.push("/");
    } else {
      alert("記事を削除できませんでした。");
    }
  };
  // 記事編集処理
  // sucess: 記事詳細コンプに切り替え, error: アラートメッセージ表示
  const onEditArticle = async () => {
    //  バリデーションチェック
    const alertMsg = "記事編集に失敗しました。入力内容を確認してください。";
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

  const article: ArticleData = {
    id: articleData.article.id,
    title: title,
    content: content,
    postedDate: articleData.article.postedDate,
  };
  const editFunc = { setTitle, setContent, setTagsNum, onEditArticle };

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
          editFunc={editFunc}
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
