import axios from "axios";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();
const guestIdNum = Number(guestIdByCookie);

/**
 * 記事IDに当てはまる記事情報の削除.
 *
 * @param articleId - 記事ID
 * @returns 削除処理のステータス(success・error)
 */
export const removeArticleById = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/delete`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });
  return res;
};

/**
 * コメントIDに当てはまるコメント情報の削除.
 *
 * @param commentId - コメントID
 * @returns 削除処理のステータス(success・error)
 */
export const deleteCommnetById = async (commentId: number) => {
  const res = await axios.post(`${BASEURL}/article/commentDelete`, {
    commentId: commentId,
    guestId: guestIdNum,
  });
  return res.data;
};

/**
 * 記事IDに当てはまる記事のいいねを解除する.
 *
 * @param articleId - 記事ID
 */
export const removeLikeToArticle = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/removeLike`, {
    userInfoId: guestIdNum,
    articleId: articleId,
  });
  return res.data;
};

/**
 * コメントIDに当てはまるコメントのいいねを解除する.
 *
 * @param articleId - 記事ID
 */
export const removeLikeToComment = async (commentId: number) => {
  const res = await axios.post(`${BASEURL}/article/removeCommentLike`, {
    userInfoId: guestIdNum,
    commentId: commentId,
  });
  return res.data;
};

/**
 * ユーザー情報IDに当てはまるユーザーのフォローを解除する.
 *
 * @param userInfoIdToFollow - ユーザー情報ID
 */
export const removeFollow = async (userInfoIdToFollow?: number) => {
  await axios.post(`${BASEURL}/user/remove`, {
    userInfoId: guestIdNum,
    followUserInfoId: userInfoIdToFollow,
  });
};
