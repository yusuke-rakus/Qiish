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
 * 記事IDに当てはまる記事のいいねを解除する.
 *
 * @param articleId - 記事ID
 */
export const removeLikeToArticle = async (articleId: number) => {
  await axios.post(`${BASEURL}/article/removeLike`, {
    userInfoId: guestIdNum,
    articleId: articleId,
  });
};

/**
 * コメントIDに当てはまるコメントのいいねを解除する.
 *
 * @param articleId - 記事ID
 */
export const removeLikeToComment = async (commentId: number) => {
  await axios.post(`${BASEURL}/article/removeCommentLike`, {
    userInfoId: guestIdNum,
    commentId: commentId,
  });
};
