import axios from "axios";
import getCookie from "../../hooks/cookie/handleCookie";
const guestIdByCookie = getCookie();

export const deleteArticleById = async (articleId: number) => {
  const res = await axios.post("http://localhost:9090/article/delete", {
    articleId: articleId,
    guestId: guestIdByCookie,
  });
  return res;
};
