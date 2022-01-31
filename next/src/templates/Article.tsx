import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ArticleEdit, CommentList } from ".";
import { ArticleDetail } from "../components/organisms";
import { useSelectState, useTextState, useToggle } from "../hooks";
import { changeFollowStatus, changeLikeStatus } from "../pages/api/addData";
import { deleteArticleById } from "../pages/api/deleteData";
import { setArticleUserId } from "../hooks/cookie/handleCookie";
import { editArticle } from "../pages/api/editData";
import axios from "axios";
import { useLoginChecker } from "../hooks/useLoginChecker";

const Article: React.FC = () => {
  const router = useRouter();
  // 記事詳細データ取得
  const { data } = useSWR("/article");

  //edit用ステート
  // カスタムフック使用(Text)
  const [title, setTitle] = useTextState(data.article.title);
  const [content, setContent] = useTextState(data.article.content);
  // 記事タグの格納
  const initialTags: number[] = [];
  useEffect(() => {
    for (const tag of data.article.articleTags) {
      initialTags.push(tag.id);
    }
  }, [data.article.articleTags, initialTags]);
  // カスタムフック使用(編集用記事タグの格納)
  const [tagsNum, setTagsNum] = useSelectState(initialTags);

  // タグのid,skill,imageを取得
  let tagsByNum: any = [];
  const [tagsData, setTagsData] = useState<any>();
  useEffect(() => {
    const tagsData = async () => {
      const res = await axios.get("http://localhost:9090/getTag");
      setTagsData(res.data.tags);
    };
    tagsData();
  }, []);
  // 選択した記事タグを配列に格納する処理
  for (let tagNum of tagsNum) {
    const tagsFilterByTagNum = tagsData.filter((tag: any) => tag.id == tagNum);
    tagsByNum.push(tagsFilterByTagNum[0]);
  }

  // 記事投稿者がログインユーザーかどうか判別
  const checkLoginUserFlag = useLoginChecker(data.postedUser.id);

  const [likeCount, setlikeCount] = useState(data.article.lieksUserList.length);
  const [articleLikeFlag, setArticleLikeFlag] = useToggle(false);
  // const [usrFollowFlag, setUsrFollowFlag] = useToggle(false);
  const [usrFollowFlag, setUsrFollowFlag] = useToggle(data.article.likeStatus);
  const [editFlag, setEditFlag] = useToggle(false);

  // cookieに投稿者のidを追加
  useEffect(() => {
    setArticleUserId(data.postedUser.id);
  }, [data.postedUser.id]);

  // 現状はuid１がuid1にフォローする処理
  // 永続化のためにcookieにarticlelikeFlagを立てる
  const changeArticleLike = async () => {
    const addedLike = await changeLikeStatus(
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
    await changeFollowStatus(usrFollowFlag, data.postedUser.id);
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
      const res = await editArticle(data.article.id, title, content, tagsNum);
      if (res.data.status === "success") {
        alert("記事編集に成功しました。記事詳細へ戻ります。");
        setEditFlag();
      }
    } catch (error) {
      alert(alertMsg);
    }
  };

  const article = {
    id: data.article.id,
    title: title,
    content: content,
    postedDate: data.article.postedDate,
  };
  const editFunc = { setTitle, setContent, setTagsNum, onEditArticle };

  return (
    <div className="h-full">
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
            postedUser={data.postedUser}
            likeCount={likeCount}
            articleLikeFlag={articleLikeFlag}
            changeArticleLike={changeArticleLike}
            checkLoginUserFlag={checkLoginUserFlag}
            usrFollowFlag={usrFollowFlag}
            changeUsrFollow={usrFollowing}
            setEditFlag={setEditFlag}
            onDeleteArticle={onDeleteArticle}
          />
          <CommentList
            comments={data.article.comments}
            articleId={data.article.id}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Article;
