import axios from "axios";

export const deleteArticleById = async (articleId: number) => {
  const res = await axios.post("http://localhost:9090/article/delete", {
    articleId: articleId,
    // guestId:guestId
  });
  return res;
};
