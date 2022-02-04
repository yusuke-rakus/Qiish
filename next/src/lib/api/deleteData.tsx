import axios from "axios";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();

/**
 * 記事IDに当てはまる記事情報の削除.
 *
 * @param articleId - 記事ID
 * @returns 削除処理のステータス(success・error)
 */
export const deleteArticleById = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/delete`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });
  return res;
};
