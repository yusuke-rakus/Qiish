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
export const addArticleOnArticle = async (
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post(`${BASEURL}/article/add`, {
    articleId: null,
    userInfoId: guestIdNum,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

//
/**
 * 下書き記事から記事投稿.
 *
 * @param articleId - 下書き記事ID
 * @param title - タイトル
 * @param content - 内容
 * @param tags - タグ
 * @returns
 */
export const addArticleFromSave = async (
  articleId: string,
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post(`${BASEURL}/article/add`, {
    articleId: articleId,
    userInfoId: guestIdNum,
    title: title,
    content: content,
    tags: tags,
  });
  return res;
};

/**
 * 下書き記事保存.
 *
 * @param userId - ログインユーザーID
 * @param title - タイトル
 * @param content - 内容
 * @param tags - タグ
 * @returns 投稿処理のステータス(success・error)
 */
export const saveArticle = async (
  title: string,
  content: string,
  tags: SelectStateType
) => {
  const res = await axios.post(`${BASEURL}/article/save`, {
    userInfoId: guestIdNum,
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
export const addLikeToArticle = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/like`, {
    userInfoId: guestIdNum,
    articleId: articleId,
  });
  return res.data;
};

/**
 * コメントIDに当てはまるコメントにいいねする.
 *
 * @param articleId - 記事ID
 */
export const addLikeToComment = async (commentId: number) => {
  const res = await axios.post(`${BASEURL}/article/commentLike`, {
    userInfoId: guestIdNum,
    commentId: commentId,
  });
  return res.data;
};

/**
 * ユーザー情報IDに当てはまるユーザーをフォローする.
 *
 * @param userInfoIdToFollow - ユーザー情報ID
 */
export const addFollow = async (userInfoIdToFollow?: number) => {
  await axios.post(`${BASEURL}/user/follow`, {
    userInfoId: guestIdNum,
    followUserInfoId: userInfoIdToFollow,
  });
};
