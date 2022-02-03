import axios from "axios";
import getCookie from "../cookie/handleCookie";
import { SelectStateType } from "../../const/Types";
// ログインユーザーのIdを取得
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

// 会員登録機能
export const registerUser = async (
  userName: string,
  engineerType: string,
  mailAddress: string,
  password: string,
  confirmPassword: string
) => {
  const res = await axios.post("http://localhost:9090/user/register", {
    userName: userName,
    engineerType: engineerType,
    email: mailAddress,
    password: password,
  });

  return res.data;
};

// パスワード再設定機能
export const resetPassword = async (
  mailAddress: string,
  newPassword: string
) => {
  const res = await axios.post("http://localhost:9090/reset", {
    email: mailAddress,
    password: newPassword,
  });

  return res.data.status;
};

// 記事追加機能
export const addArticle = async (
  userId: number,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post("http://localhost:9090/article/add", {
    userInfoId: userId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

// コメント投稿機能
export const addComment = async (articleId: number, comment: string) => {
  const res = await axios.post("http://localhost:9090/article/comment", {
    articleId: articleId,
    userInfoId: guestIdNum,
    comment: comment,
  });
  return res.data;
};

// 記事いいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
export const changeLikeStatusToArticle = async (
  articleId: number,
  likeStatus: boolean
) => {
  if (!likeStatus) {
    await axios.post("http://localhost:9090/article/like", {
      userInfoId: guestIdNum,
      articleId: articleId,
    });
  } else {
    await axios.post("http://localhost:9090/article/removeLike", {
      userInfoId: guestIdNum,
      articleId: articleId,
    });
  }
};
// コメントいいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
export const changeLikeStatusToComment = async (
  commentId: number,
  likeStatus: boolean
) => {
  if (!likeStatus) {
    await axios.post("http://localhost:9090/article/commentLike", {
      userInfoId: guestIdNum,
      commentId: commentId,
    });
  } else {
    await axios.post("http://localhost:9090/article/removeCommentLike", {
      userInfoId: guestIdNum,
      commentId: commentId,
    });
  }
};

// ユーザーフォロー機能
export const changeFollowStatus = async (
  followStatus: boolean,
  userInfoIdToFollow?: number
) => {
  // フォローするならif以下の処理(フォローステータス:0)
  if (!followStatus) {
    const res = await axios.post("http://localhost:9090/user/follow", {
      userInfoId: guestIdNum,
      followUserInfoId: userInfoIdToFollow,
    });
    return res;
  } else {
    const res = await axios.post("http://localhost:9090/user/remove", {
      userInfoId: guestIdNum,
      followUserInfoId: userInfoIdToFollow,
    });
    return res;
  }
};