import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ArticleEdit, Comments } from ".";
import { ArticleDetail } from "../components/organisms";
import { useToggle } from "../hooks";
import { changeFollowStatus, changeLikeStatus } from "../pages/api/addData";
import { deleteArticleById } from "../pages/api/deleteData";
import getCookie from "../hooks/cookie/handleCookie";

const Article: React.FC = () => {
  const router = useRouter();
  // 記事詳細データ取得
  let { data } = useSWR("/article");
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

  return (
    <div className="h-full">
      {editFlag ? (
        <ArticleEdit article={data.article} setEditFlag={setEditFlag} />
      ) : (
        <React.Fragment>
          <ArticleDetail
            article={data.article}
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
