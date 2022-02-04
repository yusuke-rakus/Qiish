import axios from "axios";
import { BASEURL } from "../../const/Urls";
import getCookie from "../cookie/handleCookie";
const guestIdByCookie = getCookie();

export const deleteArticleById = async (articleId: number) => {
  const res = await axios.post(`${BASEURL}/article/delete`, {
    articleId: articleId,
    guestId: guestIdByCookie,
  });
  return res;
};
