import React, { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ArticleEdit, Comments } from ".";
import { ArticleDetail } from "../components/organisms";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { changeFollowStatus, changeLikeStatus } from "../pages/api/addData";
import { deleteArticleById } from "../pages/api/deleteData";
import getCookie from "../hooks/cookie/handleCookie";
import { editArticle } from "../pages/api/editData";

const Article: React.FC = () => {
  const router = useRouter();
  // 記事詳細データ取得
  const { data } = useSWR("/article");

  //edit用ステート
  // カスタムフック使用(Text)
  const [title, setTitle] = useTextState(data.article.title);
  const [content, setContent] = useTextState(data.article.content);
  // カスタムフック使用(Select)
  const [tags, setTags] = useSelectState(() => {
    const initialTags = [];
    for (const tag of data.article.articleTags) {
      initialTags.push(tag.id);
    }
    return initialTags;
  });

  const [likeCount, setlikeCount] = useState(data.article.lieksUserList.length);
  const [articleLikeFlag, setArticleLikeFlag] = useToggle(false);
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);
  const [editFlag, setEditFlag] = useToggle(false);

  // cookieからuid取得(Number型に変換)
  const userId = Number(getCookie());

  // 現状はuid１がuid1にフォローする処理
  // 永続化のためにcookieにarticlelikeFlagを立てる
  const changeArticleLike = async () => {
    const addedLike = await changeLikeStatus(
      userId,
      data.article.id,
      likeCount,
      articleLikeFlag
    );
    // いいねしたら+1、いいねを解除したら-1
    setlikeCount(addedLike);
    // いいねの真偽値切り替え true:いいね中、false:いいね解除
    setArticleLikeFlag();
  };
  // 現状はuid１がuid2にフォローする処理
  const usrFollowing = async () => {
    // フォローのデータをDBに保存()
    await changeFollowStatus(usrFollowFlag);
    // フォローの真偽値切り替え true:フォロー中、false:フォロー解除
    setUsrFollowFlag();
  };
  const onDeleteArticle = async () => {
    const res = await deleteArticleById(data.article.id);
    if (res.status === 200) {
      alert("記事を削除しました。記事一覧に戻ります。");
      router.push("/");
    } else {
      alert("記事を削除できませんでした。");
    }
  };
  // 通信成功。タグの問題とユーザーIDを解決する。
  // success: 記事が保存されて記事一覧表示  fail: アラート表示
  const onEditArticle = async () => {
    try {
      const res = await editArticle(data.article.id, title, content, tags);
      if (res.status === 200) {
        setEditFlag();
      }
    } catch (error) {
      alert("記事編集に失敗しました");
    }
  };

  const article = {
    id: data.article.id,
    title: title,
    content: content,
    postedDate: data.article.postedDate,
  };
  const editFunc = { setTitle, setContent, setTags, onEditArticle };

  return (
    <div className="h-full">
      {editFlag ? (
        <ArticleEdit
          article={article}
          articleTagsNum={tags}
          editFunc={editFunc}
          setEditFlag={setEditFlag}
        />
      ) : (
        <React.Fragment>
          <ArticleDetail
            article={article}
            articleTags={data.article.articleTags}
            postedUser={data.postedUser}
            likeCount={likeCount}
            articleLikeFlag={articleLikeFlag}
            changeArticleLike={changeArticleLike}
            usrFollowFlag={usrFollowFlag}
            changeUsrFollow={usrFollowing}
            setEditFlag={setEditFlag}
            onDeleteArticle={onDeleteArticle}
          />
          <Comments />
        </React.Fragment>
      )}
    </div>
  );
};

export default Article;
