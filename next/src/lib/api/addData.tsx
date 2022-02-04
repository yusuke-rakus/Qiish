import axios from "axios";
import getCookie from "../cookie/handleCookie";
import { SelectStateType } from "../../const/Types";
import { BASEURL } from "../../const/Urls";
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
  const res = await axios.post(`${BASEURL}/user/register`, {
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
  const res = await axios.post(`${BASEURL}/reset`, {
    email: mailAddress,
    password: newPassword,
  });

  return res.data.status;
};

/**
 * 記事投稿.
 *
 * @param userId - ログインユーザーID
 * @param title - タイトル
 * @param content - 内容
 * @param tags - タグ
 * @returns 投稿処理のステータス(success・error)
 */
export const addArticle = async (
  userId: number,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post(`${BASEURL}/article/add`, {
    userInfoId: userId,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

/**
 * 記事IDに当てはまる記事にコメント投稿.
 *
 * @param articleId - 記事ID
 * @param comment - コメント内容
 * @returns 投稿処理のステータス(success・error)
 */
export const addComment = async (articleId: number, comment: string) => {
  const res = await axios.post(`${BASEURL}/article/comment`, {
    articleId: articleId,
    userInfoId: guestIdNum,
    comment: comment,
  });
  return res.data;
};

/**
 * 記事IDに当てはまる記事にいいねする.
 *
 * @param articleId - 記事ID
 */
export const addLikeStatusToArticle = async (articleId: number) => {
  await axios.post(`${BASEURL}/article/like`, {
    userInfoId: guestIdNum,
    articleId: articleId,
  });
};

// コメントいいね機能(likeフラグがtrueになったら+1カウントを返し、falseなら-1カウントを返す)
export const changeLikeStatusToComment = async (
  commentId: number,
  likeStatus: boolean
) => {
  if (!likeStatus) {
    await axios.post(`${BASEURL}/article/commentLike`, {
      userInfoId: guestIdNum,
      commentId: commentId,
    });
  } else {
    await axios.post(`${BASEURL}/article/removeCommentLike`, {
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
    const res = await axios.post(`${BASEURL}/user/follow`, {
      userInfoId: guestIdNum,
      followUserInfoId: userInfoIdToFollow,
    });
    return res;
  } else {
    const res = await axios.post(`${BASEURL}/user/remove`, {
      userInfoId: guestIdNum,
      followUserInfoId: userInfoIdToFollow,
    });
    return res;
  }
};
